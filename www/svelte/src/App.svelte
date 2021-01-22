<script>
  // import navaid from "navaid";

  import { Route } from "./router";
</script>

<main>
  <svelte:component
    this={$Route[$Route.length - 1]["r"]}
    u={$Route[$Route.length - 1]["u"]}
  />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
