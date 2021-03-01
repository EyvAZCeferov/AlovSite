<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>{{ this.$trans("static.components.header.menu.categories") }}</h1>
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
          <li>{{ this.$trans("static.components.header.menu.categories") }}</li>
        </ul>
      </div>
      <!-- end container -->
    </header>
    <section class="content-section">
      <div class="container">
        <div class="row">

          <div class="col-lg-4"  v-for="cat in categories" :key="cat.id">
            <div class="icon-content">
              <figure><img :src="hashImageUrl(cat.image)" alt="Image" /></figure>
              <h3>{{cat.az_name}}</h3>
              <small v-html="cat.az_description.substring(0,180)"></small>
              <router-link :to="{ name:'/categories/'+ cat.slug }"><a href="#">+</a></router-link>
            </div>
            <!-- end icon-content -->
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
import axios from 'axios';
export default {
  name: "Categories",
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.categories"
    );
  },
  data:function(){
      return{
          categories:null,
      }
  },
  created:function(){
    this.getCats();
  },
  methods:{
     async getCats(){
          let response=await axios.get('/alov/categories');
          this.categories=response.data;
      },
      async hashImageUrl(image){
          let response=await axios.post('/actions/hashimageurl',{'image':image});
          return response.data;
      }
  }
};
</script>




