import { writable } from "svelte/store";
import Home from "./Home.svelte";
import Page from "./Page.svelte";

export const goTo = (updater, url) => {
  console.log(url);
  if (["/", "/index.html"].includes(url)) {
    updater((n) => [...n, { r: Home, u: "" }]);
    return;
  }

  if (url.includes("Page")) {
    updater((n) => [...n, { r: Page, u: url.substring(url.indexOf("?")) }]);
    console.log("here");
    return;
  }
};
const createRoute = () => {
  const { subscribe, set, update } = writable([{ r: Home, u: "" }]);

  return {
    subscribe,
    goTo: (url) => goTo(update, url),
  };
};

export const Route = createRoute();
