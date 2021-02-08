<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>{{ this.$trans("static.components.header.menu.projects") }}</h1>
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
          <li>{{ this.$trans("static.components.header.menu.projects") }}</li>
        </ul>
      </div>
      <!-- end container -->
    </header>
    <section class="content-section ">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="isotope-filter">
              <li data-filter="*" class="current">ALL</li>
              <li data-filter=".one">BUILDING</li>
              <li data-filter=".two">COMMERCIAL</li>
              <li data-filter=".three">VILLAS</li>
            </ul>
          </div>
          <!-- end col-12 -->
          <div class="col-12">
            <ul class="projects">
              <li class="one">
                <figure class="project-box">
                  <a href="#">
                    <router-link to="/project/slugis">
                      <img src="temp/images/slide01.jpg" alt="Image" />
                    </router-link>
                  </a>
                  <figcaption>
                    <h5>Quark Life Homes</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
              <li class="two">
                <figure class="project-box">
                  <a href="project-single.html"
                    ><img src="temp/images/slide02.jpg" alt="Image"
                  /></a>
                  <figcaption>
                    <h5>River Life Residence</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
              <li class="three">
                <figure class="project-box">
                  <a href="project-single.html"
                    ><img src="temp/images/slide03.jpg" alt="Image"
                  /></a>
                  <figcaption>
                    <h5>Orgue Shopping Mall</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
              <li class="one">
                <figure class="project-box">
                  <a href="project-single.html"
                    ><img src="temp/images/slide04.jpg" alt="Image"
                  /></a>
                  <figcaption>
                    <h5>Green Socks Villas</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
              <li class="two">
                <figure class="project-box">
                  <a href="project-single.html"
                    ><img src="temp/images/slide05.jpg" alt="Image"
                  /></a>
                  <figcaption>
                    <h5>Prensten Hudson's</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
              <li class="three">
                <figure class="project-box">
                  <a href="project-single.html"
                    ><img src="temp/images/slide06.jpg" alt="Image"
                  /></a>
                  <figcaption>
                    <h5>York Education Center</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
              <li class="one">
                <figure class="project-box">
                  <a href="project-single.html"
                    ><img src="temp/images/slide07.jpg" alt="Image"
                  /></a>
                  <figcaption>
                    <h5>Miamy Beach House</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
              <li class="two">
                <figure class="project-box">
                  <a href="project-single.html"
                    ><img src="temp/images/slide08.jpg" alt="Image"
                  /></a>
                  <figcaption>
                    <h5>All Life Resorts</h5>
                  </figcaption>
                </figure>
                <!-- end project-box -->
              </li>
              <!-- end li -->
            </ul>
          </div>
          <!-- end col-12 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </span>
</template>

<script>
export default {
  name: "Projects",
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.projects"
    );
  },
  created() {
    var scripts = [
      "temp/js/swiper.min.js",
      "temp/js/fancybox.min.js",
      "temp/js/odometer.min.js",
      "temp/js/isotope.min.js",
      "temp/js/scripts.js",
    ];
    var links=[
        "temp/css/lineicons.css",
        "temp/css/odometer.min.css",
        "temp/css/fancybox.min.css",
        "temp/css/swiper.min.css",
    ];
    scripts.forEach(script => {
      let tagscr = document.createElement("script");
      tagscr.setAttribute("src", script);
      document.head.appendChild(tagscr);
    });
    links.forEach(link => {
      let taglink = document.createElement("link");
      taglink.setAttribute("href", link);
      taglink.setAttribute("rel","stylesheet");
      document.head.appendChild(taglink);
    });
  }
};
</script>
