// Plugins

import vuetify from './vuetify';
import { createPinia } from 'pinia';
import router from '../router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export function registerPlugins (app) {
  app
   
    .use(vuetify)
    .use(router)
    .use(pinia)

}
