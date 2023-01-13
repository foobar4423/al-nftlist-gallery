import NFTListDataTableParser from './modules/nftlistDataTableParser.js';
import NFTListGrid from './modules/nftlistGrid.js';

const dataTable = $('#nftlist').DataTable();
const nftlistWrapper = document.getElementById('nftlist_wrapper');
const resourceFilterButtons = document.querySelectorAll('[id^="nftListFilterResource"]');
const amountFilterButtons = document.querySelectorAll('[id^="nftListFilterAmount"]');
const gridContainer = document.getElementById('grid');
const gridButton = document.getElementById('gridButton');

// parse dataTable and convert to JavaScript object array
const nfts = NFTListDataTableParser.parseDataTable(dataTable);

// get nft not include 'Upgrade'
// Negative lookahead assertion (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
const baseCardNfts = nfts.filter(e => /^(?!.*Upgrade)/.test(e.nftName));

// create grid HTML element
const gridContent = NFTListGrid.createGrid(baseCardNfts);

// set to grid container element
gridContainer.classList.add('d-none');
gridContainer.append(gridContent);

gridButton.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    // hide dataTable
    nftlistWrapper.classList.add('d-none');
    // invalidate filter
    resourceFilterButtons.forEach(e => e.setAttribute('disabled'));
    amountFilterButtons.forEach(e => e.setAttribute('disabled'));
    // show grid
    gridContainer.classList.remove('d-none');
  }
  else {
    // show dataTable
    nftlistWrapper.classList.remove('d-none');
    // validate filter
    resourceFilterButtons.forEach(e => e.removeAttribute('disabled'));
    amountFilterButtons.forEach(e => e.removeAttribute('disabled'));
    // hide grid
    gridContainer.classList.add('d-none');
  }
});
