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
            <form class="contact-form">
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.phoneNumb") }}</span>
                <input type="text" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.password") }}</span>
                <input type="password" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <input
                  type="submit"
                  v-bind:value="this.$trans('static.pages.loginregister.titles.login')"
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
            <form class="contact-form">
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.phoneNumb") }}</span>
                <input type="text" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.password") }}</span>
                <input type="password" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <input
                  type="submit"
                  v-bind:value="this.$trans('static.pages.loginregister.titles.register')"
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
export default {
  name: "LoginOrRegister",
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.loginorregister"
    );
  }
};
</script>

<style scoped>
.contact-form {
  margin-bottom: 15% !important;
}
</style>
