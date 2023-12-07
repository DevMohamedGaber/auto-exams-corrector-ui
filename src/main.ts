/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.headers.common['accept'] = '*/*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const app = createApp(App)

registerPlugins(app)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

app.mount('#app')
