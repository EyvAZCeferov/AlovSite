<template>
    <span>
        hi
    </span>
</template>
<script>
export default {
  name: "Profile",
  beforeCreate: function() {
    window.document.title = this.$trans(
      "static.components.header.menu.profile"
    );
  }
};
</script>
