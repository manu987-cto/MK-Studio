const ALL_SERVICES = [
  { id:'m1', cat:'Maquillage', name:"Maquillage Mariée", dur:'1h 30min', price:150 },
  { id:'m2', cat:'Maquillage', name:"Essai mariée", dur:'1h', price:80 },
  { id:'m3', cat:'Maquillage', name:"Maquillage invité / demoiselles d'honneur", dur:'1h', price:90 },
  { id:'m4', cat:'Maquillage', name:"Maquillage simple", dur:'45min', price:60 },
  { id:'s1', cat:'Sourcils & Épilation', name:"Épilation au fil sourcils", dur:'15min', price:15 },
  { id:'s2', cat:'Sourcils & Épilation', name:"Restructuration sourcils", dur:'20min', price:27 },
  { id:'s3', cat:'Sourcils & Épilation', name:"Restructuration + teinture", dur:'40min', price:35 },
  { id:'s4', cat:'Sourcils & Épilation', name:"Restructuration + Browlift + teinture", dur:'1h', price:65 },
  { id:'s5', cat:'Sourcils & Épilation', name:"Teinture sourcils / cils", dur:'20min', price:12 },
  { id:'s6', cat:'Sourcils & Épilation', name:"Épilation lèvres", dur:'15min', price:7 },
  { id:'s7', cat:'Sourcils & Épilation', name:"Épilation sourcils + lèvres", dur:'30min', price:20 },
  { id:'c1', cat:'Cils & Browlift', name:"Rehaussement + Teinture + Lashbotox", dur:'1h', price:50 },
  { id:'c2', cat:'Cils & Browlift', name:"Browlift", dur:'30min', price:35 },
  { id:'c3', cat:'Cils & Browlift', name:"Browlift + teinture", dur:'40min', price:42 },
  { id:'c4', cat:'Cils & Browlift', name:"Rehaussement + Teinture + Browlift", dur:'1h', price:80 },
  { id:'c5', cat:'Cils & Browlift', name:"Rehaussement + Teinture + Browlift + Teinture", dur:'1h', price:92 },
  { id:'c6', cat:'Cils & Browlift', name:"Rehaussement + Teinture + Restructuration + Browlift + Teinture", dur:'1h 20min', price:110 },
  { id:'c7', cat:'Cils & Browlift', name:"Extension cils — cil à cil (pose complète)", dur:'1h', price:60 },
  { id:'c8', cat:'Cils & Browlift', name:"Remplissage 2-3 sem. cil à cil", dur:'1h', price:35 },
  { id:'c9', cat:'Cils & Browlift', name:"Extension — volume mixte (pose complète)", dur:'1h 30min', price:70 },
  { id:'c10', cat:'Cils & Browlift', name:"Remplissage 2-3 sem. volume mixte", dur:'1h 30min', price:40 },
  { id:'c11', cat:'Cils & Browlift', name:"Extension — volume russe (pose complète)", dur:'2h', price:90 },
  { id:'c12', cat:'Cils & Browlift', name:"Remplissage 2-3 sem. volume russe", dur:'1h 30min', price:50 },
  { id:'c13', cat:'Cils & Browlift', name:"Dépose / retrait des extensions", dur:'40min', price:15 },
  { id:'o1', cat:'Ongles — Mains', name:"Manucure", dur:'30min', price:20 },
  { id:'o2', cat:'Ongles — Mains', name:"Pose Vernis Semi-permanent mains", dur:'45min', price:35 },
  { id:'o3', cat:'Ongles — Mains', name:"Pose VSP French/Bboomer", dur:'1h', price:45 },
  { id:'o4', cat:'Ongles — Mains', name:"Dépose + Pose VSP", dur:'1h 10min', price:45 },
  { id:'o5', cat:'Ongles — Mains', name:"Dépose + VSP French/Bboomer", dur:'1h 20min', price:55 },
  { id:'o6', cat:'Ongles — Mains', name:"Dépose semi-permanent", dur:'20min', price:15 },
  { id:'o7', cat:'Ongles — Mains', name:"GAINAGE ongles naturels", dur:'1h 30min', price:45 },
  { id:'o8', cat:'Ongles — Mains', name:"GAINAGE French/Baby-Boomers", dur:'1h 30min', price:55 },
  { id:'o9', cat:'Ongles — Mains', name:"Remplissage gainage", dur:'1h 30min', price:45 },
  { id:'o10', cat:'Ongles — Mains', name:"Remplissage gainage French/Bboomer", dur:'1h 40min', price:55 },
  { id:'o11', cat:'Ongles — Mains', name:"Pose Gel rallongement capsules", dur:'2h', price:55 },
  { id:'o12', cat:'Ongles — Mains', name:"Pose Gel rallongement capsules French/Bboomer", dur:'2h', price:65 },
  { id:'o13', cat:'Ongles — Mains', name:"Remplissage gel", dur:'1h 30min', price:45 },
  { id:'o14', cat:'Ongles — Mains', name:"Remplissage gel French/Bboomer", dur:'1h 40min', price:55 },
  { id:'o15', cat:'Ongles — Mains', name:"Remplissage extérieur", dur:'1h 40min', price:50 },
  { id:'o16', cat:'Ongles — Mains', name:"Dépose gel", dur:'30min', price:20 },
  { id:'o17', cat:'Ongles — Mains', name:"Dépose Gel + Manucure", dur:'1h', price:35 },
  { id:'o18', cat:'Ongles — Mains', name:"Réparation ongle cassé", dur:'10min', price:5 },
  { id:'o19', cat:'Ongles — Mains', name:"Chrome", dur:'15min', price:5 },
  { id:'p1', cat:'Soins des Pieds', name:"Beauté des pieds", dur:'30min', price:25 },
  { id:'p2', cat:'Soins des Pieds', name:"Pose VSP pieds", dur:'45min', price:35 },
  { id:'p3', cat:'Soins des Pieds', name:"Pose VSP French/Bboomer pieds", dur:'1h', price:45 },
  { id:'p4', cat:'Soins des Pieds', name:"Dépose + Pose VSP pieds", dur:'1h 15min', price:45 },
  { id:'p5', cat:'Soins des Pieds', name:"Dépose + VSP French/Bboomer pieds", dur:'1h 15min', price:55 },
  { id:'p6', cat:'Soins des Pieds', name:"Dépose semi-permanent pieds", dur:'20min', price:12 },
  { id:'p7', cat:'Soins des Pieds', name:"Dépose + Beauté des pieds", dur:'1h', price:35 },
];

const CATS = ['Tous', ...new Set(ALL_SERVICES.map(s => s.cat))];
let selected = new Set();
let activeTab = 'Tous';

const listEl = document.getElementById('svc-list');
const tabsEl = document.getElementById('cat-tabs');
const totalEl = document.getElementById('total-box');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('contact-form');
const successEl = document.getElementById('success-page');
const formWrap = document.getElementById('form-wrap');

function renderTabs() {
  tabsEl.innerHTML = CATS.map(c => `
    <button class="cat-tab${c === activeTab ? ' active' : ''}" data-cat="${c}">${c}</button>
  `).join('');
  tabsEl.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => { activeTab = btn.dataset.cat; renderTabs(); renderList(); });
  });
}

function renderList() {
  const filtered = activeTab === 'Tous' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.cat === activeTab);
  listEl.innerHTML = filtered.map(s => `
    <div class="svc-row${selected.has(s.id) ? ' selected' : ''}" data-id="${s.id}">
      <div class="svc-check">${selected.has(s.id) ? '✓' : ''}</div>
      <div class="svc-info">
        <div class="svc-name">${s.name}</div>
        <div class="svc-dur">${s.dur}</div>
      </div>
      <div class="svc-p">${s.price} €</div>
    </div>
  `).join('');
  listEl.querySelectorAll('.svc-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.dataset.id;
      if (selected.has(id)) selected.delete(id); else selected.add(id);
      renderList(); renderTotal(); updateBtn();
    });
  });
}

function renderTotal() {
  const items = ALL_SERVICES.filter(s => selected.has(s.id));
  if (!items.length) {
    totalEl.style.border = '1px solid rgba(201,169,110,0.15)';
    totalEl.style.background = 'rgba(255,255,255,0.01)';
    totalEl.innerHTML = '<p class="total-empty">Sélectionnez vos prestations ci-dessus</p>';
    return;
  }
  totalEl.style.border = '1px solid rgba(201,169,110,0.4)';
  totalEl.style.background = 'rgba(201,169,110,0.07)';
  const total = items.reduce((a, s) => a + s.price, 0);
  totalEl.innerHTML = `
    <div class="total-title">${items.length} prestation${items.length > 1 ? 's' : ''} sélectionnée${items.length > 1 ? 's' : ''}</div>
    <div class="total-items">
      ${items.map(s => `
        <div class="total-row">
          <span>${s.name}</span>
          <span style="display:flex;align-items:center;gap:8px;">
            <span class="total-row-price">${s.price} €</span>
            <span class="total-row-del" data-del="${s.id}">✕</span>
          </span>
        </div>
      `).join('')}
    </div>
    <div class="total-sep"></div>
    <div class="total-sum">
      <span class="total-label">Total estimé</span>
      <span class="total-amount">${total} €</span>
    </div>
    <div class="total-note">* Prix indicatifs — Nail art et options sur devis</div>
  `;
  totalEl.querySelectorAll('.total-row-del').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selected.delete(btn.dataset.del);
      renderList(); renderTotal(); updateBtn();
    });
  });
}

function updateBtn() {
  const items = ALL_SERVICES.filter(s => selected.has(s.id));
  const total = items.reduce((a, s) => a + s.price, 0);
  submitBtn.textContent = items.length
    ? `Envoyer ma demande — ${total} €`
    : 'Envoyer ma demande de rendez-vous';
}

form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('f-name').value;
  const items = ALL_SERVICES.filter(s => selected.has(s.id));
  const total = items.reduce((a, s) => a + s.price, 0);

  if (successEl && formWrap) {
    formWrap.style.display = 'none';
    successEl.style.display = 'flex';
    document.getElementById('success-name').textContent = name + ' !';
    const recapEl = document.getElementById('recap-items');
    if (items.length) {
      recapEl.parentElement.style.display = 'block';
      recapEl.innerHTML = items.map(s => `
        <div class="recap-row"><span>${s.name}</span><span style="color:var(--gold);font-weight:600;">${s.price} €</span></div>
      `).join('');
      document.getElementById('recap-total-price').textContent = total + ' €';
    } else {
      recapEl.parentElement.style.display = 'none';
    }
  }
});

renderTabs();
renderList();
renderTotal();
