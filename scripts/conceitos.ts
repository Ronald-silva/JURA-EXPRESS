/**
 * Conceitos de vídeo para o Hero da Jura Express.
 *
 * Todos evitam rostos humanos em close: é aí que o vídeo gerado por IA
 * denuncia-se, e um rosto ligeiramente errado estraga uma página premium.
 * A leitura vem do movimento, da luz e da mochila azul de entregas.
 */
export interface Conceito {
  chave: string;
  titulo: string;
  prompt: string;
  duracao: number;
  resolucao: "720p" | "1080p";
  proporcao: "16:9" | "9:16" | "1:1";
  /** Nome do ficheiro em web/public/media/, sem extensão. */
  ficheiro: string;
}

export const CONCEITOS: Record<string, Conceito> = {
  arranque: {
    chave: "arranque",
    titulo: "Arranque ao amanhecer",
    prompt:
      "Cinematic slow motion shot from behind of a delivery rider wearing a blue jacket and a large blue delivery backpack, mounting a red motorcycle on a quiet Brazilian residential street at golden sunrise. Warm backlight, long shadows, shallow depth of field, camera slowly pushes in. Photorealistic commercial cinematography, no visible face, natural colors, 35mm film look.",
    duracao: 5,
    resolucao: "1080p",
    proporcao: "9:16",
    ficheiro: "hero-motoboy",
  },

  cidade: {
    chave: "cidade",
    titulo: "Movimento pela cidade",
    prompt:
      "Cinematic tracking shot following a motorcycle courier carrying a large blue delivery box through a Brazilian city street at golden hour. Smooth gimbal movement alongside the bike, warm sunlight flares, motion blur on the background buildings, rider seen from behind and side, helmet on, no visible face. Photorealistic commercial advertising cinematography, shallow depth of field, natural colors.",
    duracao: 5,
    resolucao: "1080p",
    proporcao: "9:16",
    ficheiro: "hero-motoboy",
  },

  partida: {
    chave: "partida",
    titulo: "Detalhe da partida",
    prompt:
      "Extreme close-up of a gloved hand twisting a motorcycle throttle, blue delivery backpack visible blurred behind, early morning light, shallow depth of field, subtle engine vibration and heat haze. Cinematic commercial advertising style, photorealistic, warm natural colors, macro lens look.",
    duracao: 5,
    resolucao: "1080p",
    proporcao: "9:16",
    ficheiro: "hero-motoboy",
  },
};
