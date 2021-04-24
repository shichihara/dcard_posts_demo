# Dcard Posts Demo
A webapp demo that imitate to show dcard post articles.

![image](./demo/demo.gif)

## Install Dependencies
```
yarn install
```

## Start WebApp
```
yarn start
```

## Features:
 - [x] Server-Side-Rendering(SSR)
 - [x] Styled-Component
 - [x] Performance
 - [x] Infinite Scroll
 - [x] Proxy Server

### Server-Side-Rendering(SSR)
Use `Webpack`, `babel` to package SSR client & server pack.

### Styled-Component
Use `styled-Component` to wrap all html tag in `react.js`.

### Performance
Use `hook` API to implement lazy-loading, like `useState, useEffect, useCallBack`...etc. 

### Infinite Scroll
Use `IntersectionObserver` API to achieve infinite scroll and only load more data while scrolling to current bottom boundary.

### Proxy Server
To solve **CORS** issue in dcard 3rd-party-API, in server-side I use `express` to build own proxy server.

## Roadmap
- [] Post comments 
- [] Post search
- [] Import `next.js` to implement forum list and route
- [] UX/UI optimization

