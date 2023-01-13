# NFT List - Gallery

## Module

This module adds a gallery display to the NFT List page.

The module is ECMAScript module(ESM) and written in JavaScript.

* Module tree

    ```
    nftlistMain.js
    └─ modules
       ├─ nftlistDataTableParser.js
       └─ nftlistGrid.js
    ```

## Run locally
1. Add the HTML element to the page
    * `nftlist.html`

2. Start the Live Server
    * port: `5500` (default)

3. Run the script in the browser's console

    ```js
    // Import main module
    import('http://127.0.0.1:5500/nftlistMain.js').then(module => {
      console.log('nftlistMain.js loaded.');
    });
    ```
    
    Snippets
    
    ```js
    // import module and set it to variable
    let NFTListDataTableParser;
    import('http://127.0.0.1:5500/modules/nftlistDataTableParser.js').then(module => {
      NFTListDataTableParser = module.default
    });

    let NFTListGrid;
    import('http://127.0.0.1:5500/modules/nftlistGrid.js').then(module => {
      NFTListGrid = module.default
    });

    // clear grid
    const gridContainer = document.getElementById('grid');
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }

    // change data, change the number of columns
    const gridContent = NFTListGrid.createGrid(nfts.filter(e => e.name.toLowerCase().includes('house')), 4);
    gridContainer.append(gridContent);
    ```


## Development environment

### npm package

* Install all packages at once

  ```
  npm install
  ```

  This will install the following packages

  ```
  npm install --save-dev eslint
  npm install --save-dev eslint-plugin-jest
  npm install --save-dev jest
  npm install --save-dev jest-environment-jsdom
  ```

### VS Code extension

* Live Server

* ESLint

* Jest

* es6-string-html

### Command

* run ESLint manually

  ```
  npm run lint
  ```

* run Jest manually

  ```
  npm test
  ```
