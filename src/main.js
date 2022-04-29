import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputMask from "primevue/inputmask";
import Button from "primevue/button";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/custom.css";

const app = createApp(App);

app.use(PrimeVue);
app.component("InputMask", InputMask);
app.component("NewButton", Button);
app.mount("#app");
