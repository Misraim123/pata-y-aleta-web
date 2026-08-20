console.log("CORAL DATA CARGADO");

const CORALS = [

/* =========================================================
   EUPHYLLIA / LPS
   ========================================================= */

{
    id:"torch",
    name:"Coral Torch",
    aliases:[
        "torch",
        "antorcha",
        "coral antorcha",
        "euphyllia torch"
    ],
    scientific:"Euphyllia glabrescens",
    type:"LPS",
    difficulty:"Media",
    category:"Euphyllia",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/torch.jpg"
},

{
    id:"hammer",
    name:"Coral Hammer",
    aliases:[
        "hammer",
        "martillo",
        "coral martillo",
        "euphyllia hammer"
    ],
    scientific:"Fimbriaphyllia ancora",
    type:"LPS",
    difficulty:"Media",
    category:"Euphyllia",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/hammer.jpg"
},

{
    id:"frogspawn",
    name:"Frogspawn",
    aliases:[
        "frogspawn",
        "huevas de rana",
        "coral frogspawn",
        "euphyllia frogspawn"
    ],
    scientific:"Fimbriaphyllia divisa",
    type:"LPS",
    difficulty:"Media",
    category:"Euphyllia",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/frogspawn.jpg"
},

/* =========================================================
   ZOANTHUS / PALYTHOA
   ========================================================= */

{
    id:"zoanthus",
    name:"Zoanthus",
    aliases:[
        "zoas",
        "zoanthids",
        "zoantidos",
        "zoántidos",
        "button polyps"
    ],
    scientific:"Zoanthus spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Zoanthus",
    premium:false,
    price:"Desde $650",
    image:"images/corals/zoanthus.jpg"
},

{
    id:"palythoa",
    name:"Palythoa",
    aliases:[
        "paly",
        "palys",
        "palythoa",
        "button polyps"
    ],
    scientific:"Palythoa spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Zoanthus",
    premium:false,
    price:"Desde $650",
    image:"images/corals/palythoa.jpg"
},

/* =========================================================
   MUSHROOMS
   ========================================================= */

{
    id:"mushroom",
    name:"Coral Mushroom",
    aliases:[
        "mushroom",
        "hongo",
        "coral hongo",
        "discosoma"
    ],
    scientific:"Discosoma spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Mushroom",
    premium:false,
    price:"Desde $750",
    image:"images/corals/mushroom.jpg"
},

{
    id:"ricordea",
    name:"Ricordea",
    aliases:[
        "ricordea",
        "ricordea florida",
        "mushroom ricordea",
        "coral hongo"
    ],
    scientific:"Ricordea florida",
    type:"Blando",
    difficulty:"Fácil",
    category:"Mushroom",
    premium:true,
    price:"Desde $950",
    image:"images/corals/ricordea.jpg"
},

{
    id:"rhodactis",
    name:"Rhodactis",
    aliases:[
        "rhodactis",
        "hairy mushroom",
        "mushroom coral"
    ],
    scientific:"Rhodactis spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Mushroom",
    premium:false,
    price:"Desde $850",
    image:"images/corals/rhodactis.jpg"
},

/* =========================================================
   ACROPORA / SPS
   ========================================================= */

{
    id:"acropora",
    name:"Acropora",
    aliases:[
        "acropora",
        "acro",
        "coral sps"
    ],
    scientific:"Acropora spp.",
    type:"SPS",
    difficulty:"Difícil",
    category:"SPS",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/acropora.jpg"
},

{
    id:"acropora-millepora",
    name:"Acropora Millepora",
    aliases:[
        "millepora",
        "acro millepora",
        "acropora millepora",
        "sps"
    ],
    scientific:"Acropora millepora",
    type:"SPS",
    difficulty:"Difícil",
    category:"Acropora",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/acropora-millepora.jpg"
},

{
    id:"acropora-tenuis",
    name:"Acropora Tenuis",
    aliases:[
        "tenuis",
        "acro tenuis",
        "acropora tenuis",
        "sps"
    ],
    scientific:"Acropora tenuis",
    type:"SPS",
    difficulty:"Difícil",
    category:"Acropora",
    premium:true,
    price:"Desde $2,000",
    image:"images/corals/acropora-tenuis.jpg"
},

/* =========================================================
   MONTIPORA / SPS
   ========================================================= */

{
    id:"montipora",
    name:"Montipora",
    aliases:[
        "montipora",
        "monti",
        "coral plato"
    ],
    scientific:"Montipora spp.",
    type:"SPS",
    difficulty:"Media",
    category:"SPS",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/montipora.jpg"
},

{
    id:"montipora-capricornis",
    name:"Montipora Capricornis",
    aliases:[
        "monti cap",
        "montipora capricornis",
        "coral plato",
        "plating montipora"
    ],
    scientific:"Montipora capricornis",
    type:"SPS",
    difficulty:"Media",
    category:"Montipora",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/montipora-capricornis.jpg"
},

{
    id:"montipora-digitata",
    name:"Montipora Digitata",
    aliases:[
        "monti digitata",
        "digitata",
        "montipora digitata"
    ],
    scientific:"Montipora digitata",
    type:"SPS",
    difficulty:"Media",
    category:"Montipora",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/montipora-digitata.jpg"
},

/* =========================================================
   OTROS SPS
   ========================================================= */

{
    id:"pocillopora",
    name:"Pocillopora",
    aliases:[
        "pocillopora",
        "poci",
        "cauliflower coral",
        "sps"
    ],
    scientific:"Pocillopora spp.",
    type:"SPS",
    difficulty:"Media",
    category:"SPS",
    premium:false,
    price:"Desde $1,100",
    image:"images/corals/pocillopora.jpg"
},

{
    id:"stylophora",
    name:"Stylophora",
    aliases:[
        "stylophora",
        "stylo",
        "cat paw coral",
        "sps"
    ],
    scientific:"Stylophora pistillata",
    type:"SPS",
    difficulty:"Media",
    category:"SPS",
    premium:false,
    price:"Desde $1,100",
    image:"images/corals/stylophora.jpg"
},

{
    id:"seriatopora",
    name:"Birdsnest",
    aliases:[
        "birdsnest",
        "birds nest",
        "nido de pajaro",
        "seriatopora",
        "sps"
    ],
    scientific:"Seriatopora hystrix",
    type:"SPS",
    difficulty:"Media",
    category:"SPS",
    premium:false,
    price:"Desde $1,100",
    image:"images/corals/seriatopora.jpg"
},

/* =========================================================
   GONIOPORA / ALVEOPORA
   ========================================================= */

{
    id:"goniopora",
    name:"Goniopora",
    aliases:[
        "goni",
        "goniopora",
        "flowerpot coral",
        "coral maceta"
    ],
    scientific:"Goniopora spp.",
    type:"LPS",
    difficulty:"Media",
    category:"Goniopora",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/goniopora.jpg"
},

{
    id:"alveopora",
    name:"Alveopora",
    aliases:[
        "alveopora",
        "alveo",
        "flowerpot coral"
    ],
    scientific:"Alveopora spp.",
    type:"LPS",
    difficulty:"Media",
    category:"Goniopora",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/alveopora.jpg"
},

/* =========================================================
   MICROMUSSA / ACAN
   ========================================================= */

{
    id:"micromussa",
    name:"Acan / Micromussa",
    aliases:[
        "acan",
        "acans",
        "micromussa",
        "acan lord",
        "acanthastrea"
    ],
    scientific:"Micromussa lordhowensis",
    type:"LPS",
    difficulty:"Media",
    category:"Micromussa",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/micromussa.jpg"
},

/* =========================================================
   FAVIA / FAVITES
   ========================================================= */

{
    id:"favia",
    name:"Favia",
    aliases:[
        "favia",
        "brain coral",
        "coral cerebro"
    ],
    scientific:"Favia spp.",
    type:"LPS",
    difficulty:"Media",
    category:"Favia",
    premium:false,
    price:"Desde $1,000",
    image:"images/corals/favia.jpg"
},

{
    id:"favites",
    name:"Favites",
    aliases:[
        "favites",
        "brain coral",
        "coral cerebro",
        "moon coral"
    ],
    scientific:"Favites spp.",
    type:"LPS",
    difficulty:"Media",
    category:"Favia",
    premium:false,
    price:"Desde $1,000",
    image:"images/corals/favites.jpg"
},

/* =========================================================
   CHALICE
   ========================================================= */

{
    id:"chalice",
    name:"Chalice Coral",
    aliases:[
        "chalice",
        "coral chalice",
        "echinophyllia"
    ],
    scientific:"Echinophyllia spp.",
    type:"LPS",
    difficulty:"Media",
    category:"Chalice",
    premium:true,
    price:"Desde $1,300",
    image:"images/corals/chalice.jpg"
},

/* =========================================================
   CORALES CEREBRO / SHOWPIECE
   ========================================================= */

{
    id:"lobophyllia",
    name:"Lobophyllia",
    aliases:[
        "lobo",
        "lobophyllia",
        "brain coral",
        "coral cerebro"
    ],
    scientific:"Lobophyllia spp.",
    type:"LPS",
    difficulty:"Media",
    category:"Brain Coral",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/lobophyllia.jpg"
},

{
    id:"trachyphyllia",
    name:"Trachyphyllia",
    aliases:[
        "trachy",
        "trachyphyllia",
        "open brain coral",
        "coral cerebro abierto"
    ],
    scientific:"Trachyphyllia geoffroyi",
    type:"LPS",
    difficulty:"Media",
    category:"Brain Coral",
    premium:true,
    price:"Desde $2,000",
    image:"images/corals/trachyphyllia.jpg"
},

{
    id:"homophyllia",
    name:"Scolymia / Homophyllia",
    aliases:[
        "scoly",
        "scolymia",
        "homophyllia",
        "button coral"
    ],
    scientific:"Homophyllia australis",
    type:"LPS",
    difficulty:"Media",
    category:"Showpiece",
    premium:true,
    price:"Desde $2,500",
    image:"images/corals/homophyllia.jpg"
},

/* =========================================================
   CANDY CANE / DUNCAN
   ========================================================= */

{
    id:"candy-cane",
    name:"Candy Cane Coral",
    aliases:[
        "candy cane",
        "trumpet coral",
        "coral trompeta",
        "caulastrea"
    ],
    scientific:"Caulastrea furcata",
    type:"LPS",
    difficulty:"Fácil",
    category:"LPS",
    premium:false,
    price:"Desde $850",
    image:"images/corals/candy-cane.jpg"
},

{
    id:"duncan",
    name:"Duncan Coral",
    aliases:[
        "duncan",
        "duncan coral",
        "duncanopsammia"
    ],
    scientific:"Duncanopsammia axifuga",
    type:"LPS",
    difficulty:"Fácil",
    category:"LPS",
    premium:false,
    price:"Desde $950",
    image:"images/corals/duncan.jpg"
},

/* =========================================================
   CORALES BLANDOS
   ========================================================= */

{
    id:"green-star-polyps",
    name:"Green Star Polyps",
    aliases:[
        "gsp",
        "green star polyps",
        "star polyps",
        "polipos estrella"
    ],
    scientific:"Pachyclavularia violacea",
    type:"Blando",
    difficulty:"Fácil",
    category:"Soft Coral",
    premium:false,
    price:"Desde $650",
    image:"images/corals/green-star-polyps.jpg"
},

{
    id:"xenia",
    name:"Pulsing Xenia",
    aliases:[
        "xenia",
        "pulsing xenia",
        "xenia pulsante"
    ],
    scientific:"Xenia spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Soft Coral",
    premium:false,
    price:"Desde $650",
    image:"images/corals/xenia.jpg"
},

{
    id:"toadstool",
    name:"Toadstool Leather",
    aliases:[
        "toadstool",
        "leather coral",
        "coral cuero",
        "sarcophyton"
    ],
    scientific:"Sarcophyton spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Leather Coral",
    premium:false,
    price:"Desde $850",
    image:"images/corals/toadstool.jpg"
},

{
    id:"kenya-tree",
    name:"Kenya Tree",
    aliases:[
        "kenya tree",
        "arbol de kenia",
        "capnella",
        "soft coral"
    ],
    scientific:"Capnella spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Soft Coral",
    premium:false,
    price:"Desde $650",
    image:"images/corals/kenya-tree.jpg"
},

/* =========================================================
   ANÉMONAS
   ========================================================= */

{
    id:"bubble-tip-anemone",
    name:"Anémona Bubble Tip",
    aliases:[
        "bubble tip",
        "bubble tip anemone",
        "bta",
        "anemona burbuja",
        "anémona burbuja",
        "entacmaea"
    ],
    scientific:"Entacmaea quadricolor",
    type:"Anémona",
    difficulty:"Media",
    category:"Anémonas",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/bubble-tip-anemone.jpg"
},

{
    id:"rose-bubble-tip",
    name:"Rose Bubble Tip Anemone",
    aliases:[
        "rose bubble tip",
        "rbta",
        "rose bta",
        "anemona rosa",
        "anémona rosa"
    ],
    scientific:"Entacmaea quadricolor",
    type:"Anémona",
    difficulty:"Media",
    category:"Anémonas",
    premium:true,
    price:"Desde $2,000",
    image:"images/corals/rose-bubble-tip.jpg"
},

{
    id:"green-bubble-tip",
    name:"Green Bubble Tip Anemone",
    aliases:[
        "green bubble tip",
        "green bta",
        "anemona verde",
        "anémona verde"
    ],
    scientific:"Entacmaea quadricolor",
    type:"Anémona",
    difficulty:"Media",
    category:"Anémonas",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/green-bubble-tip.jpg"
},

{
    id:"rainbow-bubble-tip",
    name:"Rainbow Bubble Tip Anemone",
    aliases:[
        "rainbow bubble tip",
        "rainbow bta",
        "anemona rainbow",
        "anémona arcoiris"
    ],
    scientific:"Entacmaea quadricolor",
    type:"Anémona",
    difficulty:"Media",
    category:"Anémonas",
    premium:true,
    price:"Desde $2,500",
    image:"images/corals/rainbow-bubble-tip.jpg"
},

{
    id:"long-tentacle-anemone",
    name:"Long Tentacle Anemone",
    aliases:[
        "long tentacle",
        "lta",
        "anemona tentaculo largo",
        "anémona tentáculo largo",
        "macrodactyla"
    ],
    scientific:"Macrodactyla doreensis",
    type:"Anémona",
    difficulty:"Media",
    category:"Anémonas",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/long-tentacle-anemone.jpg"
},

{
    id:"sebae-anemone",
    name:"Sebae Anemone",
    aliases:[
        "sebae",
        "sebae anemone",
        "anemona sebae",
        "anémona sebae"
    ],
    scientific:"Heteractis crispa",
    type:"Anémona",
    difficulty:"Difícil",
    category:"Anémonas",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/sebae-anemone.jpg"
},

{
    id:"magnificent-anemone",
    name:"Magnificent Sea Anemone",
    aliases:[
        "magnificent anemone",
        "ritteri",
        "ritteri anemone",
        "anemona magnifica",
        "anémona magnífica"
    ],
    scientific:"Heteractis magnifica",
    type:"Anémona",
    difficulty:"Difícil",
    category:"Anémonas",
    premium:true,
    price:"Desde $2,500",
    image:"images/corals/magnificent-anemone.jpg"
},

{
    id:"carpet-anemone",
    name:"Carpet Anemone",
    aliases:[
        "carpet anemone",
        "anemona alfombra",
        "anémona alfombra",
        "stichodactyla"
    ],
    scientific:"Stichodactyla spp.",
    type:"Anémona",
    difficulty:"Difícil",
    category:"Anémonas",
    premium:true,
    price:"Desde $2,500",
    image:"images/corals/carpet-anemone.jpg"
},

{
    id:"haddoni-carpet-anemone",
    name:"Haddoni Carpet Anemone",
    aliases:[
        "haddoni",
        "haddoni carpet",
        "saddle carpet",
        "anemona haddoni",
        "anémona haddoni"
    ],
    scientific:"Stichodactyla haddoni",
    type:"Anémona",
    difficulty:"Difícil",
    category:"Anémonas",
    premium:true,
    price:"Desde $3,000",
    image:"images/corals/haddoni-carpet-anemone.jpg"
},

{
    id:"rock-flower-anemone",
    name:"Rock Flower Anemone",
    aliases:[
        "rock flower",
        "rock flower anemone",
        "rfa",
        "anemona flor",
        "anémona flor"
    ],
    scientific:"Phymanthus crucifer",
    type:"Anémona",
    difficulty:"Fácil",
    category:"Anémonas",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/rock-flower-anemone.jpg"
},

{
    id:"mini-maxi-carpet",
    name:"Mini Maxi Carpet Anemone",
    aliases:[
        "mini maxi",
        "mini maxi carpet",
        "mini carpet anemone",
        "anemona mini maxi",
        "anémona mini maxi"
    ],
    scientific:"Stichodactyla tapetum",
    type:"Anémona",
    difficulty:"Media",
    category:"Anémonas",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/mini-maxi-carpet.jpg"
},

/* =========================================================
   CORALES DUROS — SPS / PREMIUM
   ========================================================= */

{
    id:"green-slimer-acropora",
    name:"Green Slimer Acropora",
    aliases:[
        "green slimer",
        "acropora green slimer",
        "slimer",
        "acro verde"
    ],
    scientific:"Acropora yongei",
    type:"SPS",
    difficulty:"Difícil",
    category:"Acropora",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/green-slimer-acropora.jpg"
},

{
    id:"staghorn-acropora",
    name:"Staghorn Acropora",
    aliases:[
        "staghorn",
        "staghorn acropora",
        "coral cuerno de ciervo"
    ],
    scientific:"Acropora spp.",
    type:"SPS",
    difficulty:"Difícil",
    category:"Acropora",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/staghorn-acropora.jpg"
},

{
    id:"tabling-acropora",
    name:"Tabling Acropora",
    aliases:[
        "table acropora",
        "tabling acropora",
        "table coral",
        "acropora mesa"
    ],
    scientific:"Acropora spp.",
    type:"SPS",
    difficulty:"Difícil",
    category:"Acropora",
    premium:true,
    price:"Desde $2,000",
    image:"images/corals/tabling-acropora.jpg"
},

{
    id:"encrusting-montipora",
    name:"Encrusting Montipora",
    aliases:[
        "encrusting montipora",
        "montipora incrustante",
        "encrusting monti"
    ],
    scientific:"Montipora spp.",
    type:"SPS",
    difficulty:"Media",
    category:"Montipora",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/encrusting-montipora.jpg"
},

{
    id:"sunset-montipora",
    name:"Sunset Montipora",
    aliases:[
        "sunset montipora",
        "sunset monti",
        "montipora sunset"
    ],
    scientific:"Montipora spp.",
    type:"SPS",
    difficulty:"Media",
    category:"Montipora",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/sunset-montipora.jpg"
},

{
    id:"rainbow-montipora",
    name:"Rainbow Montipora",
    aliases:[
        "rainbow montipora",
        "rainbow monti",
        "montipora rainbow"
    ],
    scientific:"Montipora spp.",
    type:"SPS",
    difficulty:"Media",
    category:"Montipora",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/rainbow-montipora.jpg"
},

{
    id:"leptoseris",
    name:"Leptoseris",
    aliases:[
        "leptoseris",
        "lepto",
        "wrinkle coral"
    ],
    scientific:"Leptoseris spp.",
    type:"SPS",
    difficulty:"Media",
    category:"SPS",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/leptoseris.jpg"
},

{
    id:"pavona",
    name:"Pavona",
    aliases:[
        "pavona",
        "cactus coral",
        "coral cactus"
    ],
    scientific:"Pavona spp.",
    type:"SPS",
    difficulty:"Media",
    category:"SPS",
    premium:false,
    price:"Desde $1,000",
    image:"images/corals/pavona.jpg"
},

/* =========================================================
   CORALES DUROS — LPS / SHOWPIECE
   ========================================================= */

{
    id:"elegance-coral",
    name:"Elegance Coral",
    aliases:[
        "elegance",
        "elegance coral",
        "coral elegancia",
        "catalaphyllia"
    ],
    scientific:"Catalaphyllia jardinei",
    type:"LPS",
    difficulty:"Media",
    category:"Showpiece",
    premium:true,
    price:"Desde $2,000",
    image:"images/corals/elegance-coral.jpg"
},

{
    id:"plate-coral",
    name:"Plate Coral",
    aliases:[
        "plate coral",
        "fungia",
        "coral plato",
        "coral disco"
    ],
    scientific:"Fungia spp.",
    type:"LPS",
    difficulty:"Media",
    category:"LPS",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/plate-coral.jpg"
},

{
    id:"bubble-coral",
    name:"Bubble Coral",
    aliases:[
        "bubble coral",
        "coral burbuja",
        "plerogyra"
    ],
    scientific:"Plerogyra sinuosa",
    type:"LPS",
    difficulty:"Media",
    category:"LPS",
    premium:true,
    price:"Desde $1,800",
    image:"images/corals/bubble-coral.jpg"
},

{
    id:"fox-coral",
    name:"Fox Coral",
    aliases:[
        "fox coral",
        "coral zorro",
        "nemenzophyllia"
    ],
    scientific:"Nemenzophyllia turbida",
    type:"LPS",
    difficulty:"Media",
    category:"LPS",
    premium:true,
    price:"Desde $1,500",
    image:"images/corals/fox-coral.jpg"
},

{
    id:"blastomussa",
    name:"Blastomussa",
    aliases:[
        "blasto",
        "blastomussa",
        "blastomussa coral"
    ],
    scientific:"Blastomussa spp.",
    type:"LPS",
    difficulty:"Media",
    category:"LPS",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/blastomussa.jpg"
},

{
    id:"cyphastrea",
    name:"Cyphastrea",
    aliases:[
        "cyphastrea",
        "meteor shower",
        "meteor shower cyphastrea"
    ],
    scientific:"Cyphastrea spp.",
    type:"LPS",
    difficulty:"Fácil",
    category:"Encrusting",
    premium:true,
    price:"Desde $1,000",
    image:"images/corals/cyphastrea.jpg"
},

{
    id:"leptastrea",
    name:"Leptastrea",
    aliases:[
        "leptastrea",
        "leptastrea coral",
        "encrusting coral"
    ],
    scientific:"Leptastrea spp.",
    type:"LPS",
    difficulty:"Fácil",
    category:"Encrusting",
    premium:false,
    price:"Desde $950",
    image:"images/corals/leptastrea.jpg"
},

/* =========================================================
   CORALES BLANDOS — PREMIUM / MOVIMIENTO
   ========================================================= */

{
    id:"sinularia",
    name:"Sinularia",
    aliases:[
        "sinularia",
        "finger leather",
        "finger leather coral",
        "coral cuero dedo"
    ],
    scientific:"Sinularia spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Leather Coral",
    premium:false,
    price:"Desde $850",
    image:"images/corals/sinularia.jpg"
},

{
    id:"nepthea",
    name:"Nepthea",
    aliases:[
        "nepthea",
        "neon green nepthea",
        "green nepthea",
        "coral nepthea"
    ],
    scientific:"Nepthea spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Soft Coral",
    premium:true,
    price:"Desde $950",
    image:"images/corals/nepthea.jpg"
},

{
    id:"cladiella",
    name:"Colt Coral",
    aliases:[
        "colt coral",
        "cladiella",
        "coral colt",
        "soft coral"
    ],
    scientific:"Cladiella spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Soft Coral",
    premium:false,
    price:"Desde $750",
    image:"images/corals/cladiella.jpg"
},

{
    id:"devils-hand",
    name:"Devil's Hand Leather",
    aliases:[
        "devils hand",
        "devil's hand",
        "lobophytum",
        "coral mano del diablo"
    ],
    scientific:"Lobophytum spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Leather Coral",
    premium:false,
    price:"Desde $850",
    image:"images/corals/devils-hand.jpg"
},

{
    id:"pipe-organ",
    name:"Pipe Organ Coral",
    aliases:[
        "pipe organ",
        "pipe organ coral",
        "tubipora",
        "coral organo",
        "coral órgano"
    ],
    scientific:"Tubipora musica",
    type:"Blando",
    difficulty:"Media",
    category:"Soft Coral",
    premium:true,
    price:"Desde $1,200",
    image:"images/corals/pipe-organ.jpg"
},

{
    id:"clove-polyps",
    name:"Clove Polyps",
    aliases:[
        "clove polyps",
        "clove polyp",
        "clavularia",
        "polipos clavo",
        "pólipos clavo"
    ],
    scientific:"Clavularia spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Polyps",
    premium:false,
    price:"Desde $750",
    image:"images/corals/clove-polyps.jpg"
},

{
    id:"blue-clove-polyps",
    name:"Blue Clove Polyps",
    aliases:[
        "blue clove polyps",
        "blue cloves",
        "polipos azules",
        "pólipos azules"
    ],
    scientific:"Clavularia spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Polyps",
    premium:true,
    price:"Desde $850",
    image:"images/corals/blue-clove-polyps.jpg"
},

{
    id:"anthelia",
    name:"Anthelia",
    aliases:[
        "anthelia",
        "waving hand coral",
        "glove coral",
        "coral mano"
    ],
    scientific:"Anthelia spp.",
    type:"Blando",
    difficulty:"Fácil",
    category:"Soft Coral",
    premium:false,
    price:"Desde $650",
    image:"images/corals/anthelia.jpg"
}

];