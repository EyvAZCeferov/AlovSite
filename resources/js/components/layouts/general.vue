<template>
  <span>
    <!-- <div class="firstTransition"></div>
   <div class="pageTransition"></div> -->
    <Header />
    <!-- <transition name="firstTransition"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <Footer />
  </span>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import {mapActions} from 'vuex';
export default {
  name: "General",
  components: {
    Header,
    Footer
  },
  methods:{
      ...mapActions({
          refresh:"auth/refresh",
      }),
  },
  created:function(){
      this.refresh();
  }
};
</script>

<style scoped>
.firstTransition-enter-active {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  right: 0;
  top: 0;
  background: #feed01;
  animation: first-transition 1s;
  animation-fill-mode: forwards;
}

.firstTransition-leave-active {
  width: 0;
  height: 0;
  position: fixed;
  z-index: -5;
  right: 0;
  top: 0;
  animation: first-transition 1s;
  animation-fill-mode: forwards;
}

@keyframes first-transition {
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
}
.pageTransition {
  width: 0;
  height: 100%;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  background: #feed01;
  transition: all ease 1s;
}
.pageTransition.active {
  width: 100%;
}
</style>
