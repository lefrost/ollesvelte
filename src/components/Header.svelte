<script>
  import { add_attribute } from "svelte/internal";

  // import { Link } from "svelte-routing";
  import { root } from "../assets/js/paths.js";
</script>

<div class="header">
  <!-- <Link to={root}> -->
  <a href={root} class="link  main--">Ollesvelte</a>
  <!-- </Link> -->

  <!-- <Link to="{root}meta"> -->
  <a href="{root}meta" class="link">Meta</a>
  <!-- </Link> -->
</div>

<button class="menu">
  👾
  <div class="menu__links">
    <!-- <Link to={root}> -->
    <a href={root} class="link">Home</a>
    <!-- </Link> -->

    <!-- <Link to="{root}meta"> -->
    <a href="{root}meta" class="link">Meta</a>
    <!-- </Link> -->
  </div>
</button>

<style lang="scss">
  @import "../assets/scss/all.scss";

  /* --- Header --- */

  .header {
    @include wrapper;
    padding: $wrapper-gutter;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* --- Link --- */

  .link {
    @include clickable;
    margin: 0 20px;
    font-size: 18px;

    &.main-- {
      font-family: $ff-alpha;
      font-size: 20px;
      font-weight: bold;
    }

    &:not(.main--) {
      display: none;
    }
  }

  @media (min-width: $bp-sm) {
    .link {
      &.main-- {
        font-size: 30px;
      }

      &:not(.main--) {
        display: block;
      }
    }
  }

  /* --- Menu --- */

  .menu {
    @include swish;
    position: fixed;
    display: flex;
    bottom: $wrapper-gutter;
    right: $wrapper-gutter;
    padding: 10px;
    border-radius: 5px;
    background-color: $white;
    box-shadow: 0 0 20px 0px rgba($black, 0.2);
    z-index: 1;
    border: none;
    transition-property: transform;

    &:focus {
      transform: rotate(-15deg);
      > .menu__links {
        bottom: 50px;

        .link {
          font-size: 18px;
          opacity: 1;
        }
      }
    }
  }

  .menu__links {
    display: flex;
    align-items: flex-end;
    position: absolute;
    flex-direction: column;
    right: 0;
    bottom: 0;
    transition-property: bottom;
    @include swish;

    .link {
      @include swish;
      transition-property: font-size, opacity;
      display: block;
      font-size: 0;
      margin: 0;
      opacity: 0;
      font-weight: bold;
    }
  }

  @media (min-width: $bp-sm) {
    .menu {
      display: none;
    }
  }
</style>
