import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import EN from './locale/en.json'
import UK from './locale/uk.json'

import './assets/main.css'
import { getCookie, setCookie } from './helpers/cookie'

const setInitLocale = (locale) => {
	if (getCookie('locale') === undefined) {
		setCookie('locale', locale)
		document.documentElement.lang = locale
		return locale
	}
	document.documentElement.lang = getCookie('locale')
	return getCookie('locale')
}

const i18n = createI18n({
	locale: setInitLocale('en-US'),
	fallbackLocale: 'en-US',
	messages: {
		"en-US": EN,
		"uk": UK
	},
	legacy: false
})

createApp(App).use(i18n).mount('#app')
