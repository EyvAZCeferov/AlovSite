<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/all.min.js"></script>
<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>{{ this.$trans("static.components.header.menu.contactus") }}</h1>
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
          <li>{{ this.$trans("static.components.header.menu.contactus") }}</li>
        </ul>
      </div>
      <!-- end container -->
    </header>
    <!-- end page-header -->
    <section class="content-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="contact-box">
              <figure>
                <img src="temp/images/icon-global.png" alt="Image" />
              </figure>
              <h6>{{ this.$trans("static.components.footer.looc.title") }}</h6>
              <p>
                Addressss
              </p>
            </div>
            <!-- end contact-box -->
          </div>
          <!-- end col-4 -->
          <div class="col-lg-4 col-md-6">
            <div class="contact-box">
              <figure>
                <img src="temp/images/icon-phone.png" alt="Image" />
              </figure>
              <h6>{{ this.$trans("static.pages.contactus.top.telephone") }}</h6>
              <p>{{settings.phoneNumb}}</p>
            </div>
            <!-- end contact-box -->
          </div>
          <!-- end col-4 -->
          <div class="col-lg-4 col-md-6">
            <div class="contact-box">
              <figure>
                <img src="temp/images/icon-email.png" alt="Image" />
              </figure>
              <h6>{{ this.$trans("static.pages.contactus.top.writeus") }}</h6>
              <p><a :href="'mailto:'+settings.email">{{settings.email}}</a><br /></p>
            </div>
            <!-- end contact-box -->
          </div>
          <!-- end col-4 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end content-section -->
    <section class="content-section no-spacing">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title text-left">
              <h6>{{ this.$trans("static.pages.contactus.top.social") }}</h6>
              <h2>
                <p>
                  <a :href="settings.facebook_page"><i class="fab fa-facebook-f"></i></a>
                  <a :href="settings.youtube_page"><i class="fab fa-youtube"></i></a>
                  <a :href="settings.twitter_page"><i class="fab fa-twitter"></i></a>
                  <a :href="settings.instagram_page"><i class="fab fa-instagram"></i></a>
                </p>
              </h2>
            </div>
            <!-- end section-title -->
          </div>
          <!-- end col-6 -->
          <div class="col-lg-6">
            <form class="contact-form">
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.name") }}</span>
                <input type="text" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.email") }}</span>
                <input type="text" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.subject") }}</span>
                <input type="text" />
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <span>{{ this.$trans("static.form.labels.message") }}</span>
                <textarea></textarea>
              </div>
              <!-- end form-group -->
              <div class="form-group">
                <input
                  type="submit"
                  v-bind:value="this.$trans('static.form.buttons.sendNow')"
                />
              </div>
              <!-- end form-group -->
            </form>
            <!-- end contact-form -->
          </div>
          <!-- end col-6 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end content-section -->
    <section class="content-section no-spacing">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.946732017157!2d6.139779638725402!3d46.19997236441594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c652ab04e9aaf%3A0xf17a439abec4708d!2sSkatepark%20of%20Plainpalais!5e0!3m2!1str!2str!4v1592672296075!5m2!1str!2str"
        frameborder="0"
        class="google-maps"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
  </span>
</template>

<script>
import axios from 'axios';
export default {
  name: "Contact",
  beforeCreate: function() {
    window.document.title = this.$trans("static.components.header.menu.contactus");
  },
  created() {
      this.settingsGet();
  },
  data() {
      return {
          settings:null,
      }
  },
  methods: {
      async settingsGet(){
          let response=await axios.get('alov/settings')
          this.settings=response.data
      }
  },
};
</script>
