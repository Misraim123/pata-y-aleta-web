(async () => {

    if(!window.supabase){

        console.error('Supabase SDK no cargado.');

        return;

    }

    const supabase =
    window.supabase.createClient(

        'https://vjyktubsdhpusyvnphvj.supabase.co',

        'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'

    );

    const { data, error } =
    await supabase
    .from('ocean_promotions')
    .select('*')
    .eq('active', true)
    .order('priority', { ascending:true });
    console.log("ERROR COMPLETO");
console.dir(error);

console.log("DATA");
console.dir(data);

    if(error){

        console.error(error);

        return;

    }

    window.OCEAN_PULSE_PROMOTIONS =
    (data || []).map(item => ({

        id: item.id,

        title: item.title,

        description: item.subtitle,

        cta: item.button_text,

        href: "#contacto",

        type: "premium",

        priority: item.priority || 0,

        active: item.active,

        image: item.image

    }));

    console.log(
        "SUPABASE PROMOS",
        window.OCEAN_PULSE_PROMOTIONS
    );

    document.dispatchEvent(
        new Event("OceanPulseReload")
    );

})();

console.log("LOADER EJECUTADO");