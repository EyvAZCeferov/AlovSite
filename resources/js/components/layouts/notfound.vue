<template>
  <span>
    <header class="page-header">
      <div class="container">
        <h1>{{ this.$trans("static.components.header.menu.notfound") }}</h1>
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
          <li>{{ this.$trans("static.components.header.menu.notfound") }}</li>
        </ul>
      </div>
      <!-- end container -->
    </header>
  </span>
</template>

<script>
export default {
  name: "NotFound",
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.notfound"
    );
  }
};
</script>
