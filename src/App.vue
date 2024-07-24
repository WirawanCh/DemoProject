
<template>
 <appbar-component /> 
 <toggle-component /> 

      <v-col sm="12" md="12" lg="12">
        <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-layout class="rounded rounded-md round-sm round-lg">
       <!-- <nav-component /> -->
    <v-main ><RouterView /></v-main>
    </v-layout>
    </v-app>
  </v-col>
</template>
<script >
import appbar from './components/appbar.vue'
import toggle from './components/Toggle.vue'
// import navigation from './components/Navigation.vue'

export default {
  name: "App",

  components: {
    "appbar-component": appbar,
    "toggle-component": toggle
  },
};


</script>

<style scoped>



</style>
