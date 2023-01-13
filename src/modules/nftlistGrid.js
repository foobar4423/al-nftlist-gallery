const ROW_TEMPLATE = /*html*/`
<template>
  <h2></h2>
  <div class="row"></div>
  <hr>
</template>
`;

const COLUMN_TEMPLATE = /*html*/`
<template>
  <div class="col">
    <div class="card border-0">
      <img src="" class="card-img-top">
      <small></small>
    </div>
  </div>
</template>
`;

const parser = new DOMParser();
const rowTemplateElement = parser.parseFromString(ROW_TEMPLATE, 'text/html').head.firstElementChild;
const columnTemplateElement = parser.parseFromString(COLUMN_TEMPLATE, 'text/html').head.firstElementChild;


function createGrid(nfts, rowColumns) {
  const containerElement = document.createElement('div');
  containerElement.classList.add('container', 'text-center');

  const uniqueNameList = Array.from(new Set(nfts.map(e => e.name)));
  const rowDocumentFragments = uniqueNameList.map(name => {
    const nftsFilteredByName = nfts.filter(e => e.name === name);
    return createRow(name, nftsFilteredByName, rowColumns);
  });
  containerElement.append(...rowDocumentFragments);

  return containerElement;
}


function createRow(title, nfts, rowColumns = 5) {
  const rowDocumentFragment = rowTemplateElement.content.cloneNode(true);
  const h2 = rowDocumentFragment.querySelector('h2');
  h2.textContent = title;
  const div = rowDocumentFragment.querySelector('div');
  div.classList.add(`row-cols-${rowColumns}`);
  const columnDocumentFragments = nfts.map(createColumn);
  div.append(...columnDocumentFragments);

  return rowDocumentFragment;
}


function createColumn(nft) {
  const columnDocumentFragment = columnTemplateElement.content.cloneNode(true);
  const img = columnDocumentFragment.querySelector('img');
  img.src = nft.image;
  const small = columnDocumentFragment.querySelector('small');
  small.textContent = nft.nftName;
  
  return columnDocumentFragment;
}


export default { ROW_TEMPLATE, COLUMN_TEMPLATE, createGrid, createRow, createColumn };
