<template>
  <div>
    <div class="unit">
      <div class="disp" v-if="loading">Loading ...</div>
      <div class="disp" v-else-if="errorFlag">Netwrok Error</div>
      <div v-else-if="showDetails && showDetails.name">
        <div class="banner">
          <figure>
            <img
              v-if="showDetails && showDetails.image"
              :src="showDetails.image.medium"
            />
            <img v-else src="@/assets/images/noImage.jpg" />
          </figure>
          <p>{{ showDetails.type ? showDetails.type : "No Info" }}</p>
        </div>
        <section class="info">
          <h1>{{ showDetails.name ? showDetails.name : "No Info" }}</h1>
          <p v-if="showDetails.summary" v-html="showDetails.summary"></p>
          <p v-else>No Info</p>
          <h2 class="label">Release Date</h2>
          <p>{{ formatDate(showDetails.premiered) }}</p>
          <h2 class="label">Genres</h2>
          <ul>
            <li v-if="!showDetails.genres || !showDetails.genres.length">
              No Info
            </li>
            <li v-else v-for="genre in showDetails.genres" :key="genre">
              {{ genre }}
            </li>
          </ul>
          <h2 class="label">Cast</h2>
          <span
            v-if="
              !showDetails._embedded.cast || !showDetails._embedded.cast.length
            "
            >No Info</span
          >
          <span
            v-else
            v-for="(cast, index) in showDetails._embedded.cast"
            :key="index"
            >{{ cast.person.name
            }}<span v-if="index + 1 < showDetails._embedded.cast.length"
              >,
            </span></span
          >
          <h2 class="label">User Ratings</h2>
          <p
            v-if="
              showDetails && showDetails.rating && showDetails.rating.average
            "
          >
            {{ showDetails.rating.average }}/10
          </p>
          <p v-else>User Ratings are not available</p>
          <h2 class="label">Language</h2>
          <p>{{ showDetails.language ? showDetails.language : "No Info" }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/services/api";
import moment from "moment";
export default {
  data() {
    return {
      itemId: this.$route.params.id,
      loading: true,
      errorFlag: false,
      showDetails: {}
    };
  },
  created() {
    this.getShowDetails(this.itemId);
  },
  methods: {
    // get show data
    async getShowDetails(id) {
      let res = await API.get({ path: `/shows/${id}?embed=cast` });
      if (!res.error) {
        this.showDetails = res;
      } else {
        this.errorFlag = true;
      }
      this.loading = false;
    },

    // format date strings
    formatDate(d) {
      return moment(d).format("dddd DD MMM, YYYY");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
figure {
  margin: 0 0 1em;
}

img {
  width: 100%;
  height: auto;
}

h1 {
  margin-top: 0;
  font-size: 2em;
  color: $color-primary;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

li {
  display: inline;
  padding: 4px;
  margin-right: 5px;
  background-color: $color-tags;
  color: $color-text-secondary;
  font-size: 0.9em;
}

p,
span {
  margin: 0;
  line-height: 1.4;
  color: rgb(47, 14, 78);
}

.unit {
  padding: 2em;
}

.banner {
  display: block;
  margin-bottom: 2em;
  text-align: center;
}

.info {
  display: block;
}

.label {
  margin: 2em 0 0.2em;
  font-family: $font-secondary, sans-serif;
  color: $color-secondary;
  font-size: 1em;
  text-transform: uppercase;
}

.disp {
  margin-top: 10px;
  color: $color-primary;
  font-weight: bold;
}

@include sm {
  .banner {
    float: left;
    margin: 0;
    width: 33%;
    text-align: center;
  }

  .info {
    display: block;
    padding-left: 2em;
    margin-left: 33%;
  }
}
</style>
