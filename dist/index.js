/*
    Route Announcer Extension
    ============================
    This extension adds a route announcer for screen readers to htmx.
    Based on the route announcer from Astro View Transitions API (https://github.com/withastro/astro/blob/main/packages/astro/src/transitions/router.ts#L63)
    by Astro.
*/ (function () {
  htmx.defineExtension("route-announcer", {
    onEvent: (name, _) => {
      if (name === "htmx:afterSwap") {
        if (!document.getElementById("htmx-route-announcer")) {
          //  && new URL(event.detail.requestConfig.headers["HX-Current-URL"]).pathname !== event.detail.pathInfo.finalRequestPath
          let div = document.createElement("div");
          div.setAttribute("id", "htmx-route-announcer");
          div.setAttribute("aria-live", "assertive");
          div.setAttribute("aria-atomic", "true");
          div.setAttribute(
            "style",
            "position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px"
          );
          document.body.append(div);
          setTimeout(
            () => {
              let title =
                document.title ||
                document.querySelector("h1")?.textContent ||
                location.pathname;
              div.textContent = title;
            }, // Much thought went into this magic number; the gist is that screen readers
            // need to see that the element changed and might not do so if it happens
            // too quickly.
            60
          );
        }
      }
    },
  });
})();

//# sourceMappingURL=index.js.map