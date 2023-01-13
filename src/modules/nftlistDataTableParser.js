// dataTable column index
const COLUMN = {
  'NFT': 0,
  'NAME': 1,
  'RESOURCE': 2,
  'AMOUNT': 3,
  'EXPLORE': 4,
  'UPGRADE': 5
};


// parse dataTable
function parseDataTable(dataTable) {
  const dataTableRows = Array.from(dataTable.rows().data());
  const nfts = dataTableRows.map(row => {
    const parsedNftCell = parseNftCell(row[COLUMN.NFT]);
    const parsedNameCell = parseNameCell(row[COLUMN.NAME]);
    const splitNftName = splitNumber(parsedNameCell.nftName);
  
    return {
      'image': parsedNftCell.nftImg,
      'nftName': parsedNameCell.nftName,
      'name': splitNftName.name,
      'number': splitNftName.number,
      'id': parsedNameCell.nftId,
      'resource': row[COLUMN.RESOURCE].toUpperCase(),
      'amount': parseInt(row[COLUMN.AMOUNT])
    };
  });

  // sort
  nfts.sort((a, b) => a.amount - b.amount);
  nfts.sort((a, b) => a.number - b.number);
  nfts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
  });

  return nfts;
}


// parse HTML from NFT cell string
function parseNftCell(cell) {
  const doc = new DOMParser().parseFromString(cell, 'text/html');
  const imgs = doc.documentElement.getElementsByTagName('img');
  const nftImg = imgs[0].src;

  return {
    'nftImg': nftImg
  };
}


// parse HTML from Name cell string
// HTML string -> {nftName: 'A Basic Oven #1', nftId: 'nft1...'}
function parseNameCell(cell) {
  const doc = new DOMParser().parseFromString(cell, 'text/html');
  const rows = doc.documentElement.getElementsByClassName('row');
  const nftName = rows[0].textContent.trim();
  const nftId = rows[1].textContent.trim();

  return {
    'nftName': nftName,
    'nftId': nftId
  };
}


// split NFT name into name and number
// NFT name = name + number + remaining text
// 'A Basic Oven #1' -> {name: 'A Basic Oven', number: 1}
function splitNumber(nftName) {
  let splitName = {
    'name': '',
    'number': -1
  };
  // split NFT name into name and number
  const regex = /(.+) #(\d+).*/;
  if (regex.test(nftName)) {
    // numbered
    const found = nftName.match(regex);
    splitName.name = found[1];
    splitName.number = parseInt(found[2]);
  }
  else {
    // unnumbered
    // remove 'Upgraded' text
    const regexUpgraded = /(.+) Upgraded.*/;
    if (regexUpgraded.test(nftName)) {
      const found = nftName.match(regexUpgraded);
      splitName.name = found[1];
    }
    else {
      splitName.name = nftName;
    }
  }

  return splitName;
}


export default { COLUMN, parseDataTable, parseNftCell, parseNameCell, splitNumber };
