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
