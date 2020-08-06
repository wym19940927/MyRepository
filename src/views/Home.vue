<template>
  <div id="home">
    <div class="weather_container">
      <weather></weather>
      <habit-list></habit-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Weather from "@/components/common/Weather.vue";
import HabitList from "@/components/home/HabitList.vue";
@Component({
  components: {
    Weather,
    HabitList,
  },
})
export default class Home extends Vue {
  beforeDestroy() {}
}
</script>
<style lang="scss"></style>
