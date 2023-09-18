// Utilities
import { defineStore } from 'pinia'

import axios from 'axios'

import  router  from '../router';

const urlUser = import.meta.env.VITE_APP_IPAUTH;

export const useAdminStore = defineStore({
  id: 'user',
  state: () => ({
     AdminData:[],
  }), 
  actions: 
  {
    async load() 
    {
      try {
        const response = await axios.get(urlUser + '/userlist');
        this.AdminData = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async delete(id) 
    {
      console.log(id);
      axios.post(urlUser + '/deleteuser', { id })
    },
    async updateuser(name, surname, role , id , department) 
    {
      console.log(name, surname, role , id, department);
      axios.post(urlUser + '/updateuser', { name, surname, role , id, department})
    },
    async updatepassword( id,password) 
    {
      console.log( id, password);
      axios.post(urlUser + '/updatepassword', { id , password })
      this.userId = null;
      window.localStorage.clear();
      router.replace("/Login");
    },
    async deleteuser(id) 
    {
      console.log(id);
      axios.post(urlUser + '/deleteuser', { id })
      this.userId = null;
      window.localStorage.clear();
      router.replace("/Login");
    },
  },
  persist:true
})
