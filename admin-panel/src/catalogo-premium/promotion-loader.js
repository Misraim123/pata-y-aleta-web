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
   .order('created_at', { ascending:false });
    console.log("ERROR COMPLETO");
console.dir(error);

console.log("DATA");
console.dir(data);

    if(error){

        console.error(error);

        return;

    }

    const today = new Date();

today.setHours(0,0,0,0);

const promotions = (data || []).filter(item => {


    if(!item.start_date || !item.end_date){

        return true;

    }

    const start = new Date(item.start_date);

    const end = new Date(item.end_date);

    start.setHours(0,0,0,0);

    end.setHours(23,59,59,999);

    return today >= start && today <= end;

    promotions.sort((a, b) => {

    const priorityA = Number(a.priority || 0);

    const priorityB = Number(b.priority || 0);

    if (priorityA !== priorityB) {

        return priorityB - priorityA;

    }

    return new Date(b.created_at) - new Date(a.created_at);

});

});

    window.OCEAN_PULSE_PROMOTIONS =
promotions.map(item => ({

        id: item.id,

        title: item.title,

        description: item.subtitle,

        cta: item.button_text,

        href: "#contacto",

        type: "premium",

        priority: item.priority || 0,

        active: item.active,

        image: item.image,

        label: item.label || "",

badge: item.badge || "",

icon: item.icon || "✨",

color: item.color || "blue",

startDate: item.start_date,

endDate: item.end_date,

showCountdown: item.show_countdown

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