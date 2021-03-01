<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>{{ this.$trans("static.components.header.menu.posts") }}</h1>
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
          <li>{{ this.$trans("static.components.header.menu.posts") }}</li>
        </ul>
      </div>
      <!-- end container -->
    </header>
    <section class="content-section ">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="news-box" v-for="item in news" :key="item.id">
              <figure>
                <img v-bind:src="hashImageUrl(item.cover)" alt="Image" />
              </figure>
              <div class="content">
                <small>{{ dateConvert(item.created_at) }}</small>
                <h3>
                  <a href="#">
                    <router-link to="/post/slugishere">
                      {{ item.az_name }}</router-link
                    ></a
                  >
                </h3>
                <div>
                  <span v-html="item.az_description.substring(0,400)"
                    ></span
                  >
                </div>
                <!-- end author -->
              </div>
              <!-- end content -->
            </div>
            <!-- end news-box -->

            <!-- end pagination -->
          </div>
          <!-- end col-8 -->
          <div class="col-lg-4">
            <aside class="sidebar">
              <div class="widget">
                <h6 class="widget-title">{{this.$trans("static.form.buttons.search")}}</h6>
                <form>
                  <input type="search" v-bind:placeholder="this.$trans('static.components.header.search.typesearchkeyword')" />
                  <input type="submit" v-bind:value="this.$trans('static.form.buttons.search')" />
                </form>
              </div>
              <!-- end widget -->
              <div class="widget">
                <h6 class="widget-title">{{this.$trans("static.components.header.menu.categories")}}</h6>
                <ul class="categories" v-for="cat in categories" :key="cat.id">
                  <li><a href="#">{{cat.az_name}}</a></li>
                </ul>
              </div>
              <!-- end widget -->

              <div class="widget">
                <h6 class="widget-title">{{this.$trans("static.pages.posts.widget.gallery")}}</h6>
                <figure>
                  <img src="temp/images/slide01.jpg" alt="Image" />
                </figure>
                <figure>
                  <img src="temp/images/slide02.jpg" alt="Image" />
                </figure>
              </div>
              <!-- end widget -->
            </aside>
            <!-- end sidebar -->
          </div>
          <!-- end col-4 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </span>
</template>

<script>
import moment from 'moment'

export default {
  name: "Posts",
  data: function() {
    return {
      news:null,
      categories:null,
    };
  },
  beforeCreate: function() {
    window.document.title = this.$trans("static.components.header.menu.posts");
  },
  created() {
      this.getPosts()
      this.getCats()
  },
  methods:{
     async getPosts(){
          let response=await axios.get('/alov/news');
          this.news=response.data;
      },
      async getCats(){
          let response=await axios.get('/alov/categories');
          this.categories=response.data;
      },
     async hashImageUrl(image){
         await axios.post('/actions/hashimageurl',{'image':image}).then(response=>{
                return JSON.stringify(response.data);
          });

      },
      dateConvert(date){
          return moment(String(date)).format('DD/MM/YYYY')
      },
  }
};
</script>
