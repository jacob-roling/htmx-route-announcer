# htmx Route Announcer

The Route Announcer extension makes htmx navigation accessible by adding an new element with the `aria-live` attribute set to `assertive` after new content is swapped in. This tells AT (assistive technology) to announce the new route immediately. The extension checks for the following, in priority order, to determine the announcement text:

1. The `<title>`, if it exists.
2. The first `<h1>` it finds.
3. The `pathname` of the page.

> [!WARNING]
> It is strongly recommend you always include a `<title>` in each page for accessibility.

## Installation

### Browser

Install the extension by including the script into your page.

```html
<script src="https://unpkg.com/htmx-route-announcer/dist/ext.min.js"></script>
```

### Bundler

```bash
npm install htmx-route-announcer
```

```javascript
import htmx from "htmx.org";
import RouteAnnouncer from "htmx-route-announcer";

htmx.defineExtension("route-announcer", RouteAnnouncer);
```

## Usage

Activate the extension by adding `hx-ext` attribute to your page

```html
<div hx-ext="route-announcer">...</div>
```
