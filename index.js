/*
    Route Announcer Extension
    ============================
    This extension adds a route announcer for screen readers to htmx.
    Based on the route announcer from Astro View Transitions API (https://github.com/withastro/astro/blob/main/packages/astro/src/transitions/router.ts#L63)
    by Astro.
*/

(function () {
  htmx.defineExtension("route-announcer", {
    onEvent: (name, _) => {
      if (name === "htmx:afterSwap") {
        let div = document.createElement("div");
        div.setAttribute("aria-live", "assertive");
        div.setAttribute("aria-atomic", "true");
        div.style.position = "absolute";
        div.style.left = "0";
        div.style.top = "0";
        div.style.clip = "rect(0 0 0 0)";
        div.style.clipPath = "inset(50%)";
        div.style.overflow = "hidden";
        div.style.whiteSpace = "nowrap";
        div.style.width = "1px";
        div.style.height = "1px";
        document.body.append(div);
        setTimeout(
          () => {
            let title =
              document.title ||
              document.querySelector("h1")?.textContent ||
              location.pathname;
            div.textContent = title;
          },
          // Much thought went into this magic number; the gist is that screen readers
          // need to see that the element changed and might not do so if it happens
          // too quickly.
          60
        );
      }
    },
  });
})();
