<template>
  <div class="footer">
    <ul>
      <li>
        <a href="https://www.facebook.com" target="_blank">facebook</a>
      </li>
      <li>
        <a href="https://twitter.com" target="_blank">twitter</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin: 0 auto;
  padding: 4em 0;
  text-align: center;
  font-size: 0.9em;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0
}
li {
  display: flex;
  padding: 1em;
}
a {
  color: $color-text-primary;
  &:hover {
    background-color: $color-primary;
    text-decoration: none;
  }
}
@include sm {
  .footer{
    max-width: 1000px;
  }
  ul{
    display: flex;
  }
  li {
    display: inline;
    padding-right: 2em;
    text-align: center;
  }
}
</style>