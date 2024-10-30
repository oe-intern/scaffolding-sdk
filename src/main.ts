import { createApp } from 'vue';
import App from '@/App.vue';
import { AppConfig } from '@/config';

if (!window.APP_LOADED) {
	createApp(App).mount(`#${AppConfig.ELEMENT_ID}`);
	window.APP_LOADED = true;
}
