var bestTerms = {
  getBestTerm: function() {
    var randomIndex = Math.floor( Math.random() * this.terms.length );

    return this.terms[ randomIndex ];
  },

  terms: [
    'tiny tim rauscheder',
    'russian aerobics',
    'buns of steel',
    'video art 1970',
    'wgbh logo',
    'drive',
    'vapor wave',
    'asmr',
    'blue velvet',
    'unboxing',
    'science wars',
    'clint eastwood',
    'snoop',
    'rhnb',
    'vuvuzelas'
  ]

}

module.exports = bestTerms;
