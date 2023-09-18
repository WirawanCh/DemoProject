
<template>
  <v-container  class="pl-15 " fluid>
    <v-tabs
      v-model="tab" grow
    >
      <v-tab :value="Account"> <v-icon>mdi-account-outline</v-icon> Account</v-tab>
      <v-tab :value="Security"><v-icon>mdi-lock-open-outline</v-icon>Security</v-tab>
    </v-tabs>
    <v-divider class="my-2"> </v-divider>
      <v-window v-model="tab" >
        <v-window-item value="Account">
          <v-row >
            <v-col>  
            <!----------------------------------------------------------------------------->
              <v-card >
                <v-toolbar
                flat
                color="blue-grey"
                dark
                  >
                <v-toolbar-title>Account Profile {{ this.Userdata }}</v-toolbar-title>
                <v-spacer></v-spacer>  
              </v-toolbar>
                <!-- <div class="d-flex align-center flex-column">
                <v-avatar
                    class="ma-3"
                    size="125"
                    rounded="0"
                >
                    <v-img src="../assets/avatars/avatar-2.png"></v-img>
                </v-avatar>
                <v-btn
                  class="ms-2"
                  variant="outlined"
                  size="small"
                >
                        START RADIO
                </v-btn>
              </div> -->
                <v-divider class="my-3"></v-divider>
                <v-form ref="form" v-model="valid2" lazy-validation>
              <v-container>
                <v-row>
                  <v-col
                  cols="12" sm="6" md="6" lg="12"
                  >
                  <v-text-field
                      density="compact"
                      placeholder="Enter your Name"
                      prepend-inner-icon="mdi-account"
                      variant="outlined"
                      name="Name"
                      label="Name"
                      v-model="Name"
                      :rules="[v => !!v || 'Name is required']"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                  <v-text-field
                    density="compact"
                    placeholder="Enter your Surname"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    name="Surname"
                    label="Surname"
                    v-model="Surname"
                    :rules="[v => !!v || 'Surname is required']"
                    required
                  ></v-text-field>
                  </v-col>


                  <v-col
                  cols="6"
                  sm="6" >

                  <v-text-field
                    density="compact"
                    placeholder="Enter your Department"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    name="Department"
                    label="Department"
                    v-model="Department"
                    :rules="[v => !!v || 'Department is required']"
                    required
                  ></v-text-field>
                  
                  </v-col>
                      
                </v-row>
              </v-container>
            </v-form>
            <v-divider ></v-divider>
            <div class="my-3">
              <v-card-actions>
                <v-btn  color="success" class="me-5" :disabled="!valid2" variant="outlined"  elevation="2" size="large" @click="editItem">SAVE</v-btn>
                <v-btn color="blue-darken-1" class="me-5" variant="outlined" elevation="2" size="large" @click="closeEdit">Cancel</v-btn>
              </v-card-actions>
              </div>
              </v-card>
            </v-col>
          </v-row>
  <!----------------------------------------------------------------------------->
          <v-row >
            <v-col>
              <v-card>
                <v-toolbar
                flat
                color="blue-grey"
                dark
                  >
                <v-toolbar-title>Deactivate Account</v-toolbar-title>
                <v-spacer></v-spacer>  
              </v-toolbar>
                <v-checkbox
                    label="I confirm my account deactivation"
                    v-model="valid3"
                    color="error"
                    value="error"
                    name="error"
                    required
                    hide-details
                  ></v-checkbox>
              <v-card-actions>
                 <v-btn
                    variant="outlined"
                    color="error"
                    class="mt-3"
                    :disabled="!valid3" 
                    @click="deleteuser"
                  >
                    Deactivate Account
                  </v-btn>
               </v-card-actions>
         
              </v-card>
            </v-col>
          </v-row>
  <!----------------------------------------------------------------------------->
          </v-window-item>
          <v-window-item value="Security">
          <v-col>  
            <!----------------------------------------------------------------------------->
              <v-card title="Change Password">
              <v-form ref="form-change" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                  <v-text-field
                 id="new password"
                 variant="outlined"
                   :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                   :type="visible ? 'text' : 'password'"
                   :rules="[rules.required, rules.counter]"
                   label="New Password"
                   counter
                   maxlength="10"
                   density="compact"
                   placeholder="Enter your New Password"
                   prepend-inner-icon="mdi-lock-outline"  
                   name="NewPassword"
                   v-model="Password"
                   @click:append-inner="visible = !visible"
                 ></v-text-field>

                 <v-text-field 
                 id="Confirm new password"
                 variant="outlined"
                   :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                   :type="visible ? 'text' : 'password'"
                   :rules="[rules.required, rules.counter, passwordMatch]"
                   label="Confirm New Password"
                   counter
                   maxlength="10"
                   density="compact"
                   placeholder="Enter your Confirm password"
                   prepend-inner-icon="mdi-lock-outline"  
                   name="Confirm New Password"
                   block v-model="verify" 
                   @click:append-inner="visible = !visible"
                 ></v-text-field>
                
                  </v-col>
                  <v-col>
         
            <p class="text-base font-weight-medium mt-2">
              Password Requirements:
            </p>
            <ul class="d-flex flex-column gap-y-3">
              <li
                v-for="item in passwordRequirements"
                :key="item"
                class="d-flex"
              >
                <div>
                  <v-icon
                    size="7"
                    icon="mdi-circle"
                    class="me-3"
                  />
                </div>
                <span class="font-weight-medium">{{ item }}</span>
              </li>
            </ul>
    
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <v-divider ></v-divider>
            <div class="my-3">
              <v-card-actions>
                <v-btn  color="success" :disabled="!valid" class="me-5" variant="outlined"  elevation="2" size="large" @click="editpassword">SAVE</v-btn>
                <v-btn color="blue-darken-1" class="me-5" variant="outlined" elevation="2" size="large" @click="closeEdit">Cancel</v-btn>
              </v-card-actions>
              </div>
              </v-card>
          </v-col>
        </v-window-item>
      </v-window>

</v-container>
</template>
<script>

 //import AccountSettingsAccount from '../views/pages/AccountSettingsAccount.vue'
 import { useAuthStore } from '../store';
 import { useAdminStore } from '../store';


  export default {
    data: () => ({
      tab: null,
      visible: false,
      Userdata:'',
      Name:"", 
      Surname:"",
      Department:"",
      id: "",
      Role: "",
      department: ["Sell", "Design"],
      assignuserdepartment:"",
      Username: "",
      Password: "",
      NewPassword:"",
      CurrentPassword:"",
      verify: "",
      valid: true,
      valid2: true,
      valid3: true,
    
      roles: ["admin", "monitor", "operator"],
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length >= 5 || 'Minimum 5 characters',
      },
      passwordRequirements : [
        'Minimum 5 characters long - the more, the better',
        'At least one lowercase character',
        'At least one number, symbol, or whitespace character',
      ]
    }),
    computed: {
    passwordMatch() {
      return () => this.Password === this.verify || "Password must match";
    }
    },
    mounted(){
      this.readuser();
    },
    methods:{
    
      async readuser(){
        const AuthStore = useAuthStore();
        this.Name= AuthStore.$state.userdata.name, 
        this.Surname=AuthStore.$state.userdata.surname,
        this.id= AuthStore.$state.userdata.id,
        console.log(this.assignusergender),
        this.Department=AuthStore.$state.userdata.department
      },
      editItem () {
         const AuthStore = useAuthStore();
         console.log(this._id,this.Name,this.Surname ,this.Department);
         AuthStore.profileedit(this.id,this.Name,this.Surname ,this.Department);
        this.closeEdit()
      },
      closeEdit () {
        this.dialogEdit = false
      },
      editpassword(){
        const useAdmin = useAdminStore();
        useAdmin.updatepassword(this.id,this.Password);
      },
      deleteuser(){
        const useAdmin = useAdminStore();
        useAdmin.deleteuser(this.id);
      }
    }
  }
</script>
<style> 

</style>

