// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/supabase',
  ],

  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'], // <!--- this
    },
  },

  googleFonts: {
    families: {
      // List the fonts you want here
      Inter: true, // All weights of Inter
      Lora: true, // All weights for Lora
    },

    prefetch: true, // Preload fonts during the build
    preconnect: true, // Preconnect to Google's font servers
    display: 'swap', // Ensure text remains visible during font loading
  },

  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_ANON_KEY,
    },
  },

  app: {
    head: {
      title: 'Nuxt App',
      meta: [
        {
          name: 'description',
          content: 'Nuxt app with Supabase and Tailwind.',
        },
      ],

      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
