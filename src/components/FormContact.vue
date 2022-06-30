<template>
<div class="container">

    <div class="mainFrame">

      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-container>
          <b-navbar-brand href="#">Mealzers</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!--                        <b-nav-form>-->
              <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search for a meal"
                  v-model="meal"
              ></b-form-input>
              <b-button
                  size="sm"
                  class="my-2 my-sm-0 mx-2"
                  type="submit"
                  @click.prevent="getMeal"
              >Search</b-button>
              <!--                        </b-nav-form>-->
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>User</em></template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>

    </div>
</div>
</template>

<script>
    import Vue from 'vue'
    import { BootstrapVue,} from 'bootstrap-vue'
    //import axios from 'axios'

    Vue.use(BootstrapVue)

    export default{
        name: "FormContact",
        props: {
            formid: {
                type: Number,
                default: 4
            },
            siteid: {
                type: Number,
                default: 0
            },
            sourceid: {
                type: Number,
                default: 6
            },
            referrer: {
                type: String,
                default: 'cpt;Test'
            },
            validated: {
                type: Boolean,
                default: true
            }
        },
        components: {
        },
        data() {
            return {
                modalMessage: '',
                disableSubmit: false,
                snDisabled: true,
                snChecked: true,
                mainData: '',
                phoneInput: '',
                token: undefined,
                customheaders: {
                    Authorization: ''
                },
                phoneNumber: '',
                showMessage: false,
                phoneInputisValid: false,
                email: '',
                firstName: '',
                lastName: '',
                profession_value: '',
                other_profession_value: '',
                otherprofession: 'hidden',
                other_profession_label: '',
                other_profession_help: '',
                other_profession_validation: '',
                 city_value: '',
                other_city_value: '',
                othercity: 'hidden',
                other_city_label: '',
                other_city_help: '',
                other_city_validation: '',
            }
        },
        mounted() {
            //let self = this;
        },

    }
</script>

<style>
    /*@import '../../node_modules/bootstrap/dist/css/bootstrap.css';*/
    /*@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';*/


</style>