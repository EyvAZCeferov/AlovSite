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
            <div class="news-box" v-for="item in items" :key="item.id">
              <figure>
                <img src="temp/images/slide01.jpg" alt="Image" />
              </figure>
              <div class="content">
                <small>29 February, 2020</small>
                <h3>
                  <a href="#">
                    <router-link to="/post/slugishere">
                      {{ item.name }}</router-link
                    ></a
                  >
                </h3>
                <div class="author">
                  <img src="temp/images/author01.jpg" alt="Image" />
                  <span
                    >by <b>{{ item.content }}</b></span
                  >
                </div>
                <!-- end author -->
              </div>
              <!-- end content -->
            </div>
            <!-- end news-box -->

            <!-- end news-box -->
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">PREV</a></li>
              <Pagination elements="10" />
            </ul>
            <!-- end pagination -->
          </div>
          <!-- end col-8 -->
          <div class="col-lg-4">
            <aside class="sidebar">
              <div class="widget">
                <h6 class="widget-title">SEARCH</h6>
                <form>
                  <input type="search" placeholder="Type here to search" />
                  <input type="submit" value="Search" />
                </form>
              </div>
              <!-- end widget -->
              <div class="widget">
                <h6 class="widget-title">CATEGORIES</h6>
                <ul class="categories">
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Construction</a></li>
                  <li><a href="#">Buildings</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Apartments</a></li>
                  <li><a href="#">Condos</a></li>
                  <li><a href="#">Villas & Houses</a></li>
                </ul>
              </div>
              <!-- end widget -->

              <div class="widget">
                <h6 class="widget-title">GALLERY</h6>
                <figure>
                  <img src="images/slide01.jpg" alt="Image" />
                </figure>
                <figure>
                  <img src="images/slide02.jpg" alt="Image" />
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
import Pagination from "./layouts/pagination.vue";
export default {
  components: { Pagination },
  name: "Posts",
  data: function() {
    return {
      items: [
        { id: 1, name: "Name1", content: "Content" },
        { id: 2, name: "Name2", content: "Content" },
        { id: 3, name: "Name3", content: "Content" }
      ]
    };
  },
  beforeCreate: function() {
    window.document.title = this.$trans("static.components.header.menu.posts");
  }
};
</script>
