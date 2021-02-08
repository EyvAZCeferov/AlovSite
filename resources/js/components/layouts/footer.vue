<template>
  <div>
    <section class="footer-bar">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <figure class="logo">
              <img src="temp/images/logo.png" alt="Image" />
            </figure>
            <h2 v-html="this.$trans('static.components.footer.slogan')"></h2>
            <a href="#" class="button"
              >{{ this.$trans("static.form.buttons.contactus") }}
              <i class="lni lni-arrow-right"></i
            ></a>
            <div class="sales-representive">
              <figure>
                <img src="temp/images/author01.jpg" alt="Image" />
              </figure>
              Sales representative <b>+1 (850) 344 0 66 #20</b> free call !
            </div>
            <!-- end sales-representive -->
          </div>
          <!-- end col-12  -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end footer-bar -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <h6 class="widget-title">
              {{ this.$trans("static.components.footer.looc.title") }}
            </h6>
            <address>
              <p>
                121 South 8th Street, Suite 1200<br />
                Minneapolis MN 55402
              </p>
              <p>+1 (850) 344 0 66 #20</p>
              <a
                href="https://www.google.com/maps/search/?api=1&amp;query=centurylink+field"
                data-fancybox
                data-width="640"
                data-height="360"
                >{{
                  this.$trans("static.components.footer.looc.findusonmap")
                }}</a
              >
            </address>
          </div>
          <!-- end col-4 -->
          <div class="col-lg-4 col-md-6">
            <h6 class="widget-title">
              {{ this.$trans("static.components.footer.looc.title") }}
            </h6>
            <address>
              <p>
                121 South 8th Street, Suite 1200<br />
                Minneapolis MN 55402
              </p>
              <p>+1 (850) 344 0 66 #20</p>
              <a
                href="https://www.google.com/maps/search/?api=1&amp;query=centurylink+field"
                data-fancybox
                data-width="640"
                data-height="360"
                >{{
                  this.$trans("static.components.footer.looc.findusonmap")
                }}</a
              >
            </address>
          </div>
          <!-- end col-4 -->
          <div class="col-lg-4">
            <h6 class="widget-title">
              {{ this.$trans("static.components.footer.subscription.title") }}
            </h6>
            <p>
              {{ this.$trans("static.components.footer.subscription.desc") }}
            </p>
            <form>
              <input
                type="email"
                v-bind:placeholder="this.$trans('static.form.labels.typeemail')"
              />
              <input
                type="submit"
                v-bind:value="this.$trans('static.form.buttons.joinnow')"
              />
            </form>
          </div>
          <!-- end col-4 -->
          <div class="col-12">
            <div class="footer-bottom">
              <span
                >© 2020
                <span style="opacity:1 !important" v-if="year">
                  - {{ year }}</span
                >
                Alov coop.
              </span>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
            <!-- end footer-bottom -->
          </div>
          <!-- end col-12  -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
      <a href="#" class="scroll-top"
        ><i class="lni lni-arrow-up"></i>
        <small>{{ this.$trans("static.components.footer.scrollup") }}</small>
      </a>
      <!-- end scroll-top -->
    </footer>
    <!-- end footer -->
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      year: null
    };
  },
  created: function() {
    var date = new Date();
    this.year = date.getFullYear();
  }
};
</script>
