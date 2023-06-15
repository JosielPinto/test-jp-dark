import './bootstrap';
import {createApp} from 'vue';
import Welcome from './Components/Welcome.vue';
import NuevoRegistro from './Components/NuevoRegistro.vue';

createApp(Welcome, NuevoRegistro).mount('#app');