import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryEl = document.querySelector('.gallery');

export function imageTemplate(data) {
  const markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="card-item">
  <a href=${largeImageURL}>
  <img src=${webformatURL} alt="${tags}"/>
    <ul class="card-info">
      <li>Likes<p>${likes}</p></li>
      <li>Views<p>${views}</p></li>
      <li>Comments<p>${comments}</p></li>
      <li>Downloads<p>${downloads}</p></li>
    </ul>
    </a>
</li>`;
      }
    )

    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });
  lightbox.refresh();
}
