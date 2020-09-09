<template>
  <div>
    <div class="more-container">
      <button @click="viewMoreData">
        <span>Show More Genres</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    viewMoreData() {
      this.$emit("view-more");
    }
  }
};
</script>

<style lang="scss" scoped>
.more-container {
  text-align: center;
  margin-top: 2em;

  button {
    display: inline-block;
    padding: 10px 0;
    border: 1px solid $background-border;
    width: 10em;
    outline: 0;
    color: $color-text-primary;
    background-color: $color-primary;
    border-color: $color-text-primary;
    font-size: 0.8em;
    font-family: "Ubuntu Mono";
    text-decoration: none;
    cursor: pointer;

    &:hover {
      border-color: $color-text-secondary;
      color: $color-text-secondary;
    }
  }
}
</style>
