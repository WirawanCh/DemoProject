import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import  jwt  from 'jsonwebtoken'

// const uriserver = process.env.IPAUTH
const router = createRouter({
  mode: history,
  history: createWebHistory(),
  
 routes : [
  {
    path: '/',
    name: 'OEE',
    meta: {
      auth: true,
      title: 'OEE'
      },
    component: () => import('../views/OEE.vue'),

    beforeEnter(to, from, next) {
      if(window.localStorage.token){
        axios.get(import.meta.env.VITE_APP_IPAUTH + "/user", {headers: {token: window.localStorage.token}})
        .then(res=>
        {
            let pagesdecode = jwt.decode(res.data.Auth)
            let rolesdecode = jwt.decode(res.data.SecretID)
            if(pagesdecode.pages.includes("OEE") || rolesdecode.user.role =="admin"){
                next();
            }
            else
            {
                alert("User unauthorized, Please contact administrator");
            }
        })
        .catch(err => {
          localStorage.clear(); 
          alert('Token Expired, Please login again'+'('+err+')')
          next('/Login') 
        })
      }
      else
      {
        alert("Please Login");
        next('/Login');
      }
    }  
  },
   
    {
      path: '/Login',
      name: 'Login',
      component: () => import ('../components/Login.vue'),
    },
    
    
    

    {
      path: '/Energy',
      name: 'Energy',
      meta: {
        auth: true,
        title: 'Energy'
        },
      component: () => import('../views/Energy.vue'),

      beforeEnter(to, from, next) {
        if(window.localStorage.token){
          axios.get(import.meta.env.VITE_APP_IPAUTH + "/user", {headers: {token: window.localStorage.token}})
          .then(res=>
          {
              let pagesdecode = jwt.decode(res.data.Auth)
              let rolesdecode = jwt.decode(res.data.SecretID)
              if(pagesdecode.pages.includes("DiscountAdmin") || rolesdecode.user.role =="admin"){
                  next();
              }
              else
              {
                  alert("User unauthorized, Please contact administrator");
              }
          })
          .catch(err => {
            localStorage.clear(); 
            alert('Token Expired, Please login again'+'('+err+')')
            next('/Login') 
          })
        }
        else
        {
          alert("Please Login");
          next('/Login');
        }
      }  
    },

    {
      path: '/Inverter',
      name: 'Inverter',
      meta: {
        auth: true,
        title: 'Inverter'
        },
      component: () => import('../views/Inverter.vue'),

      beforeEnter(to, from, next) {
        if(window.localStorage.token){
          axios.get(import.meta.env.VITE_APP_IPAUTH + "/user", {headers: {token: window.localStorage.token}})
          .then(res=>
          {
              let pagesdecode = jwt.decode(res.data.Auth)
              let rolesdecode = jwt.decode(res.data.SecretID)
              if(pagesdecode.pages.includes("ManageData") || rolesdecode.user.role =="admin"){
                  next();
              }
              else
              {
                  alert("User unauthorized, Please contact administrator");
              }
          })
          .catch(err => {
            localStorage.clear(); 
            alert('Token Expired, Please login again'+'('+err+')')
            next('/Login') 
          })
        }
        else
        {
          alert("Please Login");
          next('/Login');
        }
      }  
    },

    {
      path: '/Admin',
      name: 'Admin',
      meta: {
        auth: true,
        title: 'Admin'
        },
      component: () => import('../views/Admin.vue'),

      beforeEnter(to, from, next) {
        if(window.localStorage.token){
          axios.get(import.meta.env.VITE_APP_IPAUTH + "/user", {headers: {token: window.localStorage.token}})
          .then(res=>
          {
              let pagesdecode = jwt.decode(res.data.Auth)
              let rolesdecode = jwt.decode(res.data.SecretID)
              if(pagesdecode.pages.includes("Admin") || rolesdecode.user.role =="admin"){
                  next();
              }
              else
              {
                  alert("User unauthorized, Please contact administrator");
              }
          })
          .catch(err => {
            localStorage.clear(); 
            alert('Token Expired, Please login again'+'('+err+')')
            next('/Login') 
          })
        }
        else
        {
          alert("Please Login");
          next('/Login');
        }
      }  
    },
    
    {
      path: '/AccountSettings',
      name: 'AccountSettings',
    
      component: () => import('../views/Account-settings.vue'),

      beforeEnter(to, from, next) {
        if(window.localStorage.token){
          axios.get(import.meta.env.VITE_APP_IPAUTH + "/user", {headers: {token: window.localStorage.token}})
          .then(res=>
          {
              let pagesdecode = jwt.decode(res.data.Auth)
              let rolesdecode = jwt.decode(res.data.SecretID)
              if(pagesdecode.pages.includes("AccountSettings") || rolesdecode.user.role =="admin"){
                  next();
              }
              else
              {
                  alert("User unauthorized, Please contact administrator");
              }
          })
          .catch(err => {
            localStorage.clear(); 
            alert('Token Expired, Please login again'+'('+err+')')
            next('/Login') 
          })
        }
        else
        {
          alert("Please Login");
          next('/Login');
        }
      }  
    },

   
  

    
   
  ] 

})


router.beforeEach(async (to, from, next) => {
 
  document.title = to.meta.title || 'DemoV2SWebapp';
 if(to.name !== 'Login' && !window.localStorage.token){
   alert("Please Login");
   next('/Login')
       }  
       else
       {

         if (from.query.id && !to.query.id && to.name !== 'Login') {
           if (to.path === from.path) {
             
             return 
           }
           next({path: to.path, query: {id: from.query.id}})
         }
        
         next()
       }
 
});

export default router
