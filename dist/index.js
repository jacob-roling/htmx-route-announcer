/*
    Route Announcer Extension
    ============================
    This extension adds a route announcer for screen readers to htmx.
    Based on the route announcer from Astro View Transitions API (https://github.com/withastro/astro/blob/main/packages/astro/src/transitions/router.ts#L63)
    by Astro.
*/ var $7e7a65068a58fc69$export$2e2bcd8739ae039 = {
    onEvent: (name, _)=>{
        if (name === "htmx:afterSwap") {
            let announcer = document.getElementById("htmx-route-announcer");
            if (!announcer) {
                announcer = document.createElement("div");
                announcer.setAttribute("id", "htmx-route-announcer");
                announcer.setAttribute("aria-live", "assertive");
                announcer.setAttribute("aria-atomic", "true");
                announcer.setAttribute("style", "position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px");
                document.body.append(announcer);
            }
            const timeout = setTimeout(()=>{
                announcer.textContent = document.title || document.querySelector("h1").textContent || location.pathname;
                clearTimeout(timeout);
            }, // Much thought went into this magic number; the gist is that screen readers
            // need to see that the element changed and might not do so if it happens
            // too quickly.
            60);
        }
    }
};


export {$7e7a65068a58fc69$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.js.map
