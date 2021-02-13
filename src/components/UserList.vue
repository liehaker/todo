<template>
  <div>
    <div style="font-weight: bold">UserList(Asynchronous test)</div>
    <div v-for="user in users" :key="user.id">{{ user.name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  created() {
    this.$store.dispatch("A_SET_USERS");
  },
};
</script>

<style></style>
