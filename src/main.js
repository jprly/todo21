import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';



import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import Checkbox from 'primevue/checkbox';

import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';

const app = createApp(App)
app.use(router);
app.use(PrimeVue);
app.component("Button", Button);
app.component("Checkbox", Checkbox);
app.component("InputText", InputText);
app.component("Dialog", Dialog);

app.mount('#app');