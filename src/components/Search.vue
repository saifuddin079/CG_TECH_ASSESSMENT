<template>
  <div class="search-container">
    <button>
      <font-awesome-icon
        icon="search"
        transform="shrink-6"
        size="2x"
        class="icon-search"
      />
    </button>
    <input
      type="text"
      maxlength="20"
      v-model="query"
      @keypress.enter="search"
      placeholder="Search TV Shows"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      if (this.query.length >= 2) {
        this.$router.push("/search?q=" + this.query);
        window.location.reload();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  height: 60px;
}
input {
  border: 0;
  padding: 2px 10px;
  width: calc(100% - 95px);
  font-size: 1.1em;
  outline: 0;
  color: $color-primary;
  background-color: $background-input;
  border-radius: 3px;
}
button {
  padding: 0 10px 0 20px;
  border: 0;
  outline: 0;
  background-color: transparent;

  .icon-search {
    color: $color-text-primary;
  }
}
@include sm {
  input {
    padding: 5px 10px;
    font-size: 1.3em;
  }
}
</style>
