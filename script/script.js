const thumbnails = document.querySelectorAll('.recom-images-thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImage.src = this.src;
  });
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
