// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

const galleryImage = document.querySelector('.gallery')
galleryImage.insertAdjacentHTML('beforeend', createGalleryImage(galleryItems))

function createGalleryImage(img) {
    return img
    .map(({preview, original, description}) => {
        return `<li> <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> </li>`
    })
    .join('')
}

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionsDelay: 250} );
