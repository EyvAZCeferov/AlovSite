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
          <div class="col-lg-4">
            <div class="icon-content">
              <figure><img src="temp/images/icon01.png" alt="Image" /></figure>
              <h3>We plan with sensetive</h3>
              <small
                >The awards for design, creativity and innovation on the
                Internet</small
              >
              <a href="#">+</a>
            </div>
            <!-- end icon-content -->
          </div>
          <!-- end col-4 -->
          <div class="col-lg-4">
            <div class="icon-content">
              <figure><img src="temp/images/icon02.png" alt="Image" /></figure>
              <h3>For futuristic buildings</h3>
              <small
                >Twenty spring of in esteem spirit likely estate continue new
                building</small
              >
              <a href="#">+</a>
            </div>
            <!-- end icon-content -->
          </div>
          <!-- end col-4 -->
          <div class="col-lg-4">
            <div class="icon-content">
              <figure><img src="temp/images/icon03.png" alt="Image" /></figure>
              <h3>Make living beautiful</h3>
              <small
                >Sympathize it projection ye insipidity celebrated our
                pianoforte</small
              >
              <a href="#">+</a>
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
export default {
  name: "Categories",
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.categories"
    );
  }
};
</script>
