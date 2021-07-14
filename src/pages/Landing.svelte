<h1>Ollesvelte</h1>
<span
  ><a href="https://github.com/ollefrost" target="_blank"><b>Léfrost</b></a>'s
  personal Svelte boilerplate. ✌️</span
>

<style lang="scss">
  @import "../assets/scss/all.scss";

  h1 {
    font-family: $ff-alpha;
    font-size: 50px;
  }

  span {
    font-size: 20px;

    > a {
      @include clickable;
    }
  }
</style>
