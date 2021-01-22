<script>
  import { url } from "inspector";
  import { onMount, onDestroy } from "svelte";
  import { Route } from "./router";
  import { MainStore } from "./stores";
  let stories = [];
  let end = false;
  onMount(async () => {
    const storyIds = (
      await fetch(
        `https://hacker-news.firebaseio.com/v0/beststories.json`
      ).then((d) => d.json())
    ).slice(0, 10);
    for (const id of storyIds) {
      if (end) {
        break;
      }
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      ).then((d) => d.json());
      stories = [
        ...stories,
        { id, title: res.title, url: res.url, by: res.by },
      ];
    }
  });
  onDestroy(() => {
    end = true;
  });

  const handleUrlClick = (url) => {
    cordova.InAppBrowser.open(url);
  };
</script>

<main>
  <h1>Home ❤️ Svelte</h1>
  <div>{stories.length}</div>
  {#each stories as story}
    {#if story}
      <div
        style="border: 1px solid black; margin-top: 0.2em; margin-bottom: 1em; padding: 0.2em;"
      >
        <h1 on:click={() => Route.goTo(`Page?id=${story.id}`)}>
          {story.title}
        </h1>
        <p style="padding-left: 1em;">
          {story.by} -- <a href={story.url}>{story.url}</a>
          <button on:click={() => handleUrlClick(story.url)}>{story.url}</button
          >
        </p>
      </div>
    {:else}<div>Loading</div>
    {/if}
  {/each}
</main>

<style>
</style>
