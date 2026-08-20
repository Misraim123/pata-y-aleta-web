const FISH = [

/* =========================================================
   PECES PAYASO
   ========================================================= */

{
    id:"ocellaris",
    name:"Payaso Ocellaris",
    scientific:"Amphiprion ocellaris",
    aliases:[
        "pez payaso",
        "payaso",
        "pez payaso común",
        "payaso común",
        "ocellaris",
        "nemo"
    ],
    difficulty:"Fácil",
    category:"Principiantes",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $850",
    image:"images/fish/ocellaris.jpg"
},

{
    id:"percula",
    name:"Payaso Percula",
    scientific:"Amphiprion percula",
    aliases:[
        "pez payaso",
        "payaso",
        "payaso percula",
        "percula",
        "pez payaso percula"
    ],
    difficulty:"Fácil",
    category:"Principiantes",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $1,250",
    image:"images/fish/percula.jpg"
},

{
    id:"maroonClown",
    name:"Payaso Marrón",
    scientific:"Premnas biaculeatus",
    aliases:[
        "maroon clown",
        "maroon clownfish",
        "payaso marron",
        "payaso marrón",
        "pez payaso marron"
    ],
    difficulty:"Media",
    category:"Payasos",
    reef:true,
    peaceful:false,
    premium:true,
    price:"Desde $1,500",
    image:"images/fish/maroonClown.jpg"
},

{
    id:"tomatoClown",
    name:"Payaso Tomate",
    scientific:"Amphiprion frenatus",
    aliases:[
        "tomato clown",
        "tomato clownfish",
        "payaso tomate",
        "pez payaso tomate"
    ],
    difficulty:"Fácil",
    category:"Payasos",
    reef:true,
    peaceful:false,
    premium:false,
    price:"Desde $1,100",
    image:"images/fish/tomatoClown.jpg"
},

/* =========================================================
   CIRUJANOS / TANGS
   ========================================================= */

{
    id:"yellowTang",
    name:"Yellow Tang",
    scientific:"Zebrasoma flavescens",
    aliases:[
        "cirujano amarillo",
        "pez cirujano amarillo",
        "cirujano",
        "yellow tang",
        "tang amarillo"
    ],
    difficulty:"Media",
    category:"Cirujanos",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $2,300",
    image:"images/fish/yellowTang.jpg"
},

{
    id:"blueTang",
    name:"Blue Tang",
    scientific:"Paracanthurus hepatus",
    aliases:[
        "cirujano azul",
        "pez cirujano azul",
        "cirujano",
        "blue tang",
        "tang azul",
        "dory"
    ],
    difficulty:"Media",
    category:"Cirujanos",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $2,800",
    image:"images/fish/blueTang.jpg"
},

{
    id:"sailfinTang",
    name:"Sailfin Tang",
    scientific:"Zebrasoma veliferum",
    aliases:[
        "sailfin tang",
        "cirujano vela",
        "cirujano aleta vela",
        "pez cirujano vela"
    ],
    difficulty:"Media",
    category:"Cirujanos",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $2,800",
    image:"images/fish/sailfinTang.jpg"
},

{
    id:"purpleTang",
    name:"Purple Tang",
    scientific:"Zebrasoma xanthurum",
    aliases:[
        "purple tang",
        "cirujano purpura",
        "cirujano púrpura",
        "cirujano morado"
    ],
    difficulty:"Media",
    category:"Cirujanos",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $4,500",
    image:"images/fish/purpleTang.jpg"
},

{
    id:"powderBlueTang",
    name:"Powder Blue Tang",
    scientific:"Acanthurus leucosternon",
    aliases:[
        "powder blue",
        "powder blue tang",
        "cirujano azul polvo",
        "cirujano"
    ],
    difficulty:"Difícil",
    category:"Cirujanos",
    reef:true,
    peaceful:false,
    premium:true,
    price:"Desde $4,200",
    image:"images/fish/powder-blue-tang.jpg"
},

{
    id:"achillesTang",
    name:"Achilles Tang",
    scientific:"Acanthurus achilles",
    aliases:[
        "achilles",
        "achilles tang",
        "cirujano aquiles",
        "aquiles"
    ],
    difficulty:"Difícil",
    category:"Cirujanos",
    reef:true,
    peaceful:false,
    premium:true,
    price:"Desde $6,500",
    image:"images/fish/achillesTang.jpg"
},

/* =========================================================
   PECES ÁNGEL
   ========================================================= */

{
    id:"flameAngel",
    name:"Flame Angelfish",
    scientific:"Centropyge loricula",
    aliases:[
        "ángel flama",
        "angel flama",
        "pez ángel flama",
        "pez angel flama",
        "ángel de fuego",
        "flame angel",
        "flame angelfish"
    ],
    difficulty:"Media",
    category:"Ángeles",
    reef:"Con precaución",
    peaceful:true,
    premium:true,
    price:"Desde $2,950",
    image:"images/fish/flame-angel.jpg"
},

{
    id:"coralBeauty",
    name:"Coral Beauty",
    scientific:"Centropyge bispinosa",
    aliases:[
        "coral beauty",
        "angel coral beauty",
        "ángel coral beauty",
        "angel enano"
    ],
    difficulty:"Media",
    category:"Ángeles",
    reef:"Con precaución",
    peaceful:true,
    premium:true,
    price:"Desde $2,400",
    image:"images/fish/coralBeauty.jpg"
},

{
    id:"emperor",
    name:"Ángel Emperador",
    scientific:"Pomacanthus imperator",
    aliases:[
        "ángel emperador",
        "angel emperador",
        "pez ángel emperador",
        "pez angel emperador",
        "emperador",
        "emperor angelfish"
    ],
    difficulty:"Difícil",
    category:"Ángeles",
    reef:"Con precaución",
    peaceful:true,
    premium:true,
    price:"Desde $4,500",
    image:"images/fish/emperor.jpg"
},

{
    id:"queenAngel",
    name:"Ángel Reina",
    scientific:"Holacanthus ciliaris",
    aliases:[
        "angel reina",
        "ángel reina",
        "queen angel",
        "queen angelfish"
    ],
    difficulty:"Difícil",
    category:"Ángeles",
    reef:"Con precaución",
    peaceful:false,
    premium:true,
    price:"Desde $5,500",
    image:"images/fish/queenAngel.jpg"
},

/* =========================================================
   GOBIOS
   ========================================================= */

{
    id:"yellowWatchmanGoby",
    name:"Yellow Watchman Goby",
    scientific:"Cryptocentrus cinctus",
    aliases:[
        "watchman goby",
        "yellow watchman",
        "gobio amarillo",
        "gobio vigilante"
    ],
    difficulty:"Fácil",
    category:"Gobios",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $950",
    image:"images/fish/yellowWatchmanGoby.jpg"
},

{
    id:"firefish",
    name:"Firefish",
    scientific:"Nemateleotris magnifica",
    aliases:[
        "firefish",
        "fire goby",
        "gobio fuego",
        "pez fuego"
    ],
    difficulty:"Fácil",
    category:"Gobios",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $1,100",
    image:"images/fish/firefish.jpg"
},

{
    id:"purpleFirefish",
    name:"Purple Firefish",
    scientific:"Nemateleotris decora",
    aliases:[
        "purple firefish",
        "firefish morado",
        "pez fuego morado"
    ],
    difficulty:"Fácil",
    category:"Gobios",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $1,600",
    image:"images/fish/purpleFirefish.jpg"
},

/* =========================================================
   BLÉNIDOS
   ========================================================= */

{
    id:"lawnmowerBlenny",
    name:"Lawnmower Blenny",
    scientific:"Salarias fasciatus",
    aliases:[
        "lawnmower blenny",
        "blenio podadora",
        "blenny",
        "come algas"
    ],
    difficulty:"Fácil",
    category:"Blénidos",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $1,100",
    image:"images/fish/lawnmowerBlenny.jpg"
},

{
    id:"tailspotBlenny",
    name:"Tailspot Blenny",
    scientific:"Ecsenius stigmatura",
    aliases:[
        "tailspot blenny",
        "blenny",
        "blenio"
    ],
    difficulty:"Fácil",
    category:"Blénidos",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $1,200",
    image:"images/fish/tailspotBlenny.jpg"
},

/* =========================================================
   WRASSES
   ========================================================= */

{
    id:"sixLineWrasse",
    name:"Six Line Wrasse",
    scientific:"Pseudocheilinus hexataenia",
    aliases:[
        "six line",
        "six line wrasse",
        "wrasse seis lineas",
        "lábrido seis líneas",
        "labrido seis lineas"
    ],
    difficulty:"Fácil",
    category:"Wrasses",
    reef:true,
    peaceful:"Semi-agresivo",
    premium:false,
    price:"Desde $1,300",
    image:"images/fish/sixLineWrasse.jpg"
},

{
    id:"melanurusWrasse",
    name:"Melanurus Wrasse",
    scientific:"Halichoeres melanurus",
    aliases:[
        "melanurus",
        "melanurus wrasse",
        "wrasse melanurus",
        "labrido melanurus"
    ],
    difficulty:"Media",
    category:"Wrasses",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $1,800",
    image:"images/fish/melanurusWrasse.jpg"
},

{
    id:"cleanerWrasse",
    name:"Cleaner Wrasse",
    scientific:"Labroides dimidiatus",
    aliases:[
        "cleaner wrasse",
        "wrasse limpiador",
        "lábrido limpiador",
        "labrido limpiador"
    ],
    difficulty:"Difícil",
    category:"Wrasses",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $1,500",
    image:"images/fish/cleanerWrasse.jpg"
},

/* =========================================================
   CARDENALES / DAMISELAS
   ========================================================= */

{
    id:"banggaiCardinal",
    name:"Cardenal Banggai",
    scientific:"Pterapogon kauderni",
    aliases:[
        "banggai",
        "banggai cardinal",
        "cardenal banggai",
        "pez cardenal"
    ],
    difficulty:"Fácil",
    category:"Cardenales",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $1,100",
    image:"images/fish/banggaiCardinal.jpg"
},

{
    id:"blueGreenChromis",
    name:"Chromis Verde Azul",
    scientific:"Chromis viridis",
    aliases:[
        "chromis",
        "green chromis",
        "blue green chromis",
        "chromis verde",
        "chromis azul"
    ],
    difficulty:"Fácil",
    category:"Cardenales y Damiselas",
    reef:true,
    peaceful:true,
    premium:false,
    price:"Desde $650",
    image:"images/fish/blueGreenChromis.jpg"
},

{
    id:"azureDamsel",
    name:"Damisela Azure",
    scientific:"Chrysiptera hemicyanea",
    aliases:[
        "azure damsel",
        "damisela azure",
        "damisela azul",
        "damsel"
    ],
    difficulty:"Fácil",
    category:"Damiselas",
    reef:true,
    peaceful:"Semi-agresivo",
    premium:false,
    price:"Desde $750",
    image:"images/fish/azureDamsel.jpg"
},

/* =========================================================
   ANTHIAS
   ========================================================= */

{
    id:"lyretailAnthias",
    name:"Lyretail Anthias",
    scientific:"Pseudanthias squamipinnis",
    aliases:[
        "anthias",
        "lyretail anthias",
        "anthias cola de lira"
    ],
    difficulty:"Media",
    category:"Anthias",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $1,600",
    image:"images/fish/lyretailAnthias.jpg"
},

/* =========================================================
   MANDARINES / DRAGONETS
   ========================================================= */

{
    id:"mandarin",
    name:"Mandarín Verde",
    scientific:"Synchiropus splendidus",
    aliases:[
        "mandarín",
        "mandarin",
        "pez mandarín",
        "pez mandarin",
        "mandarín verde",
        "dragonet mandarín"
    ],
    difficulty:"Difícil",
    category:"Dragonets",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $2,500",
    image:"images/fish/mandarin.jpg"
},

{
    id:"spottedMandarin",
    name:"Mandarín Punteado",
    scientific:"Synchiropus picturatus",
    aliases:[
        "spotted mandarin",
        "mandarin spotted",
        "mandarin punteado",
        "dragonet"
    ],
    difficulty:"Difícil",
    category:"Dragonets",
    reef:true,
    peaceful:true,
    premium:true,
    price:"Desde $2,500",
    image:"images/fish/spottedMandarin.jpg"
},

/* =========================================================
   FOXFACE / CONEJOS
   ========================================================= */

{
    id:"foxface",
    name:"Foxface",
    scientific:"Siganus vulpinus",
    aliases:[
        "foxface",
        "fox face",
        "pez conejo",
        "rabbitfish"
    ],
    difficulty:"Media",
    category:"Rabbitfish",
    reef:"Con precaución",
    peaceful:true,
    premium:true,
    price:"Desde $2,600",
    image:"images/fish/foxface.jpg"
},

/* =========================================================
   HAWKFISH
   ========================================================= */

{
    id:"flameHawkfish",
    name:"Flame Hawkfish",
    scientific:"Neocirrhites armatus",
    aliases:[
        "flame hawkfish",
        "hawkfish",
        "pez halcon",
        "pez halcón"
    ],
    difficulty:"Media",
    category:"Hawkfish",
    reef:"Con precaución",
    peaceful:"Semi-agresivo",
    premium:true,
    price:"Desde $2,000",
    image:"images/fish/flameHawkfish.jpg"
},

/* =========================================================
   BUTTERFLYFISH
   ========================================================= */

{
    id:"copperband",
    name:"Copperband Butterflyfish",
    scientific:"Chelmon rostratus",
    aliases:[
        "copperband",
        "copperband butterfly",
        "pez mariposa",
        "mariposa copperband"
    ],
    difficulty:"Difícil",
    category:"Mariposas",
    reef:"Con precaución",
    peaceful:true,
    premium:true,
    price:"Desde $3,200",
    image:"images/fish/copperband.jpg"
},

/* =========================================================
   AGUA DULCE — BETTAS
   ========================================================= */

{
    id:"bettaSplendens",
    name:"Betta",
    scientific:"Betta splendens",
    aliases:[
        "betta",
        "pez betta",
        "luchador de siam",
        "luchador siamés",
        "siamese fighting fish"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Bettas",
    water:"freshwater",
    planted:true,
    peaceful:"Con precaución",
    premium:false,
    price:"Desde $350",
    image:"images/fish/bettaSplendens.jpg"
},

/* =========================================================
   AGUA DULCE — TETRAS
   ========================================================= */

{
    id:"neonTetra",
    name:"Tetra Neón",
    scientific:"Paracheirodon innesi",
    aliases:[
        "tetra neon",
        "tetra neón",
        "neon tetra",
        "neon",
        "pez neon"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Tetras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $90",
    image:"images/fish/neonTetra.jpg"
},

{
    id:"cardinalTetra",
    name:"Tetra Cardenal",
    scientific:"Paracheirodon axelrodi",
    aliases:[
        "tetra cardenal",
        "cardinal tetra",
        "cardenal",
        "tetra rojo"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Tetras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $120",
    image:"images/fish/cardinalTetra.jpg"
},

{
    id:"rummyNoseTetra",
    name:"Tetra Nariz de Borracho",
    scientific:"Hemigrammus bleheri",
    aliases:[
        "rummy nose",
        "rummy nose tetra",
        "nariz de borracho",
        "tetra nariz roja"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Tetras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $130",
    image:"images/fish/rummyNoseTetra.jpg"
},

{
    id:"emberTetra",
    name:"Tetra Ember",
    scientific:"Hyphessobrycon amandae",
    aliases:[
        "ember tetra",
        "tetra ember",
        "tetra amandae",
        "tetra fuego"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Tetras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $100",
    image:"images/fish/emberTetra.jpg"
},

{
    id:"blackNeonTetra",
    name:"Tetra Neón Negro",
    scientific:"Hyphessobrycon herbertaxelrodi",
    aliases:[
        "black neon",
        "black neon tetra",
        "neon negro",
        "tetra neon negro"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Tetras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $100",
    image:"images/fish/blackNeonTetra.jpg"
},

/* =========================================================
   AGUA DULCE — VIVÍPAROS
   ========================================================= */

{
    id:"guppy",
    name:"Guppy",
    scientific:"Poecilia reticulata",
    aliases:[
        "guppy",
        "guppies",
        "pez guppy",
        "lebistes"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Vivíparos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $120",
    image:"images/fish/guppy.jpg"
},

{
    id:"endler",
    name:"Endler",
    scientific:"Poecilia wingei",
    aliases:[
        "endler",
        "endler guppy",
        "guppy endler"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Vivíparos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $150",
    image:"images/fish/endler.jpg"
},

{
    id:"molly",
    name:"Molly",
    scientific:"Poecilia sphenops",
    aliases:[
        "molly",
        "molly negro",
        "black molly",
        "pez molly"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Vivíparos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $120",
    image:"images/fish/molly.jpg"
},

{
    id:"platy",
    name:"Platy",
    scientific:"Xiphophorus maculatus",
    aliases:[
        "platy",
        "pez platy",
        "platys"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Vivíparos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $100",
    image:"images/fish/platy.jpg"
},

{
    id:"swordtail",
    name:"Cola de Espada",
    scientific:"Xiphophorus hellerii",
    aliases:[
        "cola de espada",
        "swordtail",
        "espada",
        "pez espada agua dulce"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Vivíparos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $120",
    image:"images/fish/swordtail.jpg"
},

/* =========================================================
   AGUA DULCE — DISCOS Y ESCALARES
   ========================================================= */

{
    id:"discus",
    name:"Disco",
    scientific:"Symphysodon spp.",
    aliases:[
        "disco",
        "pez disco",
        "discus",
        "discus fish"
    ],
    difficulty:"Difícil",
    category:"Agua Dulce · Discos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:true,
    price:"Desde $1,500",
    image:"images/fish/discus.jpg"
},

{
    id:"angelfishFreshwater",
    name:"Escalar",
    scientific:"Pterophyllum scalare",
    aliases:[
        "escalar",
        "pez angel agua dulce",
        "pez ángel agua dulce",
        "freshwater angelfish",
        "angelfish"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Escalares",
    water:"freshwater",
    planted:true,
    peaceful:"Semi-agresivo",
    premium:true,
    price:"Desde $450",
    image:"images/fish/angelfishFreshwater.jpg"
},

/* =========================================================
   AGUA DULCE — CÍCLIDOS ENANOS
   ========================================================= */

{
    id:"ramirezi",
    name:"Ramirezi",
    scientific:"Mikrogeophagus ramirezi",
    aliases:[
        "ramirezi",
        "ram",
        "german blue ram",
        "cíclido ramirezi",
        "ciclido ramirezi"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Cíclidos Enanos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:true,
    price:"Desde $450",
    image:"images/fish/ramirezi.jpg"
},

{
    id:"apistogrammaCacatuoides",
    name:"Apistogramma Cacatuoides",
    scientific:"Apistogramma cacatuoides",
    aliases:[
        "apistogramma",
        "apisto",
        "cacatuoides",
        "cockatoo cichlid"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Cíclidos Enanos",
    water:"freshwater",
    planted:true,
    peaceful:"Territorial",
    premium:true,
    price:"Desde $650",
    image:"images/fish/apistogrammaCacatuoides.jpg"
},

/* =========================================================
   AGUA DULCE — CORYDORAS
   ========================================================= */

{
    id:"corydorasPanda",
    name:"Corydora Panda",
    scientific:"Corydoras panda",
    aliases:[
        "cory panda",
        "corydora panda",
        "corydoras panda",
        "pez gato panda"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Corydoras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $250",
    image:"images/fish/corydorasPanda.jpg"
},

{
    id:"corydorasSterbai",
    name:"Corydora Sterbai",
    scientific:"Corydoras sterbai",
    aliases:[
        "cory sterbai",
        "corydora sterbai",
        "corydoras sterbai"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Corydoras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $300",
    image:"images/fish/corydorasSterbai.jpg"
},

/* =========================================================
   AGUA DULCE — COME ALGAS
   ========================================================= */

{
    id:"otocinclus",
    name:"Otocinclus",
    scientific:"Otocinclus spp.",
    aliases:[
        "otocinclus",
        "oto",
        "otos",
        "come algas",
        "limpia algas"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Come Algas",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $220",
    image:"images/fish/otocinclus.jpg"
},

{
    id:"bristlenosePleco",
    name:"Ancistrus",
    scientific:"Ancistrus spp.",
    aliases:[
        "ancistrus",
        "bristlenose",
        "bristlenose pleco",
        "pleco",
        "limpiafondos"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Plecos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $350",
    image:"images/fish/bristlenosePleco.jpg"
},

/* =========================================================
   AGUA DULCE — RASBORAS
   ========================================================= */

{
    id:"harlequinRasbora",
    name:"Rasbora Arlequín",
    scientific:"Trigonostigma heteromorpha",
    aliases:[
        "rasbora arlequin",
        "rasbora arlequín",
        "harlequin rasbora",
        "arlequin"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Rasboras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $120",
    image:"images/fish/harlequinRasbora.jpg"
},

{
    id:"chiliRasbora",
    name:"Chili Rasbora",
    scientific:"Boraras brigittae",
    aliases:[
        "chili rasbora",
        "rasbora chili",
        "mosquito rasbora",
        "boraras"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Rasboras",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:true,
    price:"Desde $150",
    image:"images/fish/chiliRasbora.jpg"
},

/* =========================================================
   AGUA DULCE — GOURAMIS
   ========================================================= */

{
    id:"honeyGourami",
    name:"Gourami Miel",
    scientific:"Trichogaster chuna",
    aliases:[
        "gourami miel",
        "honey gourami",
        "gourami"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Gouramis",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $300",
    image:"images/fish/honeyGourami.jpg"
},

{
    id:"dwarfGourami",
    name:"Gourami Enano",
    scientific:"Trichogaster lalius",
    aliases:[
        "gourami enano",
        "dwarf gourami",
        "gourami lalius"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Gouramis",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $300",
    image:"images/fish/dwarfGourami.jpg"
},

/* =========================================================
   AGUA DULCE — BARBOS
   ========================================================= */

{
    id:"cherryBarb",
    name:"Barbo Cereza",
    scientific:"Puntius titteya",
    aliases:[
        "barbo cereza",
        "cherry barb",
        "barbo"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Barbos",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $120",
    image:"images/fish/cherryBarb.jpg"
},

{
    id:"tigerBarb",
    name:"Barbo Tigre",
    scientific:"Puntigrus tetrazona",
    aliases:[
        "barbo tigre",
        "tiger barb",
        "barbo sumatrano"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Barbos",
    water:"freshwater",
    planted:true,
    peaceful:"Semi-agresivo",
    premium:false,
    price:"Desde $120",
    image:"images/fish/tigerBarb.jpg"
},

/* =========================================================
   AGUA DULCE — LOACHES
   ========================================================= */

{
    id:"kuhliLoach",
    name:"Kuhli Loach",
    scientific:"Pangio kuhlii",
    aliases:[
        "kuhli",
        "kuhli loach",
        "locha kuhli",
        "anguila kuhli"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Loaches",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $250",
    image:"images/fish/kuhliLoach.jpg"
},

{
    id:"clownLoach",
    name:"Locha Payaso",
    scientific:"Chromobotia macracanthus",
    aliases:[
        "locha payaso",
        "clown loach",
        "botia payaso"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Loaches",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:true,
    price:"Desde $550",
    image:"images/fish/clownLoach.jpg"
},

/* =========================================================
   AGUA DULCE — RAINBOWFISH
   ========================================================= */

{
    id:"boesemaniRainbow",
    name:"Arcoíris Boesemani",
    scientific:"Melanotaenia boesemani",
    aliases:[
        "boesemani",
        "boesemani rainbow",
        "rainbowfish",
        "pez arcoiris",
        "pez arcoíris"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Rainbowfish",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:true,
    price:"Desde $350",
    image:"images/fish/boesemaniRainbow.jpg"
},

/* =========================================================
   AGUA DULCE — NANO / AQUASCAPING
   ========================================================= */

{
    id:"celestialPearlDanio",
    name:"Celestial Pearl Danio",
    scientific:"Danio margaritatus",
    aliases:[
        "celestial pearl danio",
        "galaxy rasbora",
        "cpd",
        "danio galaxy",
        "microrasbora galaxy"
    ],
    difficulty:"Media",
    category:"Agua Dulce · Aquascaping",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:true,
    price:"Desde $220",
    image:"images/fish/celestialPearlDanio.jpg"
},

{
    id:"whiteCloud",
    name:"Neón Chino",
    scientific:"Tanichthys albonubes",
    aliases:[
        "neon chino",
        "neón chino",
        "white cloud",
        "white cloud mountain minnow"
    ],
    difficulty:"Fácil",
    category:"Agua Dulce · Aquascaping",
    water:"freshwater",
    planted:true,
    peaceful:true,
    premium:false,
    price:"Desde $100",
    image:"images/fish/whiteCloud.jpg"
}

];
