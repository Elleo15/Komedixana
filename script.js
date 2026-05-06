/* =============================================
   KOMEDIXANA — MAIN JAVASCRIPT
   ============================================= */

/* ---------- TRANSLATIONS ---------- */
const i18n = {
  az: {
    nav_about: "Haqqında",
    nav_episodes: "Bölümlər",
    nav_cast: "Heyət",
    nav_ticket: "Bilet Al",
    nav_sponsors: "Sponsorlar",
    nav_social: "Sosial",

    hero_sub: "Azərbaycanın Ən Sevimli Komediya Şousu",
    badge_sat: "Şənbə — 22:00",
    badge_sun: "Bazar — 22:00",
    badge_tv: "Xəzər TV",
    btn_watch: "İzlə",
    btn_ticket: "Bilet Al",

    about_tag: "Veriliş Haqqında",
    about_title: "Komedixana nədir?",
    about_p1:
      "2019-cu ildən Xəzər TV-də yayımlanan Komedixana, Azərbaycanın ən populyar komediya verilişlərindən biridir. Hər həftə milyonlarla izləyici bu şounu həm televiziyada, həm də YouTube-da izləyir.",
    about_p2:
      "Veriliş yumoristik səhnəciklər, satirik monoloqlar və aktual sosial mövzular üzərində qurulub. Teatr üslubunda hazırlanan hər bölüm tamaşaçılara gülüş, enerji və müsbət düşüncə bəxş edir.",

    stat_since: "İldən bəri",
    stat_eps: "Bölüm",
    stat_actors: "Aktyor",
    stat_weekly: "Həftəlik yayım",

    ep_tag: "Son Bölümlər",
    ep_title: "Bu Həftə",
    ep_sat: "Şənbə Bölümü",
    ep_sun: "Bazar Bölümü",
    ep_card_name: "Komedixana — Yeni Bölüm",
    ep_all: "Bütün Bölümlərə Bax",

    cast_tag: "Aktyor Heyəti",
    cast_title: "Ulduzlarımız",
    cast_role: "Komedixana Aktyoru",
    cast_others: "Digər Aktyorlar",

    ticket_tag: "Canlı İzlə",
    ticket_title: "Bilet Al",
    ticket_desc:
      "KOMEDİXANA çəkilişinə canlı tamaşaçı kimi qatılın! Aşağıdakı formanı doldurun və biz sizinlə əlaqə saxlayaq.",
    form_name: "Ad Soyad",
    form_phone: "Telefon Nömrəsi",
    form_date: "İstədiyiniz Tarix",
    form_count: "Nəfər Sayı",
    form_addr: "📍 Xəzər TV — Nobel prospekti 15, Bakı",
    form_submit: "Müraciət Göndər",
    form_ok:
      "✅ Müraciətiniz qəbul edildi! Tezliklə sizinlə əlaqə saxlanılacaq.",
    opt_1: "1 nəfər",
    opt_2: "2 nəfər",
    opt_3: "3 nəfər",
    opt_4: "4 nəfər",

    sp_tag: "Tərəfdaşlar",
    sp_title: "Sponsorlarımız",
    sp_main: "Baş Sponsorlar",
    sp_other: "Sponsorlar",

    soc_tag: "Rəsmi Səhifələr",
    soc_title: "Bizi İzlə",

    footer_copy: "© 2026 Komedixana. Bütün hüquqlar qorunur. Xəzər TV.",
  },

  ru: {
    nav_about: "О шоу",
    nav_episodes: "Эпизоды",
    nav_cast: "Актёры",
    nav_ticket: "Билет",
    nav_sponsors: "Спонсоры",
    nav_social: "Соцсети",

    hero_sub: "Самое Любимое Комедийное Шоу Азербайджана",
    badge_sat: "Суббота — 22:00",
    badge_sun: "Воскресенье — 22:00",
    badge_tv: "Xəzər TV",
    btn_watch: "Смотреть",
    btn_ticket: "Билет",

    about_tag: "О шоу",
    about_title: "Что такое Komedixana?",
    about_p1:
      "«Komedixana» выходит на Xəzər TV с 2019 года и является одним из самых популярных комедийных шоу Азербайджана. Каждую неделю миллионы зрителей смотрят шоу по телевизору и на YouTube.",
    about_p2:
      "Шоу строится на юмористических сценках, сатирических монологах и актуальных социальных темах. Каждый выпуск дарит зрителям смех, энергию и позитивное настроение.",

    stat_since: "С года",
    stat_eps: "Эпизодов",
    stat_actors: "Актёров",
    stat_weekly: "Эфиров в неделю",

    ep_tag: "Последние эпизоды",
    ep_title: "На этой неделе",
    ep_sat: "Субботний выпуск",
    ep_sun: "Воскресный выпуск",
    ep_card_name: "Komedixana — Новый выпуск",
    ep_all: "Все эпизоды",

    cast_tag: "Актёрский состав",
    cast_title: "Наши звёзды",
    cast_role: "Актёр Komedixana",
    cast_others: "Другие актёры",

    ticket_tag: "Живой эфир",
    ticket_title: "Получить билет",
    ticket_desc:
      "Станьте живым зрителем на съёмках KOMEDİXANA! Заполните форму ниже, и мы свяжемся с вами.",
    form_name: "Имя и Фамилия",
    form_phone: "Номер телефона",
    form_date: "Желаемая дата",
    form_count: "Количество человек",
    form_addr: "📍 Xəzər TV — Проспект Нобеля 15, Баку",
    form_submit: "Отправить заявку",
    form_ok: "✅ Заявка принята! Мы свяжемся с вами в ближайшее время.",
    opt_1: "1 человек",
    opt_2: "2 человека",
    opt_3: "3 человека",
    opt_4: "4 человека",

    sp_tag: "Партнёры",
    sp_title: "Наши спонсоры",
    sp_main: "Генеральные спонсоры",
    sp_other: "Спонсоры",

    soc_tag: "Официальные страницы",
    soc_title: "Следи за нами",

    footer_copy: "© 2026 Komedixana. Все права защищены. Xəzər TV.",
  },

  en: {
    nav_about: "About",
    nav_episodes: "Episodes",
    nav_cast: "Cast",
    nav_ticket: "Tickets",
    nav_sponsors: "Sponsors",
    nav_social: "Social",

    hero_sub: "Azerbaijan's Most Beloved Comedy Show",
    badge_sat: "Saturday — 22:00",
    badge_sun: "Sunday — 22:00",
    badge_tv: "Xəzər TV",
    btn_watch: "Watch",
    btn_ticket: "Get Ticket",

    about_tag: "About The Show",
    about_title: "What is Komedixana?",
    about_p1:
      "Broadcasting on Xəzər TV since 2019, Komedixana is one of Azerbaijan's most popular comedy shows. Every week, millions of viewers watch the show on TV and YouTube.",
    about_p2:
      "The show features humorous sketches, satirical monologues and topical social themes. Every episode brings laughter, energy and positivity to audiences.",

    stat_since: "Since",
    stat_eps: "Episodes",
    stat_actors: "Cast Members",
    stat_weekly: "Weekly Airings",

    ep_tag: "Latest Episodes",
    ep_title: "This Week",
    ep_sat: "Saturday Episode",
    ep_sun: "Sunday Episode",
    ep_card_name: "Komedixana — New Episode",
    ep_all: "All Episodes",

    cast_tag: "Cast",
    cast_title: "Our Stars",
    cast_role: "Komedixana Actor",
    cast_others: "Other Cast Members",

    ticket_tag: "Live Show",
    ticket_title: "Get a Ticket",
    ticket_desc:
      "Join KOMEDIXANA as a live audience member! Fill in the form below and we will contact you.",
    form_name: "Full Name",
    form_phone: "Phone Number",
    form_date: "Preferred Date",
    form_count: "Number of People",
    form_addr: "📍 Xəzər TV — Nobel Avenue 15, Baku",
    form_submit: "Submit Request",
    form_ok: "✅ Request received! We will contact you shortly.",
    opt_1: "1 person",
    opt_2: "2 people",
    opt_3: "3 people",
    opt_4: "4 people",

    sp_tag: "Partners",
    sp_title: "Our Sponsors",
    sp_main: "Main Sponsors",
    sp_other: "Sponsors",

    soc_tag: "Official Pages",
    soc_title: "Follow Us",

    footer_copy: "© 2026 Komedixana. All rights reserved. Xəzər TV.",
  },
};

/* ---------- ACTORS DATA ---------- */
const actors = [
  {
    key: "enver",
    name: "Ənvər Abbasov",
    photo: "assets/actors/enver-abbasov.png",
    insta: "enverabbasov.official",
  },
  {
    key: "hesret",
    name: "Həsrət Həsrətov",
    photo: "assets/actors/hesret-hesretov.png",
    insta: "hasret.hasretov.official",
  },
  {
    key: "xeyale",
    name: "Xəyalə Quliyeva",
    photo: "assets/actors/xeyale-quliyeva.png",
    insta: "xeyalequliyevaofficial",
  },
  {
    key: "zarina",
    name: "Zarina Qurbanova",
    photo: "assets/actors/zarina-qurbanova.png",
    insta: "zarina_qubranova_",
  },
  {
    key: "cavidan",
    name: "Cavidan Novruz",
    photo: "assets/actors/cavidan-novruz.png",
    insta: "cavidan__novruz",
  },
  {
    key: "melek",
    name: "Mələk Kazımova",
    photo: "assets/actors/melek-kazimova.jpg",
    insta: "melek_kazimova",
  },
  {
    key: "mensur",
    name: "Mənsur Şərif",
    photo: "assets/actors/mensur-serif.png",
    insta: "mensur_sherif",
  },
  {
    key: "ilkin",
    name: "İlkin Misgərli",
    photo: "assets/actors/ilkin-misgerli.png",
    insta: "ilkinmisgerli",
  },

  {
    key: "elgun",
    name: "Elgün Hüseynov",
    photo: "assets/actors/elgun-huseynov.png",
    insta: "elgunhuseynov.eh",
  },
  {
    key: "gulzar",
    name: "Gülzar Əşrəfova",
    photo: "assets/actors/gulzar-eshrefova.png",
    insta: "gulzar_official",
  },
];

/* ---------- STATE ---------- */
let currentLang = "az";

/* ---------- APPLY TRANSLATIONS ---------- */
function applyLang(lang) {
  currentLang = lang;
  const t = i18n[lang];

  // update all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // update lang buttons
  document.querySelectorAll(".lang-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // update html lang
  document.documentElement.lang = lang;

  // placeholder-ləri yenilə
  const nameInput = document.getElementById("formName");
  const phoneInput = document.getElementById("formPhone");
  if (nameInput) nameInput.placeholder = t.form_name;
  if (phoneInput)
    phoneInput.placeholder =
      lang === "ru"
        ? "Ваш номер телефона"
        : lang === "en"
          ? "Your phone number"
          : "+994 XX XXX XX XX";
  // option-ları yenilə
  document.querySelectorAll("[data-i18n-opt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-opt");
    if (t[key]) el.textContent = t[key];
  });

  // Modal açıqdırsa role-u da yenilə
  const modalBackdrop = document.getElementById("actorModal");
  if (modalBackdrop.classList.contains("open")) {
    const currentKey = document
      .getElementById("modalPhoto")
      .src.split("/")
      .pop()
      .split(".")[0];
    const actor = actors.find((a) => a.photo.includes(currentKey));
    if (actor) {
      const females = ["xeyale", "zarina", "melek", "gulzar"];
      const roleText = {
        az: females.includes(actor.key)
          ? "KOMEDİXANA Aktrisası"
          : "KOMEDİXANA Aktyoru",
        ru: females.includes(actor.key)
          ? "Актриса KOMEDİXANA"
          : "Актёр KOMEDİXANA",
        en: females.includes(actor.key)
          ? "KOMEDİXANA Actress"
          : "KOMEDİXANA Actor",
      };
      document.getElementById("modalRole").textContent = roleText[lang];
    }
  }
}

/* ---------- NAVBAR SCROLL SHADOW ---------- */
function initNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );
}

/* ---------- HAMBURGER MENU ---------- */
function initHamburger() {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileNav");

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
  });

  // close when a link is clicked
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.classList.remove("open");
    });
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".sr").forEach((el) => obs.observe(el));
}

/* ---------- CAST GRID ---------- */
function buildCastGrid() {
  const grid = document.getElementById("castGrid");
  if (!grid) return;
  grid.innerHTML = "";

  actors.forEach((actor, i) => {
    const card = document.createElement("div");
    card.className = "actor-card sr";
    card.style.transitionDelay = `${i * 0.06}s`;
    card.setAttribute("data-key", actor.key);
    card.innerHTML = `
      <div class="actor-ring">
        <img src="${actor.photo}" alt="${actor.name}" loading="lazy">
      </div>
      <div class="actor-name">${actor.name}</div>
      <div class="actor-handle">@${actor.insta}</div>
    `;
    card.addEventListener("click", () => openModal(actor.key));
    grid.appendChild(card);
  });
}

/* ---------- ACTOR MODAL ---------- */
function buildModalNav(currentKey) {
  const nav = document.getElementById("modalCastNav");
  nav.innerHTML = "";
  actors.forEach((actor) => {
    const btn = document.createElement("button");
    btn.className =
      "modal-cast-thumb" + (actor.key === currentKey ? " active" : "");
    btn.innerHTML = `
      <img src="${actor.photo}" alt="${actor.name}">
      <span>${actor.name.split(" ")[0]}</span>
    `;
    btn.addEventListener("click", () => openModal(actor.key));
    nav.appendChild(btn);
  });
}

function openModal(key) {
  const actor = actors.find((a) => a.key === key);
  if (!actor) return;

  document.getElementById("modalPhoto").src = actor.photo;
  document.getElementById("modalPhoto").alt = actor.name;
  document.getElementById("modalName").textContent = actor.name;
  const females = ["xeyale", "zarina", "melek", "gulzar"];
  const roleText = {
    az: females.includes(actor.key)
      ? "KOMEDİXANA Aktrisası"
      : "KOMEDİXANA Aktyoru",
    ru: females.includes(actor.key) ? "Актриса KOMEDİXANA" : "Актёр KOMEDİXANA",
    en: females.includes(actor.key) ? "KOMEDİXANA Actress" : "KOMEDİXANA Actor",
  };
  document.getElementById("modalRole").textContent = roleText[currentLang];
  document.getElementById("modalInstaLink").href =
    `https://www.instagram.com/${actor.insta}/`;
  document.getElementById("modalInstaText").textContent = `@${actor.insta}`;

  buildModalNav(key);

  const backdrop = document.getElementById("actorModal");
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("actorModal").classList.remove("open");
  document.body.style.overflow = "";
}

function initModal() {
  const backdrop = document.getElementById("actorModal");
  document.getElementById("modalClose").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

/* ---------- TICKET FORM ---------- */
function initForm() {
  const form = document.getElementById("ticketForm");
  const success = document.getElementById("formSuccess");
  const dateEl = document.getElementById("formDate");

  // set min date to today
  if (dateEl) {
    dateEl.min = new Date().toISOString().split("T")[0];
  }

  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    success.style.display = "block";
    success.textContent = i18n[currentLang].form_ok;
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHamburger();
  buildCastGrid();
  initModal();
  initForm();
  loadYoutubeVideos();

  // lang buttons
  document.querySelectorAll(".lang-pill").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  // apply default lang
  applyLang("az");

  // init scroll reveal after a tick (so elements are in DOM)
  requestAnimationFrame(() => initScrollReveal());
});
/* ---------- YOUTUBE API — OTOMATİK BÖLÜMLƏR ---------- */

const YT_API_KEY   = "AIzaSyCExUlNWWdaUh5SVgfNHzOT9LY6ddHlbSg";
const YT_CHANNEL   = "UCDy7cFjy7lpiHXwuy8zZxrg";
const YT_MAX       = 12;

async function loadYoutubeVideos() {
  const grid = document.querySelector(".episodes-grid-single");

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${YT_API_KEY}&channelId=${YT_CHANNEL}&part=snippet&order=date&maxResults=14&type=video`;
    const res  = await fetch(url);
    const data = await res.json();

    if (!data.items || data.items.length === 0) return;

    // --- BU HƏFTƏ: son 2 video ---
    const sunday  = data.items[0]; // ən yeni → Bazar
    const saturday = data.items[1]; // ikinci   → Şənbə

    const satIframe = document.getElementById("saturdayIframe");
    const sunIframe = document.getElementById("sundayIframe");
    const satName   = document.getElementById("saturdayName");
    const sunName   = document.getElementById("sundayName");

    if (satIframe) satIframe.src = `https://www.youtube.com/embed/${saturday.id.videoId}`;
    if (sunIframe) sunIframe.src = `https://www.youtube.com/embed/${sunday.id.videoId}`;
    if (satName)   satName.textContent = saturday.snippet.title;
    if (sunName)   sunName.textContent = sunday.snippet.title;

    // --- ƏVVƏLKİ BÖLÜMLƏR: qalan videolar ---
    if (!grid) return;
    grid.innerHTML = "";

    data.items.slice(2).forEach((item, i) => {
      const videoId = item.id.videoId;
      const title   = item.snippet.title;

      const card = document.createElement("div");
      card.className = "episode-card sr";
      card.style.transitionDelay = `${i * 0.05}s`;
      card.innerHTML = `
        <div class="episode-embed">
          <iframe
            src="https://www.youtube.com/embed/${videoId}"
            title="${title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="episode-meta">
          <div class="episode-day">Yeni Bölüm</div>
          <div class="episode-name">${title}</div>
        </div>
      `;
      grid.appendChild(card);
    });

    grid.querySelectorAll(".sr").forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      obs.observe(el);
    });

  } catch (err) {
    console.error("YouTube API xətası:", err);
  }
}
    // yeni kartlara scroll reveal tətbiq et
    grid.querySelectorAll(".sr").forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      obs.observe(el);
    });

  } catch (err) {
    console.error("YouTube API xətası:", err);
    grid.innerHTML = `<p style="color:var(--cream-mid);grid-column:1/-1;text-align:center">Videolar yüklənmədi.</p>`;
  }
}
