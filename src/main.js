
import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from './plugins'
import { VueCsvImportPlugin } from "vue-csv-import";
import UseCSVButton from "@usecsv/vuejs3"
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueApexCharts from 'vue3-apexcharts'
import VueSpeedometer from "vue-speedometer";


import 'vuetify/dist/vuetify.min.css';



createApp(App)
.use(VueApexCharts)
.use(VueCsvImportPlugin)
.use(registerPlugins)
.use(UseCSVButton)
.use(VueSpeedometer)



.component('EasyDataTable', Vue3EasyDataTable)


.mount("#app");
