# White Rabbit Technology Website

This repository contains the marketing website for
[White Rabbit Technology](https://whiterabbit.llc). The site is written with
[NextJS](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/),
[ReactJS](https://reactjs.org/), and [Tailwind](https://tailwindcss.com/).
The site is deployed using
[DigitalOcean AppPlatform](https://docs.digitalocean.com/products/app-platform/).

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Next, run the server in development mode:

```bash
yarn dev
```

… or build the website as a static bundle:

```bash
yarn build
```

This will create a directory `./out` with all of the static assets. You can run
the static file server of your choice to view the website. For example:
```bash
python -m http.server 3000 --directory=out
L
