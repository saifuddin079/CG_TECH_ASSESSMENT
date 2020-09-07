<template>
  <li class="card">
    <div >
      <a href="#" @click.prevent="viewDetail">
        <figure>
          <img v-if="item && item.image" :src="item.image.medium" />
          <img v-else src="@/assets/images/NoBanner.png" />
        </figure>
        <span class="card-title">{{ item.name }} </br></br>
          <font-awesome-icon class="icon" icon="star" size="1x" /> {{item.rating && item.rating.average ? item.rating.average+'/10' : 'No Ratings'}}
        </span>
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TvCard',
  props: {
    item: Object,
  },
  methods: {
    viewDetail() {
      this.$emit('item-clicked', this.item.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
figure {
  margin: 0 0 10px;
  padding: 0;
}
img {
  width: 100%;
  height: auto;
  box-shadow: 0px 1px 5px 0px $poster-shadow;
  box-sizing: border-box;
}
span {
  padding: 2px;
  color: $color-text-primary;
  font-size: .9em;

  &.icon-container{
    float:left; 
    margin-right: 5px;
    padding-bottom:5px;
  }
}
i{
  display: inline-block;
  padding-top: 4px;
}
a {
  color: #333;
  text-decoration: none;
  background-color: $color-primary;
  &:hover {
    img {
      box-shadow: 0px 1px 5px 0px $poster-shadow-active;
    }
    span.card-title {
      color: $color-text-secondary;
      background-color: $color-primary;
    }
  }
}
.card {
  list-style: none;
  margin-bottom: 10px;
  padding: 0;
  width: 50%;

  div {
    padding: 10px 20px;
  }
}

.icon{
  display: inline;
  color: #fff;
  
}
@include sm {
  .card {
    width: 33%;
  }
}
@include md {
  .card {
    width: 25%;
  }
}
@include lg {
  .card {
    width: 20%;
  }
}
</style>
