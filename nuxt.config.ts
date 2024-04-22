// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'wl-api-collections-module', 'wl-composable-module', '@nuxtjs/tailwindcss', 'nuxt-primevue'],
  runtimeConfig: {
    baseApiUrl: '',
    trailingApiUrl: '',
    grantType: '',
    clientId: '',
    clientSecret: '',
    public: {
      clientId: process.env.NUXT_CLIENT_ID,
      clientSecret: process.env.NUXT_CLIENT_SECRET,
      grantType: process.env.NUXT_GRANT_TYPE
    }
  },
})
