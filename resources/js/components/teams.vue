<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>
          {{ this.$trans("static.components.header.menu.teams") }}
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
            {{ this.$trans("static.components.header.menu.teams") }}
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
              <h6>BACKBONE OF CONSTO</h6>
              <h2>LEADERSHIP TEAM</h2>
            </div>
            <!-- end section-title -->
          </div>
          <!-- end col-12 -->
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="sales-team">
              <figure><img src="temp/images/team01.jpg" alt="Image" /></figure>
              <div class="infos">
                <h6>Jane O'neil</h6>
                <small>Chief Financial Offer</small> <b>+ 850 955 26 84</b>
                <ul>
                  <li>
                    <a href="#"><i class="lni lni-facebook-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-twitter-original"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-instagram-original"></i></a>
                  </li>
                </ul>
              </div>
              <!-- end infos -->
            </div>
            <!-- end sales-team -->
          </div>
          <!-- end col -->
          <div class="col-lg-3 col-md-6">
            <div class="sales-team">
              <figure><img src="temp/images/team02.jpg" alt="Image" /></figure>
              <div class="infos">
                <h6>Bob Voss</h6>
                <small>Chief Financial Offer</small> <b>+ 850 955 26 84</b>
                <ul>
                  <li>
                    <a href="#"><i class="lni lni-facebook-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-twitter-original"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-instagram-original"></i></a>
                  </li>
                </ul>
              </div>
              <!-- end infos -->
            </div>
            <!-- end sales-team -->
          </div>
          <!-- end col -->
          <div class="col-lg-3 col-md-6">
            <div class="sales-team">
              <figure><img src="temp/images/team03.jpg" alt="Image" /></figure>
              <div class="infos">
                <h6>Christina Eden</h6>
                <small>Chief Financial Offer</small> <b>+ 850 955 26 84</b>
                <ul>
                  <li>
                    <a href="#"><i class="lni lni-facebook-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-twitter-original"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-instagram-original"></i></a>
                  </li>
                </ul>
              </div>
              <!-- end infos -->
            </div>
            <!-- end sales-team -->
          </div>
          <!-- end col -->
          <div class="col-lg-3 col-md-6">
            <div class="sales-team">
              <figure><img src="temp/images/team04.jpg" alt="Image" /></figure>
              <div class="infos">
                <h6>Eric Mendes</h6>
                <small>Chief Financial Offer</small> <b>+ 850 955 26 84</b>
                <ul>
                  <li>
                    <a href="#"><i class="lni lni-facebook-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-twitter-original"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni lni-instagram-original"></i></a>
                  </li>
                </ul>
              </div>
              <!-- end infos -->
            </div>
            <!-- end sales-team -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </span>
</template>
<script>
export default {
  name: "Teams",
  beforeCreate: function() {
    window.document.title = this.$trans("static.components.header.menu.teams");
  }
};
</script>
