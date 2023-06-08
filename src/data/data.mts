export const FRONT_END_FRAMEWORKS = [
  "react",
  "vue",
  "svelte",
  "qwik",
  "solid",
  "astro",
  "solid",
  "angular",
];

export const META_FRAMEWORKS = [
  "next",
  "nuxt",
  "svelte kit",
  "qwik city",
  "solid start",
];

// Randomize to get the combined_framework tuple, then randomize the tuple to get the framework or meta_framework
export const CLI_COMMANDS = {
  react: "npm create vite@latest -- --template react-ts",
  vue: "npm create vite@latest -- --template vue-ts",
  svelte: "npm create vite@latest -- --template svelte-ts",
  next: "npx create-next-app@latest",
  qwik: "npm create qwik@latest",
  qwikCity: "npm create qwik@latest",
  solidStart: "npm init solid@latest",
  astro: "npm create astro@latest",
  // Require a space after the command for project name
  nuxt: "npx nuxi@latest init ",
  svelteKit: "npm create svelte@latest ",
  solid: "npx degit solidjs/templates/ts ",
  angular: "npx degit angular/vite-app ",
};

export const FRAMEWORKS = [...FRONT_END_FRAMEWORKS, ...META_FRAMEWORKS];
