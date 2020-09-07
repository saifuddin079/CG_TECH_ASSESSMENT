<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <section>
        <router-view/>
    </section>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono|Titillium+Web:200&display=swap);

body {
  margin: 0;
  padding: 0;
  background-color: $background-primary;
  font-size: 100%;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz4AiDxCb32U23hsgD_LnLrp2BJm8tsiAmZg&usqp=CAU');
}
#app {
  font-family: $font-primary, monospace;
  color: $color-text-primary;
  padding: 0;
  font-size: 1em;
}
header{
  border-bottom: 1px solid $background-border;
  background-color: $background-secondary;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm2xXSCGxaBBnZ2xcU7n92S4RP1aasU9Eq1A&usqp=CAU');
}
footer{
  margin-top: 2em;
  border-top: 1px solid $background-border;
  background-color: $background-secondary;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm2xXSCGxaBBnZ2xcU7n92S4RP1aasU9Eq1A&usqp=CAU');
}
section {
  display: block;
  min-height: 500px;
  max-width: 1000px;
  margin: 0 auto;
}

</style>
