<template>
  <ul>
    <TvCard
      v-for="(item, index) in results"
      :key="index"
      :item="item"
      v-on="$listeners"
    />
  </ul>
</template>

<script>
import TvCard from "@/components/TvCard.vue";

export default {
  name: "ItemList",
  components: {
    TvCard
  },
  props: {
    results: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
