<template>
  <div>
    <router-view></router-view>
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></teams-item>
    </ul>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import TeamsItem from "./TeamsItem.vue";

export default {
  components: {
    TeamsItem,
  },
  inject: ["teams"],
  beforeRouteLeave(to, from, next) {
    const res = confirm("Are you sure you want to leave ?");
    if (res) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
