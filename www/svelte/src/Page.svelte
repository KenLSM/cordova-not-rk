<script>
  import { onMount, onDestroy } from "svelte";
  import { Route } from "./router";
  export let u = "";
  const urlParser = new URLSearchParams(u);
  const storyId = urlParser.get("id");
  let comments = [];
  let end = false;
  onMount(async () => {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    ).then((d) => d.json());
    const commentIds = res.kids;
    for (const id of commentIds) {
      if (end) {
        break;
      }
      const text = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}/text.json`
      ).then((d) => d.json());
      comments = [...comments, { id, text }];
      console.log(comments);
    }
  });
  onDestroy(() => {
    end = true;
  });
</script>

<main>
  <h1>Page ❤️ Svelte</h1>
  <h2><button on:click={() => Route.goTo(`/`)}>Back</button></h2>

  {#if comments.length === 0}<div>Loading</div>{/if}
  {#each comments as story}
    <p>{story.id} --</p>
    <p style="padding-left: 1em;">{@html story.text}</p>
  {/each}
</main>
