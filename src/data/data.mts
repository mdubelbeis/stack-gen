export const FRONT_END_FRAMEWORKS = [
  "react",
  "vue",
  "svelte",
  "qwik",
  "solid",
  "astro",
  "solid",
];

export const META_FRAMEWORKS = [
  "next",
  "nuxt",
  "sveltekit",
  "qwikcity",
  "solidstart",
];

// Randomize to get the combined_framework tuple, then randomize the tuple to get the framework or meta_framework
export const CLI_COMMANDS = {
  react: "npm create vite@latest -- --template react-ts",
  vue: "npm create vite@latest -- --template vue-ts",
  svelte: '"npm create vite@latest -- --template svelte-ts',
  next: "npx create-next-app@latest",
  qwik: "npm create qwik@latest",
  qwikcity: "npm create qwik@latest",
  solidstart: "npm init solid@latest",
  nuxt: "npx nuxi@latest init ",
  sveltekit: "npm create svelte@latest ",
  solid: "npx degit solidjs/templates/ts ",
  astro: "npm create astro@latest",
};

export const FRAMEWORKS = [...FRONT_END_FRAMEWORKS, ...META_FRAMEWORKS];
