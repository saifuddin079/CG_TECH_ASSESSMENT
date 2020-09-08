<template>
  <div>
    <div>
      <div class="disp" v-if="loading">loading...</div>
      <div class="disp" v-else-if="errorFlag">Network Error</div>
      <div class="disp" v-else>
        Results found for
        <span class="query">"{{ query }}"</span>
        : {{ totalResults }}
      </div>
    </div>
    <ItemList
      :results="slicedResults"
      type="tv"
      @item-clicked="viewDetailInfo($event)"
    />
    <ItemListMore
      v-if="totalResults > showCount"
      :loading="loading"
      @view-more="showMore()"
    />
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";
import ItemListMore from "@/components/ItemListMore";
import API from "@/services/api.js";

export default {
  components: {
    ItemList,
    ItemListMore
  },
  data() {
    return {
      query: this.$route.query.q,
      loading: false,
      errorFlag: false,
      results: [],
      slicedResults: [],
      totalResults: null,
      showCount: 10
    };
  },
  created() {
    this.loadData(this.query);
  },
  methods: {
    // load master data
    loadData(q) {
      if (q == "") {
        return false;
      }
      this.loading = true;
      API.get({ path: `/search/shows?q=${q}` })
        .then(data => {
          this.searchShows(data);
        })
        .catch(() => {
          this.errorFlag = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // restructure received response
    searchShows(data) {
      if (data) {
        for (let s of data) {
          this.results.push(s.show);
        }
        this.totalResults = this.results.length;
        this.slicedResults = this.results.slice(0, this.showCount);
      }
    },
    // click handler when click on an item
    viewDetailInfo(id) {
      this.$router.push(`/details/${id}`);
    },
    // click handler when click on show more button
    showMore() {
      this.showCount = this.showCount + 10;
      this.slicedResults = this.results.slice(0, this.showCount);
    }
  }
};
</script>

<style lang="scss" scoped>
.query {
  color: $color-text-secondary;
  background-color: $color-primary;
  font-weight: bold;
  font-style: italic;
  text-transform: lowercase;
}

.disp {
  margin-top: 10px;
  color: $color-primary;
  font-weight: bold;
}
</style>
