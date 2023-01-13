let NFTListDataTableParser;

beforeAll(async () => {
  const module = await import('../src/modules/nftlistDataTableParser.js');
  NFTListDataTableParser = module.default;
});

describe('parseDataTable()', () => {
  test('#1', () => {
    const dataTable = {};
    dataTable.rows = () => {
      return {
        data: () => {
          return [
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    A Basic Oven #1\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa</small>\n                                </div>",
              "ALFood",
              "5",
              "<a href=\"https://www.spacescan.io/xch/nft/nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ],
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/5c6d1280a0d5fb631a8fa9c7625b61640c5bca22e0adb521ce036c69d3f161cc_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    Yosef Petrenko #9\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5</small>\n                                </div>",
              "ALWork",
              "10",
              "<a href=\"https://www.spacescan.io/xch/nft/nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ]
          ];
        }
      };
    };

    expect(NFTListDataTableParser.parseDataTable(dataTable))
    .toEqual([
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp',
        'nftName': 'A Basic Oven #1',
        'name': 'A Basic Oven',
        'number': 1,
        'id': 'nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa',
        'resource': 'ALFOOD',
        'amount': 5
      },
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/5c6d1280a0d5fb631a8fa9c7625b61640c5bca22e0adb521ce036c69d3f161cc_512.webp',
        'nftName': 'Yosef Petrenko #9',
        'name': 'Yosef Petrenko',
        'number': 9,
        'id': 'nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5',
        'resource': 'ALWORK',
        'amount': 10
      }
    ]);
  });
  
  test('#2 sort: amount', () => {
    const dataTable = {};
    dataTable.rows = () => {
      return {
        data: () => {
          return [
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/4752c4a63211dfd310ee9c2557cbf9244086f280797c88a558f531aa31abc412_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    Aeros Monk #1 Upgraded (20)\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft1s34jumvlshdm375fgrze26p757z0c0cdvqs3zwytlmmvly8ku8cqr65sn9</small>\n                                </div>",
              "ALWork",
              "20",
              "<a href=\"https://www.spacescan.io/xch/nft/nft1s34jumvlshdm375fgrze26p757z0c0cdvqs3zwytlmmvly8ku8cqr65sn9\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft1s34jumvlshdm375fgrze26p757z0c0cdvqs3zwytlmmvly8ku8cqr65sn9\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft1s34jumvlshdm375fgrze26p757z0c0cdvqs3zwytlmmvly8ku8cqr65sn9\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ],
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/61726e6031d3226470706c72880a468854a8d295fa0d05f287de2c7cebeaf97a_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    Aeros Monk #1\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft18puu2w8awmkchgms7vqf9s5pfrfr7r4jr2engt08ypdn79g33ljsyg3ktp</small>\n                                </div>",
              "ALWork",
              "5",
              "<a href=\"https://www.spacescan.io/xch/nft/nft18puu2w8awmkchgms7vqf9s5pfrfr7r4jr2engt08ypdn79g33ljsyg3ktp\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft18puu2w8awmkchgms7vqf9s5pfrfr7r4jr2engt08ypdn79g33ljsyg3ktp\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft18puu2w8awmkchgms7vqf9s5pfrfr7r4jr2engt08ypdn79g33ljsyg3ktp\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ]
          ];
        }
      };
    };

    expect(NFTListDataTableParser.parseDataTable(dataTable))
    .toEqual([
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/61726e6031d3226470706c72880a468854a8d295fa0d05f287de2c7cebeaf97a_512.webp',
        'nftName': 'Aeros Monk #1',
        'name': 'Aeros Monk',
        'number': 1,
        'id': 'nft18puu2w8awmkchgms7vqf9s5pfrfr7r4jr2engt08ypdn79g33ljsyg3ktp',
        'resource': 'ALWORK',
        'amount': 5
      },
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/4752c4a63211dfd310ee9c2557cbf9244086f280797c88a558f531aa31abc412_512.webp',
        'nftName': 'Aeros Monk #1 Upgraded (20)',
        'name': 'Aeros Monk',
        'number': 1,
        'id': 'nft1s34jumvlshdm375fgrze26p757z0c0cdvqs3zwytlmmvly8ku8cqr65sn9',
        'resource': 'ALWORK',
        'amount': 20
      }
    ]);
  });

  test('#3 sort: number', () => {
    const dataTable = {};
    dataTable.rows = () => {
      return {
        data: () => {
          return [
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/024831bde6ea48bff76a5a10d94b8c5acd3f10d104df7b453d98cc489e80c708_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    A Basic Oven #2\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft13tsep2zjq46484fmlc0p5fn7qslhwr4kd0tzmrfwzwfkhxt267wse6y9le</small>\n                                </div>",
              "ALFood",
              "5",
              "<a href=\"https://www.spacescan.io/xch/nft/nft13tsep2zjq46484fmlc0p5fn7qslhwr4kd0tzmrfwzwfkhxt267wse6y9le\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft13tsep2zjq46484fmlc0p5fn7qslhwr4kd0tzmrfwzwfkhxt267wse6y9le\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft13tsep2zjq46484fmlc0p5fn7qslhwr4kd0tzmrfwzwfkhxt267wse6y9le\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ],
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    A Basic Oven #1\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa</small>\n                                </div>",
              "ALFood",
              "5",
              "<a href=\"https://www.spacescan.io/xch/nft/nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ]
          ];
        }
      };
    };

    expect(NFTListDataTableParser.parseDataTable(dataTable))
    .toEqual([
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp',
        'nftName': 'A Basic Oven #1',
        'name': 'A Basic Oven',
        'number': 1,
        'id': 'nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa',
        'resource': 'ALFOOD',
        'amount': 5
      },
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/024831bde6ea48bff76a5a10d94b8c5acd3f10d104df7b453d98cc489e80c708_512.webp',
        'nftName': 'A Basic Oven #2',
        'name': 'A Basic Oven',
        'number': 2,
        'id': 'nft13tsep2zjq46484fmlc0p5fn7qslhwr4kd0tzmrfwzwfkhxt267wse6y9le',
        'resource': 'ALFOOD',
        'amount': 5
      }
    ]);
  });

  test('#4 sort: name', () => {
    const dataTable = {};
    dataTable.rows = () => {
      return {
        data: () => {
          return [
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/5c6d1280a0d5fb631a8fa9c7625b61640c5bca22e0adb521ce036c69d3f161cc_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    Yosef Petrenko #9\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5</small>\n                                </div>",
              "ALWork",
              "10",
              "<a href=\"https://www.spacescan.io/xch/nft/nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ],
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/93c555864e8b47907babb63923d29995dd86dc8ecd15f160de832a005138bdf4_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    An Armed Lion #1\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft1c3sxjaprgvasy4mclvmn6wagueera5k96fhxgpxsy6kc89wksctsej2e2u</small>\n                                </div>",
              "ALFood",
              "5",
              "<a href=\"https://www.spacescan.io/xch/nft/nft1c3sxjaprgvasy4mclvmn6wagueera5k96fhxgpxsy6kc89wksctsej2e2u\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft1c3sxjaprgvasy4mclvmn6wagueera5k96fhxgpxsy6kc89wksctsej2e2u\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft1c3sxjaprgvasy4mclvmn6wagueera5k96fhxgpxsy6kc89wksctsej2e2u\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ],
            [
              "<img src=\"https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp\" width=\"60px\" alt=\"\">",
              "<div class=\"row\">\n                                    A Basic Oven #1\n                                </div>\n                                <div class=\"row\">\n                                    <small>nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa</small>\n                                </div>",
              "ALFood",
              "5",
              "<a href=\"https://www.spacescan.io/xch/nft/nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" target=\"_blank\"> <img src=\"/img/spacescan-logo-192.png\" width=\"30px\"></a> /\n                                <a href=\"https://mintgarden.io/nfts/nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" target=\"_blank\"> <img src=\"/img/mintgarden-logo.svg\" width=\"100px\"> </a>",
              "<a href=\"/upgrade?nft_id=nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa\" class=\"btn btn-primary btn-xs\">Check upgrade</a>"
            ]
          ];
        }
      };
    };

    expect(NFTListDataTableParser.parseDataTable(dataTable))
    .toEqual([
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp',
        'nftName': 'A Basic Oven #1',
        'name': 'A Basic Oven',
        'number': 1,
        'id': 'nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa',
        'resource': 'ALFOOD',
        'amount': 5
      },
      {
        "image": "https://assets.mainnet.mintgarden.io/thumbnails/93c555864e8b47907babb63923d29995dd86dc8ecd15f160de832a005138bdf4_512.webp",
        "nftName": "An Armed Lion #1",
        "name": "An Armed Lion",
        "number": 1,
        "id": "nft1c3sxjaprgvasy4mclvmn6wagueera5k96fhxgpxsy6kc89wksctsej2e2u",
        "resource": "ALFOOD",
        "amount": 5
      },
      {
        'image': 'https://assets.mainnet.mintgarden.io/thumbnails/5c6d1280a0d5fb631a8fa9c7625b61640c5bca22e0adb521ce036c69d3f161cc_512.webp',
        'nftName': 'Yosef Petrenko #9',
        'name': 'Yosef Petrenko',
        'number': 9,
        'id': 'nft1wdahzvegzkp7843gucrfcz7ld634qsw8uztl9jkztrv9ltr7zlsq7r2xu5',
        'resource': 'ALWORK',
        'amount': 10
      }
    ]);
  });
});

describe('parseNftCell()', () => {
  test('#1', () => {
    const cell = /*html*/`<img src="https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp" width="60px" alt="">`;
    
    expect(NFTListDataTableParser.parseNftCell(cell))
    .toEqual({nftImg: 'https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp'});
  });
});

describe('parseNameCell()', () => {
  test('#1', () => {
    const cell = /*html*/`<td class="sorting_1">
    <div class="row">
        A Basic Oven #1
    </div>
    <div class="row">
        <small>nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa</small>
    </div>
  </td>`;
    
    expect(NFTListDataTableParser.parseNameCell(cell))
    .toEqual({nftName: 'A Basic Oven #1', nftId: 'nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa'});
  });

  test('#2', () => {
    const cell = /*html*/`<td class="sorting_1">
    <div class="row">A Basic Oven #1</div>
    <div class="row"><small>
        nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa
        </small></div></td>`;
    
    expect(NFTListDataTableParser.parseNameCell(cell))
    .toEqual({nftName: 'A Basic Oven #1', nftId: 'nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa'});
  });
});

describe('splitNumber()', () => {
  test('#1', () => {
    const nftName = 'A Basic Oven #1';

    expect(NFTListDataTableParser.splitNumber(nftName))
    .toEqual({name: 'A Basic Oven', number: 1});
  });

  test('#2', () => {
    const nftName = 'Automated Farm Bot #10-10';

    expect(NFTListDataTableParser.splitNumber(nftName))
    .toEqual({name: 'Automated Farm Bot', number: 10});
  });

  test('#3', () => {
    const nftName = 'Forest Plot #10 - Upgraded (15)';

    expect(NFTListDataTableParser.splitNumber(nftName))
    .toEqual({name: 'Forest Plot', number: 10});
  });

  test('#4', () => {
    const nftName = 'Repaired Robot Upgraded (25)';

    expect(NFTListDataTableParser.splitNumber(nftName))
    .toEqual({name: 'Repaired Robot', number: -1});
  });

  test('#5', () => {
    const nftName = 'Foobar';

    expect(NFTListDataTableParser.splitNumber(nftName))
    .toEqual({name: 'Foobar', number: -1});
  });
});
