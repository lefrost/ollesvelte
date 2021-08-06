# Ollesvelte

My personal [Svelte](https://svelte.dev) boilerplate. Preview on [Vercel](https://ollesvelte.vercel.app). ✌️

## Notable changes

Besides the additional dependencies and files, I've made a couple more changes to Svelte's [default boilerplate](https://svelte.dev/repl/hello-world):

- Tweaked `rollup.config.js` to account for additional dependencies and added `--single` flag to `npm run dev` command so page refreshes won't spit out a 404
- Moved global styles from `public/global.css` to `src/assets/scss/globals/styles.scss`
- Enhanced file structure and index page to what I like to start off with

## Extensions

On [VS Code](https://code.visualstudio.com/):

- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for formatting non-`.svelte` files
- [svelte.svelte-vscode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) for `.svelte` support and formatting

Setup in global `settings.json`:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[svelte]": {
  "editor.defaultFormatter": "svelte.svelte-vscode"
}
```

## Dependencies

- [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) for `.scss` support with `<style lang="scss">..</style>`
- [svelte-routing](https://github.com/EmilTholin/svelte-routing) or [svelte-navigator](https://github.com/mefechoel/svelte-navigator) for `<Route>` and `<Link to="..">`-based routing
- [vercel](https://github.com/vercel/vercel) for deployment through CLI
- [clipboard.js](https://github.com/zenorocha/clipboard.js) for simplified copy-to-clipboard actions (added as script)
- [dotenv](https://github.com/motdotla/dotenv) for locally managing environment variables
- [easytimer.js](https://github.com/albert-gonzalez/easytimer.js/) for countdowns
- [gh-pages](https://github.com/tschaub/gh-pages) for alternative deployment to Github Pages
- [numeral.js](http://numeraljs.com/) for formatting numbers (added as script)

## Scripts

- [jQuery](https://github.com/jquery/jquery) obviously

## Setup

```bash
npm install
npm run dev
```

## Deployment

First-time deployment with [Vercel](https://vercel.com/):

```bash
npm run build
vercel deploy --name app-name
```

Following deployments, from project root:

```bash
npm run build
vercel deploy --prod
```

---

🍉 Last revised on July 2021 🍉
