const values = [
    {
        "id": "30150001",
        "name": "Lancôme La vie est belle Eau de Parfum",
        "slug": "parfum/lancome/la-vie-est-belle/lancome-la-vie-est-belle-eau-de-parfum.html",
        "brand": "Lancôme",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/l/a/lancome-la-vie-est-belle-eau-de-parfum-30-ml.jpg",
        "price": 3895,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "30103318",
        "name": "Jean Paul Gaultier Le Male Eau de Toilette",
        "slug": "parfum/jean-paul-gaultier/le-male/jean-paul-gaultier-le-male-eau-de-toilette.html",
        "brand": "Jean Paul Gaultier",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-le-male-eau-de-toilette-125-ml-3423470317534.jpg",
        "price": 3395,
        "size": "40ML",
        "rating": 99
    },
  
    {
        "id": "80020578-C",
        "name": "Jean Paul Gaultier Scandal Eau de Parfum",
        "slug": "parfum/jean-paul-gaultier/scandal/jean-paul-gaultier-scandal-eau-de-parfum.html",
        "brand": "Jean Paul Gaultier",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/j/e/jean-paul-gaultier-scandal-eau-de-parfum-80-ml-8435415006408.jpg",
        "price": 3895,
        "size": "30ML",
        "rating": 96
    },
  
    {
        "id": "30103519",
        "name": "Paco Rabanne 1 Million Eau de Toilette",
        "slug": "parfum/paco-rabanne/1-million/paco-rabanne-1-million-eau-de-toilette.html",
        "brand": "Paco Rabanne",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-one-million-eau-de-toilette-100-ml-3349666007921.jpg",
        "price": 4295,
        "size": "50ML",
        "rating": 99
    },
  
    {
        "id": "30102718",
        "name": "Hugo Boss Boss Bottled Eau de Toilette",
        "slug": "parfum/hugo-boss/boss-bottled/hugo-boss-boss-bottled-eau-de-toilette.html",
        "brand": "Hugo Boss",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/h/u/hugo-boss-boss-bottled-eau-de-toilette-50-ml-737052351018.jpg",
        "price": 3795,
        "size": "50ML",
        "rating": 99
    },
  
    {
        "id": "30170189",
        "name": "Paco Rabanne Invictus Eau de Toilette",
        "slug": "parfum/paco-rabanne/invictus/paco-rabanne-invictus-eau-de-toilette.html",
        "brand": "Paco Rabanne",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-invictus-eau-de-toilette-100-ml-3349668515660.jpg",
        "price": 4395,
        "size": "50ML",
        "rating": 99
    },
    {
        "id": "30150229",
        "name": "Giorgio Armani Sì Eau de Parfum",
        "slug": "parfum/giorgio-armani/si/giorgio-armani-si-eau-de-parfum.html",
        "brand": "Giorgio Armani",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/g/i/giorgio-armani-si-eau-de-parfum-50ml_7.jpg",
        "price": 4395,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "80008047-C",
        "name": "Paco Rabanne Olympéa Eau de Parfum",
        "slug": "parfum/paco-rabanne/olympea/paco-rabanne-olympea-eau-de-parfum.html",
        "brand": "Paco Rabanne",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-olympea-eau-de-parfum-50-ml-3349668528660.jpg",
        "price": 3780,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "80005078-C",
        "name": "Yves Saint Laurent Black Opium Eau de Parfum",
        "slug": "parfum/yves-saint-laurent/black-opium/yves-saint-laurent-black-opium-eau-de-parfum.html",
        "brand": "Yves Saint Laurent",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/y/v/yves-saint-laurent-black-opium-eau-de-parfum.jpg",
        "price": 4895,
        "size": "30ML",
        "rating": 98
    },
  
    {
        "id": "30103514",
        "name": "Paco Rabanne Lady Million Eau de Parfum",
        "slug": "parfum/paco-rabanne/lady-million/paco-rabanne-lady-million-eau-de-parfum.html",
        "brand": "Paco Rabanne",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-lady-million-eau-de-parfum-80-ml-3349668508587.jpg",
        "price": 3695,
        "size": "30ML",
        "rating": 98
    },
  
    {
        "id": "30102969",
        "name": "Chloé Chloé Eau de Parfum",
        "slug": "parfum/chloe/chloe/chloe-chloe-eau-de-parfum.html",
        "brand": "Chloé",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/c/h/chloe-chloe-eau-de-parfum-75-ml-3607346232385.jpg",
        "price": 3695,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "80008240-C",
        "name": "Dior Sauvage Eau de Toilette",
        "slug": "parfum/dior/sauvage/dior-sauvage-eau-de-toilette.html",
        "brand": "Dior",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/d/i/dior-sauvage-eau-de-toilette-100-ml.jpg",
        "price": 5995,
        "size": "60ML",
        "rating": 97
    },
  
    {
        "id": "80017562-C",
        "name": "Guerlain Mon Guerlain Eau de Parfum",
        "slug": "parfum/guerlain/mon-guerlain/guerlain-mon-guerlain-eau-de-parfum.html",
        "brand": "Guerlain",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/g/u/guerlain-mon-guerlain-eau-de-parfum-50-ml-3346470131392.jpg",
        "price": 5195,
        "size": "30ML",
        "rating": 98
    },
  
    {
        "id": "80011133-C",
        "name": "Paco Rabanne 1 Million Privé Eau de Parfum",
        "slug": "parfum/paco-rabanne/1-million/paco-rabanne-1-million-prive-eau-de-parfum.html",
        "brand": "Paco Rabanne",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/p/a/paco-rabanne-1-million-prive-eau-de-parfum-50-ml-3349668535484.jpg",
        "price": 4695,
        "size": "50ML",
        "rating": 98
    },
  
    {
        "id": "30103187",
        "name": "Giorgio Armani Code Homme Eau de Toilette",
        "slug": "parfum/giorgio-armani/code-homme/giorgio-armani-code-homme-eau-de-toilette.html",
        "brand": "Giorgio Armani",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/g/i/giorgio-armani-code-homme-eau-de-toilette-125-ml.jpg",
        "price": 3795,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "30103179",
        "name": "Giorgio Armani Code Femme Eau de Parfum",
        "slug": "parfum/giorgio-armani/code-femme/giorgio-armani-code-femme-eau-de-parfum.html",
        "brand": "Giorgio Armani",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/g/i/giorgio-armani-code-femme-eau-de-parfum-50-ml.jpg",
        "price": 3995,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "80010560-C",
        "name": "Narciso Rodriguez NARCISO Poudrée Eau de Parfum",
        "slug": "parfum/narciso-rodriguez/narciso/narciso-rodriguez-narciso-poudree-eau-de-parfum.html",
        "brand": "Narciso Rodriguez",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/n/a/narciso-rodriguez-poudree-eau-de-parfum-50-ml.jpg",
        "price": 3995,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "80011021-C",
        "name": "Hugo Boss Boss The Scent for her Eau de Parfum",
        "slug": "parfum/hugo-boss/boss-the-scent/hugo-boss-boss-the-scent-for-her-eau-de-parfum.html",
        "brand": "Hugo Boss",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/h/u/hugo-boss-boss-the-scent-for-her-eau-de-parfum-100-ml-730870196885.jpg",
        "price": 4295,
        "size": "30ML",
        "rating": 96
    },
  
    {
        "id": "80008224-C",
        "name": "Hugo Boss Boss The Scent Eau de Toilette",
        "slug": "parfum/hugo-boss/boss-the-scent/hugo-boss-boss-the-scent-eau-de-toilette.html",
        "brand": "Hugo Boss",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/h/u/hugo-boss-boss-the-scent-eau-de-toilette.jpg",
        "price": 4495,
        "size": "50ML",
        "rating": 98
    },
  
    {
        "id": "30103175",
        "name": "Giorgio Armani Acqua di Giò Homme Eau de Toilette",
        "slug": "parfum/giorgio-armani/acqua-di-gio-homme/giorgio-armani-acqua-di-gio-homme-eau-de-toilette.html",
        "brand": "Giorgio Armani",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/g/i/giorgio-armani-acqua-di-gio-homme-eau-de-toilette-200-ml-3360372078500.jpg",
        "price": 4195,
        "size": "30ML",
        "rating": 98
    },
  
    {
        "id": "80009841-C",
        "name": "Giorgio Armani Code Homme Profumo Parfum",
        "slug": "parfum/giorgio-armani/code-homme/giorgio-armani-code-homme-profumo-parfum.html",
        "brand": "Giorgio Armani",
        "type": "Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/g/i/giorgio-armani-code-homme-profumo-parfum-30-ml-3614270581649.jpg",
        "price": 4695,
        "size": "30ML",
        "rating": 96
    },
  
    {
        "id": "80022496-C",
        "name": "Issey Miyake L'Eau Majeure D'Issey Eau de Toilette",
        "slug": "parfum/issey-miyake/l-eau-majeure-d-issey/issey-miyake-l-eau-majeure-d-issey-eau-de-toilette.html",
        "brand": "Issey Miyake",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/i/s/issey-miyake-l-eau-majeure-d-issey-eau-de-toilette-100-ml-3423474889556.jpg",
        "price": 4595,
        "size": "50ML",
        "rating": 100
    },
  
    {
        "id": "30103103",
        "name": "Dolce & Gabbana Light Blue Eau de Toilette",
        "slug": "parfum/dolce-gabbana/light-blue/dolce-gabbana-light-blue-eau-de-toilette.html",
        "brand": "Dolce & Gabbana",
        "type": "Eau de Toilette",
        "image": "https://cdn.flaconi.de/media/catalog/215x/d/o/dolce-and-gabbana-light-blue-eau-de-toilette-50ml_9.jpg",
        "price": 2895,
        "size": "25ML",
        "rating": 98
    },
  
    {
        "id": "30103448",
        "name": "Lancôme Trésor Eau de Parfum",
        "slug": "parfum/lancome/tresor/lancome-tresor-eau-de-parfum.html",
        "brand": "Lancôme",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/l/a/lancome-tresor-eau-de-parfum-100ml_8.jpg",
        "price": 2695,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "30103121",
        "name": "Dolce & Gabbana The One Eau de Parfum",
        "slug": "parfum/dolce-gabbana/the-one/dolce-gabbana-the-one-eau-de-parfum.html",
        "brand": "Dolce & Gabbana",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/d/o/dolce-gabbana-the-one-eau-de-parfum-75ml_1.jpg",
        "price": 4495,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "30103420",
        "name": "Lacoste Pour Femme Eau de Parfum",
        "slug": "parfum/lacoste/pour-femme/lacoste-pour-femme-eau-de-parfum.html",
        "brand": "Lacoste",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/l/a/lacoste-pour-femme-eau-de-parfum.jpg",
        "price": 2999,
        "size": "30ML",
        "rating": 99
    },
  
    {
        "id": "30103041",
        "name": "Dior Homme Intense Eau de Parfum",
        "slug": "parfum/dior/homme/dior-homme-intense-eau-de-parfum.html",
        "brand": "Dior",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/d/i/dior-homme-eau-de-parfum-100ml_1.jpg",
        "price": 5795,
        "size": "50ML",
        "rating": 99
    },
  
    {
        "id": "30103616",
        "name": "Viktor & Rolf Flowerbomb Eau de Parfum",
        "slug": "parfum/viktor-and-rolf/flowerbomb/viktor-and-rolf-flowerbomb-eau-de-parfum.html",
        "brand": "Viktor & Rolf",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/v/i/viktor-and-rolf-flowerbomb-eau-de-parfum-100-ml.jpg",
        "price": 5095,
        "size": "30ML",
        "rating": 97
    },
  
    {
        "id": "80004365-C",
        "name": "Hugo Boss Boss Ma Vie pour Femme Eau de Parfum",
        "slug": "parfum/hugo-boss/boss-ma-vie-pour-femme/hugo-boss-boss-ma-vie-pour-femme-eau-de-parfum.html",
        "brand": "Hugo Boss",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/h/u/hugo-boss-boss-ma-vie-pour-femme-eau-de-parfum-75-ml-737052802800.jpg",
        "price": 3495,
        "size": "30ML",
        "rating": 98
    },
  
    {
        "id": "30103149",
        "name": "Emporio Armani Emporio She Eau de Parfum",
        "slug": "parfum/emporio-armani/emporio-she/emporio-armani-emporio-she-eau-de-parfum.html",
        "brand": "Emporio Armani",
        "type": "Eau de Parfum",
        "image": "https://cdn.flaconi.de/media/catalog/215x/e/m/emporio-armani-emporio-she-eau-de-parfum-50ml_7.jpg",
        "price": 2795,
        "size": "30ML",
        "rating": 99
    }
  ];

 export const getData = (from,to) => {

     return new Promise( (resolve,reject) =>{
        resolve(values.slice(from,to));
        reject('an error occurred');
     })
 }
  
  