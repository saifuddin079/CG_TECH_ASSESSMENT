<template>
  <div>
    <h2 class="title">
      <font-awesome-icon icon="star" size="1x" />&nbsp;
      Top Picks For You
    </h2>
    <span v-if="loading" class="title">Loading....</span>
    <span v-else-if="errorFlag" class="title">Network Error</span>
    <span v-else>
      <ItemList :results="popularShows" type="movie" @item-clicked="viewDetailInfo" />
    </span>

    <h2 class="title">
      <font-awesome-icon icon="video" transform="shrink-3" size="1x" />&nbsp;
      Suit Your Genres
    </h2>
    <span v-if="loading" class="title">Loading....</span>
    <span v-else-if="errorFlag" class="title">Network Error</span>
    <span v-else>
      <div v-for="(value, key) in slicedShowByGenre" :key="key">
        <h2 class="title">{{key}}</h2>
        <ItemList :results="value" type="tv" @item-clicked="viewDetailInfo($event)" />
      </div>
      <ItemListMore v-if="totalLength > showCount" :loading="loading" @view-more="showMore()" />
    </span>


  </div>
</template>

<script>
  import ItemList from '@/components/ItemList.vue';
  import ItemListMore from '@/components/ItemListMore';
  import axios from 'axios';
  import _ from 'lodash'

  export default {
    name: 'LandingView',
    components: {
      ItemList,
      ItemListMore
    },
    data() {
      return {
        numItems: 10,
        totalShows: [],
        resultsMovie: [],
        resultsTv: [],
        popularShows: [],
        showByGenre: {},
        slicedShowByGenre: {},
        genreList: [
          "Comedy",
          "Drama",
          "Family",
          "Romance",
          "Food",
          "Travel",
          "Crime",
          "History",
          "Sports",
          "Fantasy",
          "Medical",
          "Action",
          "Legal",
          "Mystery",
          "Music",
          "Adventure",
          "Children",
          "Supernatural",
          "Science-Fiction",
          "Thriller",
          "War",
          "Adult",
          "Western",
          "Horror",
          "Anime"
        ],
        totalLength: 0,
        errorFlag: false,
        loading: true,
        showCount: 5
      };
    },
    created() {
      this.getShowList();
    },
    methods: {
      loadData: () => {
        return axios.get(`https://api.tvmaze.com/shows?page=1`).then(response => {
          // console.log(response)
          return response.data
        })
      },
      getShowList() {
        this.loadData().then(res => {
          this.totalShows = res
          this.popularShows = this.getTopPopular(this.totalShows)
          this.showByGenre = this.sortByGenre(this.totalShows)
          this.totalLength = Object.keys(this.showByGenre).length
          this.slicedShowByGenre = Object.fromEntries(Object.entries(this.showByGenre).slice(0, this.showCount))
        }).catch(() => {
        }).finally(() => {
          this.loading = false
        })
      },

      showMore() {
        this.showCount = this.showCount + 5
        this.slicedShowByGenre = Object.fromEntries(Object.entries(this.showByGenre).slice(0, this.showCount))
      },

      getTopPopular(payload) {
        return _.sortBy(payload, [
          function (o) {
            return o.rating.average;
          }
        ]).reverse().slice(0, 10);
      },

      sortByGenre(payload) {
        let temp = {}
        for (let genre of this.genreList) {
          temp[genre] = []
          payload.forEach(element => {
            if (temp[genre].length == 5) {
              return false
            }
            if (element.genres && element.genres.includes(genre)) {
              temp[genre].push(element)
            }
          });
        }
        return temp
      },
      viewDetailInfo(id) {
        this.$router.push(`/details/${id}`)
      }
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    margin: 1em 0 1em 20px;
    font-family: $font-secondary, sans-serif;
    color: $color-secondary;
    font-size: 1.5em;
    text-transform: uppercase;
  }
</style>