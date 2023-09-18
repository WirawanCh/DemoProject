// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'
import jwt from 'jsonwebtoken'



import router from '../router';

const urlUser  = import.meta.env.VITE_APP_IPAUTH;


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    returnUrl: null,
    roleuser: "",
    name: "",
    userId: null,
    msg: false,
    password: "",
    error: "",
    userdata: '',
    RolseData: [],
  }),
  getters: {
    getUserById: (state) => {
      state.userId, console.log(state.userId);
    },
  },
  actions: {
    login(username, password) {
      if (this.userId !== null) throw new Error('Already logged in')
      axios.post(urlUser + '/login', { username, password })
        /// axios.post('http://192.168.100.94:5000/login', { username, password })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            axios.get(urlUser + '/user',
              {
                headers: { token: window.localStorage.token }
              })
              .then((res) => {
                let rolesdecode = jwt.decode(res.data.SecretID);
                this.userdata = rolesdecode.user
                console.log(this.userdata)
                router.push({
                  name: "OEE",
                  query: { id: rolesdecode.userId },
                });
              }).catch((err) => {
                console.log(err)
                localStorage.setItem("token", res.data.token);
                alert("Token Expired, Please login again" + "(" + err + ")");
              });
          }
        }).catch((err) => {
          if (username == "" && password == "") {
            console.log(err.response);
            alert("Username or Password Required");
          }
          else if (username == "" || password == "") {
            console.log(err.response);
            alert("Wrong Username or Password");
          }
          else {
            console.log(err.response);
            alert(err);
          }
        })
    },
    register(name, surname, username, password, role, department) {
      console.log(name, surname, username, password, role, department)
      axios.post(urlUser+ '/Signup', { name, surname, username, password, role, department });
      //  router.push('/Admin')
    },
    profileedit(id, name, surname, department) {
      console.log(id, name, surname, department)
      axios.post(urlUser + '/profileedit', { id, name, surname, department });
      axios.get(urlUser +'/user',
        {
          headers: { token: window.localStorage.token }
        })
        .then((res) => {
          let rolesdecode = jwt.decode(res.data.SecretID);
          let authdecode = jwt.decode(res.data.Auth);

          this.roleauth = authdecode.pages
          this.userdata = rolesdecode.user
        }).catch((err) => {
          console.log(err)
          localStorage.clear();
          alert("Token Expired, Please login again" + "(" + err + ")");
        });
      //  router.push('/Admin')
    },
    async rolelist(roledata) {
      try {
        const response = await axios.get(urlUser +'/rolelist', { headers: { role: roledata } });
        this.RolseData = response.data[0];
        console.log(this.RolseData);
      } catch (error) {
        console.log(error);
        this.RolseData = [];
        this.RolseData.clear
      }
    },
    async editrole(role, rolemodel) {
      console.log(role, rolemodel);
      try {
        const response = await axios.post(urlUser + '/role', {
          role: role,
          rolemodel: rolemodel
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.userId = null;
      localStorage.clear();
      router.replace("/Login");
    },
  },
  persist: true
})
