const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.js-gallery');
const closeBtn = document.querySelector('.lightbox__button');
const lightboxContainer = document.querySelector ('.js-lightbox');
const lightboxPicture = document.querySelector ('.lightbox__image');
const lightboxOverlay = document.querySelector ('.lightbox__overlay');

console.log(galleryList);
console.log(closeBtn);
console.log(lightboxContainer);
console.log(lightboxPicture);

const cardsMarkup = createPicturesGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", cardsMarkup);

function createPicturesGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

//---- открываем модалку/закрываем ----
galleryList.addEventListener('click', onOpenModal); 

//---- функция открытия модалки
function onOpenModal (evt) {
 
  evt.preventDefault(); //---- предотвращаем переход по ссылке href
  if (evt.target.nodeName !== "IMG") { //---- если клацнуть куда либо, кроме img, то модалка не появится
    return;
    } 
  lightboxContainer.classList.add("is-open"); // ---- добавляем класс для открытия модалки
  lightboxPicture.src = evt.target.dataset.source; // ---- ? подставляем ссылку на картинку в оригинальном размере в открытой модалке в соответствующую строку
  closeBtn.addEventListener("click", onCloseModal); //---- вешаем слушателя на клик по кнопке на закрытие модалки внутри функции (иначе не сработает на всех картинках)
  lightboxOverlay.addEventListener("click", onCloseModal) //---- вешаем слушателя на клик на оверлей и вызываем закрытие модалки
};

//---- функция закрытия модалки
function onCloseModal () {
  lightboxContainer.classList.remove("is-open"); //---- удаляем класс для закрытия модалки
  lightboxPicture.src = ""; //---- убираем атрибуты открытой ранее в модалке картинки
  // closeBtn.removeEventListener("click", onCloseModal); ???
};







