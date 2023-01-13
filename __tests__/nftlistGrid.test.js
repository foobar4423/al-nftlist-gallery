let NFTListGrid;

beforeAll(async () => {
  const module = await import('../src/modules/nftlistGrid.js');
  NFTListGrid = module.default;
});

describe('createGrid()', () => {
  test('#1', () => {
    const nfts = [
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
      },
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
    ];

    expect(NFTListGrid.createGrid(nfts)).
toMatchInlineSnapshot(`
<div
  class="container text-center"
>
  
  
  <h2>
    A Basic Oven
  </h2>
  
  
  <div
    class="row row-cols-5"
  >
    
  
    <div
      class="col"
    >
      
    
      <div
        class="card border-0"
      >
        
      
        <img
          class="card-img-top"
          src="https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp"
        />
        
      
        <small>
          A Basic Oven #1
        </small>
        
    
      </div>
      
  
    </div>
    

    
  
    <div
      class="col"
    >
      
    
      <div
        class="card border-0"
      >
        
      
        <img
          class="card-img-top"
          src="https://assets.mainnet.mintgarden.io/thumbnails/024831bde6ea48bff76a5a10d94b8c5acd3f10d104df7b453d98cc489e80c708_512.webp"
        />
        
      
        <small>
          A Basic Oven #2
        </small>
        
    
      </div>
      
  
    </div>
    

  </div>
  
  
  <hr />
  

  
  
  <h2>
    Aeros Monk
  </h2>
  
  
  <div
    class="row row-cols-5"
  >
    
  
    <div
      class="col"
    >
      
    
      <div
        class="card border-0"
      >
        
      
        <img
          class="card-img-top"
          src="https://assets.mainnet.mintgarden.io/thumbnails/61726e6031d3226470706c72880a468854a8d295fa0d05f287de2c7cebeaf97a_512.webp"
        />
        
      
        <small>
          Aeros Monk #1
        </small>
        
    
      </div>
      
  
    </div>
    

    
  
    <div
      class="col"
    >
      
    
      <div
        class="card border-0"
      >
        
      
        <img
          class="card-img-top"
          src="https://assets.mainnet.mintgarden.io/thumbnails/4752c4a63211dfd310ee9c2557cbf9244086f280797c88a558f531aa31abc412_512.webp"
        />
        
      
        <small>
          Aeros Monk #1 Upgraded (20)
        </small>
        
    
      </div>
      
  
    </div>
    

  </div>
  
  
  <hr />
  

</div>
`);
  });
});

describe('createRow()', () => {
  test('#1', () => {
    const nfts = [
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
    ];

    expect(NFTListGrid.createRow('A Basic Oven', nfts)).
toMatchInlineSnapshot(`
<DocumentFragment>
  
  
  <h2>
    A Basic Oven
  </h2>
  
  
  <div
    class="row row-cols-5"
  >
    
  
    <div
      class="col"
    >
      
    
      <div
        class="card border-0"
      >
        
      
        <img
          class="card-img-top"
          src="https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp"
        />
        
      
        <small>
          A Basic Oven #1
        </small>
        
    
      </div>
      
  
    </div>
    

    
  
    <div
      class="col"
    >
      
    
      <div
        class="card border-0"
      >
        
      
        <img
          class="card-img-top"
          src="https://assets.mainnet.mintgarden.io/thumbnails/024831bde6ea48bff76a5a10d94b8c5acd3f10d104df7b453d98cc489e80c708_512.webp"
        />
        
      
        <small>
          A Basic Oven #2
        </small>
        
    
      </div>
      
  
    </div>
    

  </div>
  
  
  <hr />
  

</DocumentFragment>
`);
  });
});

describe('createColumn()', () => {
  test('#1', () => {
    const nft = {
      'image': 'https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp',
      'nftName': 'A Basic Oven #1',
      'name': 'A Basic Oven',
      'number': 1,
      'id': 'nft1e6ea23xyyw5y7jzacph090crrhyeswcc8gvy9nwmy54xyjgkr4vsn2hjxa',
      'resource': 'ALFOOD',
      'amount': 5
    };

    expect(NFTListGrid.createColumn(nft)).
toMatchInlineSnapshot(`
<DocumentFragment>
  
  
  <div
    class="col"
  >
    
    
    <div
      class="card border-0"
    >
      
      
      <img
        class="card-img-top"
        src="https://assets.mainnet.mintgarden.io/thumbnails/7c27aa802f27d138b5ee11627d4a0c7220fc7243d8682c8cbc72f076a9ab1b2b_512.webp"
      />
      
      
      <small>
        A Basic Oven #1
      </small>
      
    
    </div>
    
  
  </div>
  

</DocumentFragment>
`);
  });
});
