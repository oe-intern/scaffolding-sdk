import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import AppConfig from './configs/app';

import './normalize';
import './bootstrap';

if (!window.OE_SCAFFOLDING_LOADED) {
  createApp(App)
    .use(store)
    .mount(`#${AppConfig.ELEMENT_ID}`);

  window.OE_SCAFFOLDING_LOADED = true;
}

