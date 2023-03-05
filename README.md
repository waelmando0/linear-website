# Linear Website

## Setup Next13 with PNPM

```
pnpm create next-app@latest --experimental-app
```

## install tailwindcss

```
pnpm install -D tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

Add To globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Download class variance Authority

we can make it a lot more structured when we're defining multiple variants of the same component

```
pnpm install class-variance-authority
```

## react intersection observer to tell you when an element enters or leaves the viewport

`react-intersection-observer`
