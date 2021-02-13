<template>
  <div>
    <Todo v-for="content in contents" :key="content.id" :content="content" />
  </div>
</template>

<script>
import Todo from "@/components/todo";

export default {
  data() {
    return {};
  },
  components: {
    Todo,
  },
  computed: {
    contents() {
      return this.$store.state.contents.contents;
    },
  },
  methods: {},
};
</script>