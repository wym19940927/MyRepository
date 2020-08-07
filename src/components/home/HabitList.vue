<template>
  <div id="habit_list"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HabitList extends Vue {}
</script>
<style lang="scss">
#habit_list {
  position: relative;
  padding-top: 200px;
  padding-bottom: 100px;
  height: 100%;
  box-sizing: border-box;
}
</style>
