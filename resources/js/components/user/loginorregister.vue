<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>
          {{ this.$trans("static.components.header.menu.loginorregister") }}
        </h1>
        <h6>
          Small Programs Perfect For Beginners To Get Started With Personal
          Growth
        </h6>
        <ul>
          <li>
            <router-link :to="{ name: 'index' }">
              <a href="#">{{
                this.$trans("static.components.header.menu.home")
              }}</a>
            </router-link>
          </li>
          <li>
            {{ this.$trans("static.components.header.menu.loginorregister") }}
          </li>
        </ul>
      </div>
      <!-- end container -->
    </header>
    <section class="content-section no-bottom-spacing">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title text-left">
              <h6>
                {{ this.$trans("static.pages.loginregister.titles.login") }}
              </h6>
            </div>

            <!-- end section-title -->
            <form class="contact-form" @submit.prevent="login">
              <div class="form-group">
                <span>{{
                  this.$trans("static.form.labels.phoneNumboremail")
                }}</span>
                <input type="text" v-model="form.phoneNumber" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.password") }}</span>
                <input type="password" v-model="form.password" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <input
                  type="submit"
                  v-bind:value="
                    this.$trans('static.pages.loginregister.titles.login')
                  "
                />
              </div>
              <!-- end form-group -->
            </form>
          </div>
          <!-- end col-6 -->
          <div class="col-lg-6">
            <div class="section-title text-left">
              <h6>
                {{ this.$trans("static.pages.loginregister.titles.register") }}
              </h6>
            </div>
            <form class="contact-form" @submit.prevent="register">
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.phoneNumb") }}</span>
                <input type="text" v-model="form.phoneNumber" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.password") }}</span>
                <input type="password" v-model="form.password" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <input
                  type="submit"
                  v-bind:value="
                    this.$trans('static.pages.loginregister.titles.register')
                  "
                />
              </div>
              <!-- end form-group -->
            </form>
            <!-- end contact-form -->
          </div>
          <!-- end col-6 -->
        </div>
      </div>
    </section>
  </span>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "LoginOrRegister",
  data: function() {
    return {
      form: {
        phoneNumber: null,
        password: null
      }
    };
  },
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.loginorregister"
    );
  },
  methods: {
      ...mapActions({
          signin:"auth/signin",
      }),
    login() {
      this.signin(this.form).then(()=>{
          this.$toast.success(this.trans("actions.logined"));
          this.$router.replace({
              name:"profile"
          });
      }).catch((e)=>{
          this.$toast.error(e);
      });
    },
    register() {
      console.log();
    }
  }
};
</script>

<style scoped>
.contact-form {
  margin-bottom: 15% !important;
}
</style>
