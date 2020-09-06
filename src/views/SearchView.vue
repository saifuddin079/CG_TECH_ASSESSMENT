<template>
  <div>
    <div>
      <div v-if="loading">loading...</div>
      <span v-else-if="errorFlag">Network Error</span>
      <div class="disp" v-else>
        Results found for
        <span class="query">"{{ query }}"</span>
        : {{ totalResults }}
      </div>
    </div>
    <ItemList :results="slicedResults" type="tv" @item-clicked="viewDetailInfo($event)" />
    <ItemListMore v-if="totalResults > showCount" :loading="loading" @view-more="showMore()" />
  </div>
</template>

<script>
  import ItemList from '@/components/ItemList';
  import ItemListMore from '@/components/ItemListMore';
  import axios from 'axios'

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
      if (this.query !== "") {
        this.searchShows(this.query);
      }
    },
    methods: {
      loadData: (q) => {
        return axios.get(`https://api.tvmaze.com/search/shows?q=${q}`).then(response => {
          return response.data
        })
      },
      searchShows(q) {
        this.loading = true;
        this.results = [];
        this.loadData(q).then(data => {
          if (data) {
              for (let s of data) {
                this.results.push(s.show);
              }
              this.slicedResults = this.results.slice(0, this.showCount);
            }
        }).catch(() => {
            this.errorFlag = true
            // console.log(e, "error...!!");
          }).finally(() => {
            this.loading = false;
            this.totalResults = this.results.length
          });
       /*  API.httpGet({
          url: `https://api.tvmaze.com/search/shows?q=${this.query}`
        })
          .then(res => {
            if (res) {
              for (let s of res) {
                this.results.push(s.show);
              }
              this.slicedResults = this.results.slice(0, this.showCount);
            }
          })
          .catch(e => {
            this.errorFlag = true
            console.log(e, "error...!!");
          }).finally(() => {
            this.loading = false;
            this.totalResults = this.results.length
          }); */
      },
      viewDetailInfo(id) {
        this.$router.push(`/details/${id}`)
      },
      showMore() {
        this.showCount = this.showCount + 10
        this.slicedResults = this.results.slice(0, this.showCount);
      },
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
    margin-top: 10px ;
    color: $color-primary;
    font-weight: bold;
  }
</style>