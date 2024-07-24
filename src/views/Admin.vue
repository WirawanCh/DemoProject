<template>
  <v-container  class="mt-5 pl-15" fluid>
    <v-tabs v-model="tab" grow>
      <v-tab :value="Account">
        <v-icon>mdi-account-outline</v-icon>Account User</v-tab
      >
      <v-tab :value="Role"
        ><v-icon>mdi-lock-open-outline</v-icon>Assign Role & Page</v-tab
      >
    </v-tabs>
    <v-divider class="my-2"> </v-divider>
    <v-window v-model="tab">
      <v-window-item value="Account">
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-card>
              <v-toolbar flat color="blue-grey" dark>
                <v-toolbar-title>Account User</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="search"
                        density="compact"
                        variant="solo"
                        append-inner-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details="auto"
                        clearable
                        dense
                        type="text"
                      >
                        <template v-slot:append>
                          <!--------------------------------------------------------------------------------->
                          <v-dialog v-model="dialog" max-width="1000px">
                            <template v-slot:activator="{ props }">
                              <v-btn color="primary" dark v-bind="props">
                                New
                              </v-btn>
                            </template>
                            <!--------------------------------------------------------------------------------->
                            <v-form
                              ref="registerForm"
                              v-model="valid"
                              lazy-validation
                            >
                              <v-card
                                class="mx-auto pa-12 pb-8"
                                elevation="8"
                                rounded="lg"
                              >
                                <v-toolbar color="blue" rounded="lg" dark>
                                  <v-toolbar-title
                                    >Registration</v-toolbar-title
                                  >
                                  <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-divider class="my-3"></v-divider>
                                <v-row>
                                  <v-col cols="6" sm="6">
                                    <v-text-field
                                      density="compact"
                                      placeholder="Enter your Name"
                                      prepend-inner-icon="mdi-account"
                                      variant="outlined"
                                      name="Name"
                                      label="Name"
                                      v-model="Name"
                                      :rules="[rules.required]"
                                      required
                                    ></v-text-field>

                                    <v-text-field
                                      density="compact"
                                      placeholder="Enter your Surname"
                                      prepend-inner-icon="mdi-account"
                                      variant="outlined"
                                      name="Surname"
                                      label="Surname"
                                      v-model="Surname"
                                      :rules="[rules.required]"
                                      required
                                    ></v-text-field>

                                    <v-select
                                      variant="outlined"
                                      prepend-inner-icon="mdi-lock-outline"
                                      :items="roles"
                                      name="Roles"
                                      label="Roles"
                                      density="compact"
                                      :rules="[rules.required]"
                                      v-model="assignuserrole"
                                      required
                                    ></v-select>

                                    <v-text-field
                                      density="compact"
                                      variant="outlined"
                                      placeholder="Enter your Department"
                                      prepend-inner-icon="mdi-account"
                                      :rules="[
                                        (v) => !!v || 'Department is required',
                                      ]"
                                      label="Department"
                                      name="Department"
                                      v-model="Department"
                                      required
                                    ></v-text-field>

                                  </v-col>
                                  <v-col cols="6" sm="6">
                            

                                    <v-text-field
                                      density="compact"
                                      placeholder="Enter your Username"
                                      prepend-inner-icon="mdi-account"
                                      variant="outlined"
                                      name="Username"
                                      label="Username"
                                      v-model="Username"
                                      :rules="[rules.required]"
                                      required
                                    ></v-text-field>
                                    <v-text-field
                                      id="password"
                                      variant="outlined"
                                      :append-inner-icon="
                                        visible ? 'mdi-eye-off' : 'mdi-eye'
                                      "
                                      :type="visible ? 'text' : 'password'"
                                      :rules="[rules.required, rules.counter]"
                                      label="Password"
                                      counter
                                      maxlength="10"
                                      density="compact"
                                      placeholder="Enter your password"
                                      prepend-inner-icon="mdi-lock-outline"
                                      name="Password"
                                      v-model="Password"
                                      @click:append-inner="visible = !visible"
                                    ></v-text-field>

                                    <v-text-field
                                      id="Confirm password"
                                      variant="outlined"
                                      :append-inner-icon="
                                        visible ? 'mdi-eye-off' : 'mdi-eye'
                                      "
                                      :type="visible ? 'text' : 'password'"
                                      :rules="[
                                        rules.required,
                                        rules.counter,
                                        passwordMatch,
                                      ]"
                                      label="Confirm Password"
                                      counter
                                      maxlength="10"
                                      density="compact"
                                      placeholder="Enter your Confirm password"
                                      prepend-inner-icon="mdi-lock-outline"
                                      name="Confirm Password"
                                      block
                                      v-model="verify"
                                      @click:append-inner="visible = !visible"
                                    ></v-text-field>
                                  </v-col>
                                  <v-btn
                                    block
                                    :disabled="!valid"
                                    variant="outlined"
                                    elevation="2"
                                    size="large"
                                    color="success"
                                    @click="Register"
                                    >Register</v-btn
                                  >
                                </v-row>
                              </v-card>
                            </v-form>
                          </v-dialog>
                          <!--------------------------------------------------------------------------------->
                          <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                              <v-card-title class="text-h5 text-center"
                                >Are you sure you want to delete?</v-card-title
                              >
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="blue-darken-1"
                                  variant="text"
                                  @click="closeDelete"
                                  >Cancel</v-btn
                                >
                                <v-btn
                                  color="blue-darken-1"
                                  variant="text"
                                  @click="deleteItemConfirm"
                                  >OK</v-btn
                                >
                                <v-spacer></v-spacer>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                          <!--------------------------------------------------------------------------------->
                          <v-dialog v-model="dialogEdit" max-width="500px">
                            <div class="py-4">
                              <v-form
                                ref="registerForm"
                                v-model="valid"
                                lazy-validation
                              >
                                <v-card>
                                  <v-toolbar flat color="blue-grey" dark>
                                    <v-toolbar-title class="text-h5"
                                      >Edit User</v-toolbar-title
                                    >
                                  </v-toolbar>
                                  <v-divider class="my-2"></v-divider>
                                  <v-col>
                                    <v-text-field
                                      density="compact"
                                      placeholder="Enter your Name"
                                      prepend-inner-icon="mdi-account"
                                      variant="outlined"
                                      name="Name"
                                      label="Name"
                                      v-model="editedItem.name"
                                      :rules="[rules.required]"
                                      required
                                    ></v-text-field>
                                    <v-text-field
                                      density="compact"
                                      placeholder="Enter your Surname"
                                      prepend-inner-icon="mdi-account"
                                      variant="outlined"
                                      name="Surname"
                                      label="Surname"
                                      v-model="editedItem.surname"
                                      :rules="[rules.required]"
                                      required
                                    ></v-text-field>
                                    <v-text-field
                                      density="compact"
                                      variant="outlined"
                                      placeholder="Enter your Department"
                                      prepend-inner-icon="mdi-account"
                                      :rules="[
                                        (v) => !!v || 'Department is required',
                                      ]"
                                      label="Department"
                                      name="Department"
                                      v-model="editedItem.department"
                                      required
                                    ></v-text-field>
                                
                               
                                    <v-select
                                      variant="outlined"
                                      prepend-inner-icon="mdi-lock-outline"
                                      :items="roles"
                                      name="Roles"
                                      label="Roles"
                                      density="compact"
                                      :rules="[rules.required]"
                                      v-model="editedItem.role"
                                      required
                                    ></v-select>
                                  </v-col>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="blue-darken-1"
                                      variant="text"
                                      @click="closeEdit"
                                      >Cancel</v-btn
                                    >
                                    <v-btn
                                      color="primary"
                                      :disabled="!valid"
                                      variant="text"
                                      @click="editItemConfirm"
                                    >
                                      Submit
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-form>
                            </div>
                          </v-dialog>
                          <!--------------------------------------------------------------------------------->
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <div>
                <v-data-table
                  :custom-filter="filterOnlyCapsText"
                  :headers="headers"
                  :items="getUser"
                  :search="search"
                  class="elevation-1 mytable"
                  item-value="name"
                  hide-actions
                >
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-icon
                      size="small"
                      class="me-2"
                      @click="editItem(item.raw)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon size="small" @click="deleteItem(item.raw)">
                      mdi-delete
                    </v-icon>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize"> Reset </v-btn>
                  </template>
                </v-data-table>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!----------------------------------------------------------------------------->
      </v-window-item>
      <v-window-item value="Role">
        <v-row>
          <v-col>
            <v-card>
              <v-toolbar flat color="blue-grey" dark>
                <v-toolbar-title>Assign Role & Page</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>

              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      variant="outlined"
                      v-model="selectrole"
                      density="compact"
                      label="Roles"
                      :items="roles"
                      @update:model-value="roleinitialize"
                      :loading="loading"
                      hide-details="auto"
                      clearable
                      dense
                    >
                      <template v-slot:append>
                        <v-dialog v-model="dialogRoles" max-width="500px">
                          <template v-slot:activator="{ props }">
                            <v-btn color="primary" dark v-bind="props">
                              Save
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="text-h5 text-center"
                              >Are you sure you want to update?</v-card-title
                            >
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="blue-darken-1"
                                variant="text"
                                @click="closeRoles"
                                >Cancel</v-btn
                              >
                              <v-btn
                                color="blue-darken-1"
                                variant="text"
                                @click="EditRolesConfirm"
                                >OK</v-btn
                              >
                              <v-spacer></v-spacer>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </template>
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
              <div>
                <v-data-table
                  v-model="Rolescheck"
                  :headers="headersRoles"
                  :items="RolesItem"
                  items-per-page="9"
                  item-value="pages"
                  show-select
                  class="elevation-1"
                >
                </v-data-table>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script>
import { useAdminStore, useAuthStore } from "../store";
const AuthStore = useAuthStore();
const adminStore = useAdminStore();

export default {
  data: () => ({
    /////////////////////////////////////////////////////////////////////////////////
    visible: false,
    tab: "",

    Name: "",
    Username: "",
    Password: "",
    Surname: "",
    Department: "",
    
    verify: "",
    valid: true,
    roles: ["admin", "user"],
    editroles: "",
    emailRules: [
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    rules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length >= 4 || "Minimum 4 characters",
    },
    /////////////////////////////////////////////////////////////////////////////////
    search: "",
    loading: false,
    dialog: false,
    dialogDelete: false,
    dialogEdit: false,
    dialogRoles: false,
    DataApi: "",
    headers: [
      { title: "name", align: "start", sortable: true, key: "name" },
      { title: "surname", key: "surname" },
      { title: "role", key: "role" },
      { title: "Department", key: "department" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      _id: "",
      name: "",
      surname: "",
      role: "",
      department: "",
    },
    defaultItem: {
      _id: "",
      name: "",
      surname: "",
      role: "",
      department: "",
    },
    /////////////////////////////////////////////////////////////////////////////////
    selectrole: "",
    assignuserrole: "",
    headersRoles: [
      { title: "pages", align: "start", sortable: false, key: "pages" },
    ],
    RolesItem: [
      { pages: "OEE" },
      { pages: "Admin" },
      { pages: "Spoilage" },
      { pages: "Carbon" },
      { pages: "Factorykpi"}
   
    ],
    Rolescheck: [],
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New" : "Edit Item";
    },
    passwordMatch() {
      return () => this.Password === this.verify || "Password must match";
    },
    getUser() {
      return (this.desserts = adminStore.$state.AdminData);
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogEdit(val) {
      val || this.closeEdit();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  /*   created () {
     this.initialize()
   },*/
  mounted() {
    this.initialize();
  },
  methods: {

    EditRolesConfirm() {
      AuthStore.editrole(this.selectrole, this.Rolescheck);
      this.closeRoles();
    },
    closeRoles() {
      this.dialogRoles = false;
    },
    async roleinitialize() {
      await AuthStore.rolelist(this.selectrole);
      this.Rolescheck = AuthStore.$state.RolseData.pages;
    },
    initialize() {
      adminStore.load();
      this.desserts = adminStore.$state.AdminData;
    },
    /////////////////////////////////////////////////////
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogEdit = true;
    },
    editItemConfirm() {
      adminStore.updateuser(
        this.editedItem.name,
        this.editedItem.surname,
        this.editedItem.role,
        this.editedItem._id,
        this.editedItem.department
      );
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.closeEdit();
    },
    closeEdit() {
      this.dialogEdit = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    ///////////////////////////////////////////////////////
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      adminStore.delete(this.editedItem._id);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    //////////////////////////////////////////////////////////
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    /////////////////////////////////////////////////////////////////////
    Register() {
      console.log(
        this.Username,
        this.Password,
        this.Name,
        this.Surname,
        this.assignuserrole,
        this.Department
      );
      if (this.$refs.registerForm.validate()) {
        AuthStore.register(
          this.Name,
          this.Surname,
          this.Username,
          this.Password,
          this.assignuserrole,
          this.Department
        );
        this.editedItem = {
          name: this.Name,
          surname: this.Surname,
          role: this.assignuserrole,
          department: this.Department,
        };
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        } else {
          this.desserts.push(this.editedItem);
        }
      }
      this.close();
    },
  },
};
</script>

<style>

</style>
