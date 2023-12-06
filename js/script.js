document.addEventListener('DOMContentLoaded', function () {
  var slider = document.getElementById('slider');
  var images = slider.getElementsByTagName('img');
  var currentIndex = 0;

  function showImage(index) {
      for (var i = 0; i < images.length; i++) {
          images[i].style.display = 'none';
      }
      images[index].style.display = 'block';
  }

  function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  }

  function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
  }

  showImage(currentIndex);

  slider.addEventListener('click', nextImage);
  slider.addEventListener('contextmenu', function (event) {
      event.preventDefault();
      prevImage();
  });
});