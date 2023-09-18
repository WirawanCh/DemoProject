<template >
  <v-row >
    <v-col cols="12" xs="12" md="12" lg="12">
      <v-container
        style="
          height: 100vh;
          background-image: linear-gradient(
            to right top,
            #374e6f,
            #007c9b,
            #00abab,
            #68d69f,
            #d7f98b
          );
        "
        fluid
      >
        <v-form ref="LoginForm" v-model="valid" class="mx-auto" lazy-validation>
          <v-card
            class="mx-auto justify-center mt-lg-5 pb-lg-5"
            max-width="900"
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
                lg="6"
                class="text-md-center pl-15 pr-15"
              >
                <!-- <v-img
            class="mx-auto mb-10 mt-15"
            max-width="100"
            src="../assets/Logo.png"
          ></v-img> -->
                <h2 class="text-center text-indigo mt-15">V2S DEMO ENGINEERING</h2>
                <h2 class="text-center text-blue mt-15">Log in</h2>
                <div
                  class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                >
                  Username
                </div>
                <v-text-field
                  density="compact"
                  placeholder="Enter your Username"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  name="Username"
                  label="Username"
                  v-model="username"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
                <div
                  class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                >
                  Password
                </div>
                <v-text-field
                  id="password"
                  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="visible ? 'text' : 'password'"
                  :rules="[rules.required, rules.counter]"
                  label="Password"
                  counter
                  maxlength="10"
                  density="compact"
                  placeholder="Enter your password"
                  prepend-inner-icon="mdi-lock-outline"
                  name="Password"
                  v-model="password"
                  @click:append-inner="visible = !visible"
                ></v-text-field>
                <v-btn
                  class="mb-8"
                  color="blue"
                  size="large"
                  block
                  :disabled="!valid"
                  @click="login"
                >
                  Submit
                </v-btn>
              </v-col>

              <!----------------------------------------->

              <v-col cols="12" sm="6" md="6" lg="6">
                <v-img
                  width="880"
                  height="500"
                  src="../assets//img//bg.png"
                ></v-img>
              </v-col>

              <!------------------------------------------------------------------------------->
            </v-row>
          </v-card>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { useAuthStore } from "../store";

// const uriserver = process.env.VUE_APP_IPAUTH

const AuthStore = useAuthStore();

export default {
  data() {
    return {
      myStyle: {
        backgroundColor: "indigo",
      },

      visible: false,
      username: "",
      password: "",
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length >= 4 || "Minnimum 4 characters",
      },
    };
  },

  methods: {
    login() {
      console.log(this.username, this.password);
      if (this.$refs.LoginForm.validate()) {
        AuthStore.login(this.username, this.password);
      }
    },
  },
};
</script>

<style></style>
