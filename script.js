const supabaseClient = window.supabase.createClient(
  'https://vjyktubsdhpusyvnphvj.supabase.co',
  'sb_publishable_ORfJ3n0RVQ_oIJmexPkBwg_TRECBkzQ'
);

async function loadFeaturedProducts() {

  const section = document.getElementById('featured-products-test');

  const productsContainer = document.createElement('div');

  productsContainer.style.display = 'grid';
  productsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(260px,1fr))';
  productsContainer.style.gap = '24px';
  productsContainer.style.padding = '40px';
  productsContainer.style.maxWidth = '1200px';
  productsContainer.style.margin = '0 auto';

  const { data, error } = await supabaseClient
    .from('products')
    .select('*')
    .limit(3);
    console.log(data);
console.log(error);

  if(error){
    console.error(error);
    return;
  }

  data.forEach(product => {

    const card = document.createElement('div');

    card.style.background = 'white';
    card.style.borderRadius = '24px';
    card.style.overflow = 'hidden';
    card.style.boxShadow = '0 15px 40px rgba(0,0,0,.08)';

    card.innerHTML = `
      <img 
        src="${product.image_url}" 
        style="width:100%; height:260px; object-fit:cover;"
      >

      <div style="padding:24px;">

        <h3 style="font-size:24px; margin-bottom:12px;">
          ${product.title}
        </h3>

        <p style="color:#666; line-height:1.6;">
          ${product.description || ''}
        </p>

      </div>
    `;

    productsContainer.appendChild(card);

  });

  section.appendChild(productsContainer);

}

window.addEventListener('DOMContentLoaded', () => {
  loadFeaturedProducts();
});
