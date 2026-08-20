console.log("CONFIGURATOR DATA CARGADO");
const CONFIGURATOR = [

{
id:"intro",
type:"intro",
title:"Bienvenido"
},

{
id:"project",
type:"single",
title:"¿Qué tipo de proyecto deseas?",

options:[

{
id:"reef",

image:"images/projects/reef.jpg",

badge:"⭐ Más solicitado",

title:"Marino Reef",

description:"Corales vivos, peces marinos y arrecife tropical."

},

{
id:"fishonly",

image:"images/projects/fishonly.jpg",

badge:"🐠 Ideal para principiantes",

title:"Marino Fish Only",

description:"Solo peces marinos. Fácil mantenimiento."

},

{
id:"fresh",

image:"images/projects/freshwater.jpg",

badge:"🌿 Muy recomendado",

title:"Agua Dulce",

description:"Natural, elegante y sencillo de mantener."

},

{
id:"planted",

image:"images/projects/planted.jpg",

badge:"🌱 Aquascaping",

title:"Plantado",

description:"Paisajismo acuático con plantas naturales."

},

{
id:"corporate",

image:"images/projects/corporate.jpg",

badge:"🏢 Premium",

title:"Corporativo",

description:"Diseñado para oficinas, hoteles y negocios."

},

]

},

{
id:"location",
type:"single",
title:"¿Dónde estará instalado?",

options:[

{
icon:"🏠",
title:"Casa"
},

{
icon:"🏢",
title:"Oficina"
},

{
icon:"🍽",
title:"Restaurante"
},

{
icon:"🏨",
title:"Hotel"
},

{
icon:"🏪",
title:"Local Comercial"
}

]

},

{
id:"space",
type:"measure",
title:"Háblanos de tu espacio"
},

{
id:"photos",
type:"upload",
title:"Agrega fotografías"
},

{
id:"ecosystem",

type:"multiple",

title:"¿Qué ecosistema imaginas?",

options:[

{

id:"reef",

image:"images/projects/reef.jpg",

title:"Arrecife Tropical",

description:"Corales SPS, LPS y peces marinos.",

badge:"🔥 Premium"

},

{

id:"fish",

image:"images/projects/fishonly.jpg",

title:"Solo Peces",

description:"Marino elegante con bajo mantenimiento.",

badge:"⭐ Recomendado"

},

{

id:"fresh",

image:"images/projects/freshwater.jpg",

title:"Agua Dulce",

description:"Paisajes naturales y peces tropicales.",

badge:"🌿 Natural"

},

{

id:"planted",

image:"images/projects/planted.jpg",

title:"Aquascaping",

description:"Paisajismo acuático de competencia.",

badge:"🏆 Diseño"

}

]

},

{
id:"includes",
type:"multiple",
title:"¿Qué deseas incluir en tu proyecto?",
options:[

{
id:"fish",
title:"🐠 Peces",
description:"Especies marinas y de agua dulce.",
badge:"Premium"
},

{
id:"corals",
title:"🪸 Corales",
description:"Blandos, LPS y SPS.",
badge:"Luxury"
},

{
id:"plants",
title:"🌿 Plantas",
description:"Naturales y Aquascaping.",
badge:"Natural"
},

{
id:"invertebrates",
title:"🦐 Invertebrados",
description:"Camarones, estrellas y más.",
badge:"Reef"
},

{
id:"rock",
title:"🪨 Roca Viva",
description:"Base biológica del acuario.",
badge:"Reef"
},

{
id:"lighting",
title:"💡 Iluminación",
description:"LED Premium.",
badge:"Equipamiento"
},

{
id:"automation",
title:"🌊 Automatización",
description:"Control inteligente.",
badge:"Smart"
},

{
id:"decoration",
title:"🎍 Decoración",
description:"Troncos, arenas y ornamentos.",
badge:"Diseño"
}

]
},

/* =========================================================
   SELECCION DE PECES
   ========================================================= */

{

id:"fish",

type:"species",

speciesType:"fish",

title:"Elige tus peces",

description:"Busca por nombre comercial o científico."

},

/* =========================================================

   SELECCION DE CORALES

   ========================================================= */

{
    id:"corals",
    type:"species",
    speciesType:"coral",
    title:"Elige tus corales",
    description:"Busca por nombre comercial, científico o tipo de coral."
},


{
id:"equipment",
type:"single",
title:"Equipamiento",
options:[

{
id:"basic",
title:"Equipamiento Básico",
description:"Todo lo necesario para iniciar correctamente.",
badge:"🟢 Recomendado",
image:"images/equipment/basic.jpg"
},

{
id:"premium",
title:"Equipamiento Premium",
description:"Equipos de alta gama con máxima eficiencia.",
badge:"⭐ Premium",
image:"images/equipment/premium.jpg"
},

{
id:"ultra",
title:"Equipamiento Ultra",
description:"Tecnología profesional para acuarios de exhibición.",
badge:"👑 Luxury",
image:"images/equipment/ultra.jpg"
}

]
},

{
id:"style",
type:"single",
title:"¿Qué estilo prefieres?",
options:[

{
id:"modern",
title:"Moderno",
description:"Líneas limpias, minimalismo y elegancia.",
badge:"✨ Contemporáneo",
image:"style-images/modern.jpg"
},

{
id:"natural",
title:"Natural",
description:"Inspirado en paisajes y naturaleza.",
badge:"🌿 Orgánico",
image:"style-images/natural.jpg"
},

{
id:"luxury",
title:"Luxury",
description:"Acuario de exhibición de máximo nivel.",
badge:"👑 Exclusivo",
image:"style-images/luxury.jpg"
}

]
},

{
id:"budget",
type:"single",
title:"¿Cuál es tu presupuesto aproximado?",
options:[

{
id:"30",
title:"Hasta $30,000",
description:"Ideal para comenzar con un acuario premium.",
badge:"💰 Inicial",
image:"images/budget/30.jpg"
},

{
id:"60",
title:"$30,000 - $60,000",
description:"Excelente equilibrio entre diseño y tecnología.",
badge:"⭐ Recomendado",
image:"images/budget/60.jpg"
},

{
id:"100",
title:"Más de $60,000",
description:"Proyecto Luxury completamente personalizado.",
badge:"👑 Premium",
image:"images/budget/100.jpg"
}

]
},
{
id:"ideas",
type:"textarea",
title:"Cuéntanos un poco más sobre tu proyecto",
placeholder:"Ejemplo: Busco un arrecife moderno de aproximadamente 250 litros para la sala de mi casa, con peces tranquilos y mantenimiento sencillo."
},

{
id:"summary",
type:"summary",
title:"Resumen de tu proyecto"
}

];