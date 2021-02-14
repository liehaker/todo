<template>
  <div class="mb-1 badge bg-primary text-wrap" style="width: 7rem">
    <label style="font-size: 10px"
      >completed : {{ total_count }} / {{ completed_count }}</label
    >
  </div>
</template>

<script>
export default {
  name: "Count",

  data() {
    return {};
  },
  mounted() {},
  methods: {},
  created() {},
  computed: {
    completed_count() {
      return this.$store.getters.completed_count;
    },
    total_count() {
      return this.$store.getters.total_count;
    },
  },
};
</script>

<style lang="scss" scoped></style>
