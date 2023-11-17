<script setup>
import { watch, ref } from 'vue'
import AppGoods from '@/views/AppGoods.vue'
import AppHeader from '@/views/AppHeader.vue'
import AppHero from '@/views/AppHero.vue'
import AppServices from '@/views/AppServices.vue'
import { useI18n } from 'vue-i18n'
import { Crisp } from 'crisp-sdk-web'

const website_id = import.meta.env.VITE_CRISP_WEBSITE_ID
const { locale } = useI18n()

const newLocale = ref(locale)

Crisp.configure(website_id, {
  locale: newLocale.value
})

watch(locale, (newValue) => {
  Crisp.configure(website_id, {
    locale: newValue
  })
})
</script>

<template>
  <AppHeader />
  <AppHero />
  <AppServices style="transform: translateY(-100px)" />
  <AppGoods />
</template>

<style scoped></style>
