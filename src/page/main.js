import "../style/main.scss";

import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation-element.min.css';
import 'swiper/modules/pagination/pagination-element.min.css';

import { getMasterProductList } from "../utilities/masterapi";
import { getProductDetail } from "../utilities/productapi";
import { router } from "../route"

export function renderMainPage() {
  const app = document.querySelector("#app");
  app.innerHTML = /* html */`
    <div class="visual">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
          <div class="swiper-slide"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <section>
      <div class="new-items">
        <h2>새로 나왔어요</h2>

        <div class="swiper ">
          <div class="swiper-wrapper">
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <span class="loading">loading</span>
      </div>

      <div class="main--recommend">
        <h2>이런 가구 어때요?</h2>
        <span class="loading">loading</span>
      </div>
    </section>
  `

  const visualSliderEl = document.querySelector('.visual .swiper');
  const newItemSliderEl = document.querySelector('.new-items .swiper');
  const newItemSliderWrapperEl = newItemSliderEl.querySelector('.swiper-wrapper');
  const recommendEl = document.querySelector('.main--recommend');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fade-inView')
      }
    })
  }, {
    threshold: 0.35
  })

  ;(
    async function () {
      const res = await getMasterProductList();
      console.log(res);
  
      renderNewItems(res)

      const bestItems = res.filter((item) => item.tags.includes('best'))
      renderRecommendItems(bestItems[0])
      renderRecommendItems(bestItems[1],true)

    }
  )();
  
  function renderNewItems(items) {
    items = items.filter((item) =>  item.tags.includes('new'));
    items.splice(12, );
    const loadingEl = document.querySelector('.new-items .loading')
  
    items.forEach((item) => {
      const divEl = document.createElement('div');
      const thumbnailEl = document.createElement('div');
      const descEl = document.createElement('div');
      const tagsEl = document.createElement('div');
      const itemNameEl = document.createElement('h3');
      const priceEl = document.createElement('span');
  
      itemNameEl.textContent = item.title;
      priceEl.textContent = item.isSoldOut ? '￦ 품절되었습니다' : `￦ ${item.price.toLocaleString()}`;
    
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

      divEl.addEventListener('click', () => {
        router.navigate(`/product/detail/${item.id}`);
      });
    });
  
    if(loadingEl) {
      loadingEl.remove();
    }
  }
  
  async function renderRecommendItems(item, isReverse) {
    const itemDetail = await getProductDetail(item.id);
    const loadingEl = document.querySelector('.main--recommend .loading')
  
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

    seeMoreBtnEl.addEventListener('click', () => {
      router.navigate(`/product/detail/${item.id}`);
    });
  }

  new Swiper(visualSliderEl, {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    speed : 1500,
    autoplay:  {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el : '.swiper-pagination',
    },
  });
      
  new Swiper(newItemSliderEl, {
    modules: [Navigation],
    slidesPerView : 4,
    spaceBetween: 35,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}