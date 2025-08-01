const btnHamburger = document.querySelector('#btnHamburger');
const mobileMenu = document.querySelector('.header__menu');
const body = document.body;

btnHamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
  body.classList.toggle('noscroll');
});

const allArticles = [
  { img: 'images/heels.jpg', title: 'The ONLY Heels You Need This Summer' },
  { img: 'images/loungewear.jpg', title: 'Stylish new loungewear for lockdown' },
  { img: 'images/metgala.jpg', title: 'Everything we know about the 2021 Met Gala' },
  { img: 'images/summertrends.png', title: 'The Top Trends for Summer!' },
  { img: 'images/tennis.jpg', title: "Kith x Wilson's Tennis Collection Is Preppy-Cool" },
  { img: 'images/summerfashion.jpg', title: 'Your Summer Wardrobe Is Here' },
  { img: 'images/redcarpet.jpg', title: 'Red carpet looks for the 2022 Film Festival' },
  { img: 'images/shoehistory.jpg', title: 'Iconic Shoe Moments in Movie History' },
  { img: 'images/redhair.jpg', title: '28 Halloween Costumes for People With Red Hair' },
  { img: 'images/halloween-costumes.jpg', title: '10 Halloween Costumes for a College Party' },
  { img: 'images/falltrends.png', title: 'These 10 Trends Will Really Take off Next Fall' },
  { img: 'images/amazonsale.jpg', title: 'Amazon Is Having a Secret Summer Sale' }
];


let showingAll = false;
const grid = document.getElementById('articleGrid');
const toggleBtn = document.getElementById('loadToggleBtn');

function createArticle(article) {
  const item = document.createElement('a');
  item.className = 'article__item';
  item.href = '#';
  item.innerHTML = `
    <div class="article__image" style="background-image: url('${article.img}')"></div>
    <div class="article__text">
      <div class="article__title">${article.title}</div>
      <div class="article__description">...</div>
    </div>
  `;
  item.style.animation = 'fadeInUp 0.5s ease both';
  return item;
}

function renderArticles(limit = 3) {
  grid.innerHTML = '';
  const articlesToShow = showingAll ? allArticles : allArticles.slice(0, limit);
  articlesToShow.forEach(article => grid.appendChild(createArticle(article)));
  toggleBtn.textContent = showingAll ? 'Load Less' : 'Load More';
}

// Initial render
renderArticles();

toggleBtn.addEventListener('click', () => {
  showingAll = !showingAll;
  renderArticles();
});
