import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation-element.min.css';
import 'swiper/modules/pagination/pagination-element.min.css';

import { getMasterProductList } from "../utilities/masterapi";
import { getProductDetail } from "../utilities/productapi";

const ulEl = document.querySelector('nav ul');
const visualSliderEl = document.querySelector('.visual .swiper');
const newItemSliderEl = document.querySelector('.new-items .swiper');
const newItemSliderWrapperEl = newItemSliderEl.querySelector('.swiper-wrapper');
const recommendEl = document.querySelector('.recommend');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-inView')
    }
  })
}, {
  threshold: 0.35
})

ulEl.addEventListener('mouseover', e => {
  Array.from(ulEl.children).forEach((liEl) => {
    liEl.firstChild.classList.add('blur');
  });

  e.target.classList.remove('blur')
});

ulEl.addEventListener('mouseout', () => {
  Array.from(ulEl.children).forEach((liEl) => {
    liEl.firstChild.classList.remove('blur');
  });
})

;(
  async function () {
    const res = await getMasterProductList();
    products = res;
    console.log(res);

    renderNewItems(res)
    renderRecommendItems(res[0])
    renderRecommendItems(res[1],true)
  }
)();

function renderNewItems(items) {
  items = items.filter((item) =>  item.tags.includes('new'));
  const loadingEl = document.querySelector('.new-items .loading')

  items.forEach((item) => {
    const divEl = document.createElement('div');
    const thumbnailEl = document.createElement('div');
    const descEl = document.createElement('div');
    const tagsEl = document.createElement('div');
    const itemNameEl = document.createElement('h3');
    const priceEl = document.createElement('span');

    itemNameEl.textContent = item.title;
    priceEl.textContent = `￦ ${item.price.toLocaleString()}`;
  
    thumbnailEl.style.backgroundImage = `url(${item.thumbnail})`;

    divEl.classList.add('swiper-slide');
    thumbnailEl.classList.add('thumbnail');
    descEl.classList.add('desc');
    tagsEl.classList.add('tags');
    priceEl.classList.add('price')
  
    item.tags.map((tag, idx) => {
      if ( idx === 0 ) return

      const tagEl = document.createElement('span');

      tagEl.textContent = tag;
      tagEl.classList.add(tag)

      tagsEl.append(tagEl);
    });

    newItemSliderWrapperEl.append(divEl);
    divEl.append(thumbnailEl, descEl);
    descEl.append(tagsEl, itemNameEl, priceEl);
  })

  loadingEl.remove();
}

async function renderRecommendItems(item, isReverse) {
  const itemDetail = await getProductDetail(item.id);
  const loadingEl = document.querySelector('.recommend .loading')

  const recommendItemEl = document.createElement('div');
  const thumbnailEl = document.createElement('img');
  const descEl = document.createElement('div');
  const categoryEl = document.createElement('span');
  const itemNameEl = document.createElement('h3');
  const itemDescEl = document.createElement('p');
  const seeMoreBtnEl = document.createElement('button');

  recommendItemEl.classList.add('fade-item');
  recommendItemEl.classList.add('recommend-item');
  if(isReverse) recommendItemEl.classList.add('reverse');
  descEl.classList.add('desc');
  seeMoreBtnEl.classList.add('darken-btn');

  thumbnailEl.setAttribute('src', item.thumbnail);
  thumbnailEl.setAttribute('alt', item.title);

  categoryEl.textContent = item.tags[0];
  itemNameEl.textContent = item.title;
  itemDescEl.textContent = itemDetail.description;
  seeMoreBtnEl.textContent = '자세히보기'

  recommendEl.append(recommendItemEl);
  recommendItemEl.append(thumbnailEl, descEl);
  descEl.append(categoryEl, itemNameEl, itemDescEl, seeMoreBtnEl);

  
  io.observe(recommendItemEl);
  loadingEl ? loadingEl.remove() : null;
}

new Swiper(visualSliderEl, {
  modules: [Pagination, Autoplay],
  // loop : true,
  slidesPerView: 1,
  speed : 1500,
  autoplay:  {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el : '.swiper-pagination',
  }
})
    
new Swiper(newItemSliderEl, {
  modules: [Navigation],
  // loop : true,
  slidesPerView : 4,
  spaceBetween: 35,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
