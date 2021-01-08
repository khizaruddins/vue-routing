<template>
  <div>
    <ul>
      <button @click="routeToTeams">confirm</button>
      <user-item
        v-for="user in users"
        :name="user.fullName"
        :key="user.id"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  methods: {
    routeToTeams() {
      this.$router.push("/teams");
    },
  },
  inject: ["users"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
