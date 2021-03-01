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
            <ul class="isotope-filter" >
                <li data-filter="*">All</li>
                <template v-if="categories" v-for="cat in categories">
                  <li :data-filter="'.class-'+cat.id" >{{cat.az_name}}</li>
                </template>
            </ul>
          </div>
          <!-- end col-12 -->
          <div class="col-12">
            <ul class="projects" v-for="project in projects" :key="project.slug">

              <li :class="'class-'+project.cat_id">
                <figure class="project-box">
                  <a href="#">
                    <router-link :to="'project/'+project.slug">
                      <img v-bind:src="hashImageUrl(project.cover)" alt="Image" />
                    </router-link>
                  </a>
                  <figcaption>
                    <h5>{{project.az_name}}</h5>
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
  data:function(){
    return{
      categories:null,
      projects:null,
    }
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
    this.getCats()
    this.getProjects()
  },
  methods:{
     async getCats(){
          let response=await axios.get('/alov/categories');
          this.categories=response.data;
      },
      async getProjects(){
          let response=await axios.get('/alov/projects');
          this.projects=response.data;
      },
      async hashImageUrl(image){
          let response=await axios.post('/actions/hashimageurl',{'image':image});
          return response.data
      }
  }
};
</script>
