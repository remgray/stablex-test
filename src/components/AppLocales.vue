<script setup>
import { useI18n } from 'vue-i18n'
import { setCookie } from '../helpers/cookie'

const { locale } = useI18n()

const changeCurrentLocale = (newLocale) => {
  locale.value = newLocale
  setCookie('locale', newLocale)
  document.documentElement.lang = newLocale
}
</script>

<template>
  <div class="locale-bar">
    <button
      @click="changeCurrentLocale(locale)"
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      class="locale-btn"
    >
      {{ locale.split('-')[0] }}
    </button>
  </div>
</template>

<style scoped>
.locale-bar {
  display: flex;
  justify-content: flex-end;
}
.locale-btn {
  background: none;
  border: none;
  color: var(--text-color);
  padding: 0 5px;
  text-transform: uppercase;
  cursor: pointer;
}
.locale-btn + .locale-btn {
  border-left: 1px solid var(--text-color);
}
</style>
