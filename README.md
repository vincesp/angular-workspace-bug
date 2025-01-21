# angular-workspace-bug

```
npm i
```

This will render the page correctly, using just Vite:

```
npm run dev -w vite-app
```

This won't render properly, as Angular is mis-configuring Vite and disabling the NPM workspace detection:

```
npm start -w angular-app
```

Error message:

```
The request url "/workspaces/codespaces-blank/my-font-css/ole.woff2" is outside of Vite serving allow list.

- /workspaces/codespaces-blank/angular-app/.angular/cache/19.1.3/angular-app/vite
- /workspaces/codespaces-blank/angular-app/node_modules
- /workspaces/codespaces-blank/angular-app/public/favicon.ico
- /workspaces/codespaces-blank/node_modules/@angular/build/node_modules/vite/dist/client

Refer to docs https://vite.dev/config/server-options.html#server-fs-allow for configurations and more details.
```
