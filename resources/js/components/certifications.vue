<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>
          {{ this.$trans("static.components.header.menu.certifications") }}
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
            {{ this.$trans("static.components.header.menu.certifications") }}
          </li>
        </ul>
      </div>
      <!-- end container -->
    </header>
    <section class="content-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h6>BUSINESS DEVELOPMENT</h6>
              <h2>Our Prides Certificates</h2>
            </div>
            <!-- end section-title -->
          </div>
          <!-- end col-12 -->
          <div class="col-lg-3 col-md-6">
            <figure class="certificate">
              <a href="temp/images/certificate01.png" data-fancybox
                ><img src="temp/images/certificate01.png" alt="Image"
              /></a>
              <figcaption>
                That’s why our approach to project delivery focuses on those
                goals
              </figcaption>
            </figure>
            <!-- end certificate -->
          </div>
          <!-- end col-3 -->
          <div class="col-lg-3 col-md-6">
            <figure class="certificate">
              <a href="temp/images/certificate02.png" data-fancybox
                ><img src="temp/images/certificate02.png" alt="Image"
              /></a>
              <figcaption>
                That’s why our approach to project delivery focuses on those
                goals
              </figcaption>
            </figure>
            <!-- end certificate -->
          </div>
          <!-- end col-3 -->
          <div class="col-lg-3 col-md-6">
            <figure class="certificate">
              <a href="temp/images/certificate03.png" data-fancybox
                ><img src="temp/images/certificate03.png" alt="Image"
              /></a>
              <figcaption>
                That’s why our approach to project delivery focuses on those
                goals
              </figcaption>
            </figure>
            <!-- end certificate -->
          </div>
          <!-- end col-3 -->
          <div class="col-lg-3 col-md-6">
            <figure class="certificate">
              <a href="temp/images/certificate04.png" data-fancybox
                ><img src="temp/images/certificate04.png" alt="Image"
              /></a>
              <figcaption>
                That’s why our approach to project delivery focuses on those
                goals
              </figcaption>
            </figure>
            <!-- end certificate -->
          </div>
          <!-- end col-3 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </span>
</template>
<script>
export default {
  name: "Certifications",
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.certifications"
    );
  }
};
</script>
