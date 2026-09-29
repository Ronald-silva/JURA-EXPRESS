import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { createHiggsfieldClient } from '@higgsfield/client/v2';

// Load .env.local manually if dotenv isn't working
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

async function main(): Promise<void> {
  // Get credentials from environment
  const credentials = process.env.HF_CREDENTIALS;
  
  if (!credentials) {
    throw new Error(
      'HF_CREDENTIALS not set in .env.local. ' +
      'Please add your API credentials in key-id:key-secret format.'
    );
  }

  // Create client with credentials
  const client = createHiggsfieldClient({
    credentials: credentials,
    maxPollTime: 600000, // 10 minutes max wait
    pollInterval: 2000   // Check every 2 seconds
  });

  console.log('🎬 Starting Seedance 2.5 text-to-video generation...');
  console.log('📝 Prompt: A cinematic scene at sunset');
  console.log('⏱️  Duration: 5 seconds');
  console.log('📐 Resolution: 720p, Aspect ratio: 16:9\n');

  try {
    // Subscribe to text-to-video generation
    const response = await client.subscribe(
      'bytedance/seedance-2.5/text-to-video',
      {
        input: {
          prompt: 'A cinematic scene at sunset',
          duration: 5,
          resolution: '720p',
          aspect_ratio: '16:9'
        },
        withPolling: true
      }
    );

    console.log('Response status:', response.status);

    // Check completion status
    if (response.status === 'completed') {
      console.log('✅ Generation completed successfully!\n');
      
      if (response.video?.url) {
        console.log('🎥 Generated Video URL:');
        console.log(response.video.url);
      } else if ((response as any).images?.[0]?.url) {
        console.log('🎥 Generated Video URL:');
        console.log((response as any).images[0].url);
      } else {
        console.log('Response object:', JSON.stringify(response, null, 2));
      }
    } else if (response.status === 'failed') {
      console.error('❌ Generation failed');
      process.exit(1);
    } else if (response.status === 'nsfw') {
      console.warn('⚠️  Content was flagged as NSFW and rejected. Credits refunded.');
      process.exit(1);
    } else {
      console.error('⏸️  Status:', response.status);
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

main();
