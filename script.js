(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const img = (id, w = 700) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

  // Unsplash photo IDs
  const P = {
    chickenBiryani: '1631515243349-e0cb75fb8d3a', biryani: '1563379091339-03b21ab4a4f8',
    biryani2: '1589302168068-964664d93dc0', biryani3: '1633945274405-b6c8069047b0',
    karahi: '1565557623262-b51c2513a641', karahi2: '1588166524941-3bf61a9c41db',
    tikka: '1599487488170-d11ec9c172f0', tikka2: '1606491956689-2ea866880c84',
    seekh: '1603360946369-dc9bb6258143',
    naan: '__CUSTOM_NAAN__',
    raita: '__CUSTOM_RAITA__', salad: '1512621776951-a57141f2eefd',
    tea: '1544787219-7f47ccb76574',
    parathaRoll: '__CUSTOM_PARATHA_ROLL__',
    chickenParathaRoll: '__CUSTOM_CHICKEN_PARATHA_ROLL__',
    malaiRoll: '__CUSTOM_MALAI_ROLL__'
  };
  // Custom image URLs (not Unsplash)
  const CUSTOM_IMGS = {
    '__CUSTOM_NAAN__': 'https://www.allrecipes.com/thmb/OHJwIuuYc-14Um-DEURV92wCDLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/270860-garlic-naan-VAT-Beauty-4x3-19ac36bc26514f41847340610ef75251.jpg',
    '__CUSTOM_RAITA__': 'https://cdn.foodfaithfitness.com/uploads/2024/09/Raita-Recipe-A_fff_Raita-Recipe6859_Feature-2-768x1151.jpg',
    '__CUSTOM_PARATHA_ROLL__': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvK54Fpo40vsz1z5YkeCgTPSxk_KQJrI4MibF-lSF2vd0IT1McO0r5oAM&s=10',
    '__CUSTOM_CHICKEN_PARATHA_ROLL__': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62gWEMj-kN_tRCPDSX0IM39jGvYVagl3aY4lqOiLSeZZopPWFwAK8J0tl&s=10',
    '__CUSTOM_MALAI_ROLL__': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQZxlksOwq-ayPCQIVsh7tiViGhLrECpFeiW8JLhARA&s=10'
  };
  const imgSrc = (id, w = 600) => CUSTOM_IMGS[id] || img(id, w);

  // Prices (PKR) follow the restaurant's printed menu where available
  const MENU = [
    { id: 'chicken-biryani', n: 'Chicken Biryani', d: 'Fragrant basmati rice layered with tender chicken and our signature Pakistani spices.', p: 490, c: 'Biryani', i: P.chickenBiryani },
    { id: 'beef-biryani', n: 'Beef Biryani', d: 'Slow-cooked beef on dum with fried onions, yogurt and whole garam masala.', p: 560, c: 'Biryani', i: P.biryani3 },
    { id: 'mutton-biryani', n: 'Mutton Biryani', d: 'Juicy mutton pieces and long-grain rice, richly spiced and sealed on dum.', p: 850, c: 'Biryani', i: P.biryani2 },
    { id: 'special-biryani', n: 'Special Biryani', d: 'BBQ leg piece biryani with raita, our Biryani King Special.', p: 750, c: 'Biryani', i: P.biryani },
    { id: 'chicken-karahi', n: 'Chicken Karahi', d: 'Tomato, ginger and green chilli karahi, cooked fresh in a wok. Serves 2 to 3 (450gm).', p: 1100, c: 'Karahi', i: P.karahi },
    { id: 'mutton-karahi', n: 'Mutton Karahi', d: 'Tender mutton in a rich, desi ghee karahi masala. Serves 2 to 3 (450gm).', p: 1900, c: 'Karahi', i: P.karahi2 },
    { id: 'chicken-tikka', n: 'Chicken Tikka', d: 'Boneless chicken marinated overnight and grilled over charcoal. 5 pieces.', p: 490, c: 'BBQ', i: P.tikka },
    { id: 'seekh-kabab', n: 'Seekh Kabab', d: 'Spiced minced beef skewers, juicy inside and charred outside.', p: 250, c: 'BBQ', i: P.seekh },
    { id: 'garlic-naan', n: 'Garlic Naan', d: 'Soft tandoori naan brushed with garlic butter and fresh coriander.', p: 90, c: 'Sides', i: P.naan },
    { id: 'raita', n: 'Raita', d: 'Cool whipped yogurt with cucumber, mint and roasted cumin.', p: 80, c: 'Sides', i: P.raita },
    { id: 'fresh-salad', n: 'Fresh Salad', d: 'Crisp cucumber, onion, tomato and green chilli with lemon.', p: 100, c: 'Sides', i: P.salad },
    { id: 'shapata-roll', n: 'Shapata Roll', d: 'Serves 1. Shapata Roll filled with malai boti and zinger chicken, wrapped in a crispy paratha.', p: 585, c: 'Paratha Roll', i: P.parathaRoll },
    { id: 'chicken-paratha-roll', n: 'Chicken Paratha Roll', d: 'Serves 1. Tender chicken wrapped in a flaky golden paratha roll served with chutney and raita.', p: 360, c: 'Paratha Roll', i: P.chickenParathaRoll },
    { id: 'malai-garlic-roll', n: 'Chicken Malai Garlic Roll', d: 'Serves 1. Tender chicken malai boti marinated in creamy yogurt and garlic, wrapped in a soft paratha.', p: 439, c: 'Paratha Roll', i: P.malaiRoll }
  ];
  const SIGNATURE = { id: 'signature', n: "Biryani King Signature (BBQ Leg Biryani)", p: 750 };
  const GALLERY = [
    ['Chicken Biryani', P.chickenBiryani, 'tall'], ['Mutton Biryani', P.biryani2, ''], ['Chicken Karahi', P.karahi, 'wide'],
    ['Seekh Kabab', P.seekh, ''], ['Naan', P.naan, 'tall'], ['Tikka', P.tikka2, ''],
    ['Pakistani Tea', P.tea, ''], ['Paratha Roll', P.parathaRoll, 'wide']
  ];

  const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#7a1519'/><stop offset='1' stop-color='#e0a526'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><text x='50%' y='52%' text-anchor='middle' font-size='90'>🍛</text></svg>");
  // Show a branded placeholder if an image fails to load
  document.addEventListener('error', e => {
    const t = e.target;
    if (t.tagName === 'IMG' && t.src !== PLACEHOLDER) t.src = PLACEHOLDER;
  }, true);

  const fmt = n => 'Rs. ' + n.toLocaleString('en-PK');

  /* ---------- Mobile nav ---------- */
  const nav = $('#nav'), burger = $('#burger'), overlay = $('#overlay');
  const setNav = open => {
    nav.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setNav(!nav.classList.contains('open')));
  $('#navClose').addEventListener('click', () => setNav(false));
  $$('a', nav).forEach(a => a.addEventListener('click', () => setNav(false)));
  overlay.addEventListener('click', () => { setNav(false); setDrawer(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setNav(false); setDrawer(false); } });

  const header = $('#header');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Menu ---------- */
  const cats = ['All', ...new Set(MENU.map(m => m.c))];
  const tabs = $('#tabs'), grid = $('#menuGrid');
  tabs.innerHTML = cats.map((c, i) => `<button class="tab${i ? '' : ' active'}" role="tab" aria-selected="${!i}" data-c="${c}">${c}</button>`).join('');
  const renderMenu = cat => {
    const items = cat === 'All' ? MENU : MENU.filter(m => m.c === cat);
    grid.innerHTML = items.map((m, i) => `
      <article class="card" style="animation-delay:${i * 50}ms">
        <div class="img"><img src="${imgSrc(m.i, 600)}" alt="${m.n}" loading="lazy" width="600" height="450"></div>
        <div class="card-body"><h3>${m.n}</h3><p>${m.d}</p>
          <div class="card-foot"><span class="price">${fmt(m.p)}</span>
          <a href="https://www.foodpanda.pk/restaurant/u6mp/biryani-king-shadman-u6mp?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action" class="btn btn-maroon" target="_blank" rel="noopener noreferrer">Add to Order</a></div></div>
      </article>`).join('');
  };
  const setCat = cat => {
    $$('.tab', tabs).forEach(t => { const on = t.dataset.c === cat; t.classList.toggle('active', on); t.setAttribute('aria-selected', on); });
    renderMenu(cat);
  };
  tabs.addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) setCat(t.dataset.c); });
  $$('[data-cat]').forEach(a => a.addEventListener('click', () => setCat(a.dataset.cat)));
  renderMenu('All');

  /* ---------- Gallery ---------- */
  $('#gallery-grid').innerHTML = GALLERY.map(([n, id, cls]) =>
    `<figure class="g ${cls}" style="margin:0"><img src="${imgSrc(id, 800)}" alt="${n} at Biryani King" loading="lazy" width="800" height="600"><span>${n}</span></figure>`).join('');

  /* ---------- Order cart ---------- */
  const drawer = $('#drawer');
  let cart = {};
  const setDrawer = open => {
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', !open);
    overlay.classList.toggle('show', open);
  };
  const find = id => id === 'signature' ? SIGNATURE : MENU.find(m => m.id === id);
  const toast = msg => {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 1800);
  };
  const renderCart = () => {
    const ids = Object.keys(cart);
    const count = ids.reduce((s, id) => s + cart[id], 0);
    const total = ids.reduce((s, id) => s + cart[id] * find(id).p, 0);
    $('#cartCount').textContent = count;
    $('#cartTotal').textContent = fmt(total);
    $('#cartItems').innerHTML = ids.length ? ids.map(id => `
      <li><span>${find(id).n}<br><small>${fmt(find(id).p)}</small></span>
      <span class="qty"><button data-dec="${id}" aria-label="Decrease">−</button><b>${cart[id]}</b><button data-inc="${id}" aria-label="Increase">+</button></span></li>`).join('')
      : '<li class="empty">Your order is empty. Add something delicious!</li>';
  };
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) { const id = add.dataset.add; cart[id] = (cart[id] || 0) + 1; renderCart(); toast(`${find(id).n} added`); }
    const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]');
    if (inc) { cart[inc.dataset.inc]++; renderCart(); }
    if (dec) { const id = dec.dataset.dec; if (--cart[id] <= 0) delete cart[id]; renderCart(); }
  });
  $('#cartBtn').addEventListener('click', () => setDrawer(true));
  $('#drawerClose').addEventListener('click', () => setDrawer(false));
  $('#clearCart').addEventListener('click', () => { cart = {}; renderCart(); });
  $('#checkout').addEventListener('click', () => {
    const ids = Object.keys(cart);
    if (!ids.length) return toast('Add items to your order first');
    const lines = ids.map(id => `• ${cart[id]} x ${find(id).n} - ${fmt(cart[id] * find(id).p)}`);
    const total = ids.reduce((s, id) => s + cart[id] * find(id).p, 0);
    const msg = `Assalam o Alaikum! I'd like to order from Biryani King:\n${lines.join('\n')}\nTotal: ${fmt(total)}`;
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });
  renderCart();

  /* ---------- Forms ---------- */
  const form = $('#contactForm'), msg = $('#formMsg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    $$('[required]', form).forEach(f => {
      const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
      f.classList.toggle('err', bad); if (bad) ok = false;
    });
    msg.style.color = ok ? '#1f7a45' : '#c0392b';
    msg.textContent = ok ? 'Thank you! We will get back to you shortly.' : 'Please fill in the highlighted fields.';
    if (ok) form.reset();
  });
  $('#newsForm').addEventListener('submit', e => {
    e.preventDefault(); $('#newsMsg').textContent = 'Subscribed. Shukriya!'; e.target.reset();
  });

  /* ---------- Scroll reveal ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: .12 }) : null;
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + 'ms'; io ? io.observe(el) : el.classList.add('in'); });
})();
