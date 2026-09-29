import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { createHiggsfieldClient } from '@higgsfield/client/v2';

// Load .env.local
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=');
      if (key && value) {
        process.env[key] = value;
      }
    }
  });
}

interface VideoConfig {
  prompt: string;
  duration?: number;
  resolution?: '720p' | '1080p';
  aspect_ratio?: '16:9' | '9:16' | '1:1';
}

async function generateVideo(config: VideoConfig): Promise<void> {
  const credentials = process.env.HF_CREDENTIALS;
  
  if (!credentials) {
    throw new Error(
      'HF_CREDENTIALS not set in .env.local. ' +
      'Please add your API credentials in key-id:key-secret format.'
    );
  }

  const client = createHiggsfieldClient({
    credentials: credentials,
    maxPollTime: 600000,
    pollInterval: 2000
  });

  const finalConfig = {
    prompt: config.prompt,
    duration: config.duration || 5,
    resolution: config.resolution || '720p',
    aspect_ratio: config.aspect_ratio || '16:9'
  };

  console.log('\n🎬 Generating video...');
  console.log(`📝 Prompt: ${finalConfig.prompt}`);
  console.log(`⏱️  Duration: ${finalConfig.duration}s`);
  console.log(`📐 Resolution: ${finalConfig.resolution}, Aspect: ${finalConfig.aspect_ratio}\n`);

  try {
    const response = await client.subscribe(
      'bytedance/seedance-2.5/text-to-video',
      {
        input: finalConfig,
        withPolling: true
      }
    );

    if (response.status === 'completed') {
      console.log('✅ Video generated successfully!\n');
      
      if (response.video?.url) {
        console.log('🎥 Video URL:');
        console.log(response.video.url);
      } else if ((response as any).images?.[0]?.url) {
        console.log('🎥 Video URL:');
        console.log((response as any).images[0].url);
      }
    } else if (response.status === 'failed') {
      console.error('❌ Generation failed');
      process.exit(1);
    } else if (response.status === 'nsfw') {
      console.warn('⚠️  Content flagged as NSFW. Credits refunded.');
      process.exit(1);
    } else {
      console.error('Status:', response.status);
      process.exit(1);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('💥 Error:', error.message);
    } else {
      console.error('💥 Unexpected error:', error);
    }
    process.exit(1);
  }
}

// Example usage
generateVideo({
  prompt: 'A cinematic scene at sunset',
  duration: 5,
  resolution: '720p',
  aspect_ratio: '16:9'
});
