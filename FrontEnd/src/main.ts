import { createApp } from 'vue';
import App from './App.vue';
import SvgIcon from '../src/components/SvgIcon.vue';

const app = createApp(App);

app.component('SvgIcon', SvgIcon); // Registro global do componente
app.mount('#app');