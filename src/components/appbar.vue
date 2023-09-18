<template>
  <div  v-if="$route.path !== '/Login'">
    <v-layout class="rounded rounded-md"  v-if="$route.path !== '/Login'">
      <v-navigation-drawer color="#363A57" expand-on-hover v-model="drawer" hide-overlay rail permanent>
     
        <!-- <span class="text-white">
          {{ this.Userdata.name }} {{ this.Userdata.surname }}
          </span>
        <v-divider></v-divider> -->
          <p class="text-center text-white mt-10">Demo</p>
          <v-divider></v-divider>
       <p class="mt-5"></p> <v-list density="compact" nav>
          <v-list-item 
            v-if="this.roleauth.includes('OEE') "
            value="OEE"
            to="/"
          >
          <v-icon color="white" >mdi-home </v-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<v-text class="text-white">OEE</v-text>
          </v-list-item>

          <v-list-item
            v-if="this.roleauth.includes('Energy') "
            value="Energy"
            to="/Energy"
          >
          <v-icon color="white" >mdi-fire</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<v-text class="text-white">Energy</v-text>
          </v-list-item>


          <v-list-item
          v-if="this.roleauth.includes('Inverter') "
            value="Inverter"
            to="/Inverter"
          >
          <v-icon color="white" >mdi-thermometer</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<v-text class="text-white">Inverter</v-text>
          </v-list-item>


          <v-divider></v-divider>

          <v-list-item
          v-if="this.roleauth.includes('Admin') "
            value="Admin"
            to="/Admin"
          >
          <v-icon color="white" >mdi-account</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<v-text class="text-white">Admin</v-text>
          </v-list-item>


          <v-list-item
            v-if="$route.path !== '/Login'"
            @click="Logout"
          >
          <v-icon color="white">mdi-logout-variant</v-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<v-text class="text-white">Logout</v-text>
          </v-list-item>
          
        </v-list>
       
      </v-navigation-drawer>

      <!-- <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
   Main Content
 </v-main> -->
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
import jwt from "jsonwebtoken";
//import  router  from '../router';
import { useAuthStore } from "../store";
//const AuthStore = useAuthStore
// const uriserver = process.env.IPAUTH

export default {
  data() {
    return {
      value: 1,
      drawer: true,
      group: null,
      rail: true,
      roleauth: "",
      RoleData: "",
      Userdata: "",

      items: [
        {
          title: "DiscountAdmin",
          icon: "mdi-view-dashboard",
          path: "/DiscountAdmin",
        },
        {
          title: "DiscountAdmin",
          icon: "mdi-view-dashboard",
          path: "/DiscountAdmin",
        },
        {
          title: "ManageData",
          icon: "mdi-view-dashboard",
          path: "/ManageData",
        },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline", path: "/Admin" },
        {
          title: "Account Settings",
          icon: "mdi-account-cog-outline",
          path: "/AccountSettings ",
        },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },

  created() {
    this.readuser();
    this.readuser2();
  },

  methods: {
    async readuser() {
      const AuthStore = useAuthStore();
      this.Userdata = AuthStore.$state.userdata;
    },

    readuser2() {
      axios
        .get(import.meta.env.VITE_APP_IPAUTH + "/user", {
          headers: { token: window.localStorage.token },
        })
        .then((res) => {
          let authdecode = jwt.decode(res.data.Auth);

          this.roleauth = authdecode.pages;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Logout() {
      window.localStorage.clear();
      this.$router.replace("/Login");
    },
  },

  updated() {
    this.readuser();
    this.readuser2();
  },
};
</script>
<style></style>
