<template>
  <div>
    <label style="font-size: 10px" for=""> {{ contents }} </label>
  </div>
</template>

<script>
export default {
  // props: {
  //   preText: {
  //     type: String,
  //   },
  // },
  computed: {
    contents() {
      return this.$store.state.contents;
    },
  },
};
</script>

<style>
</style>