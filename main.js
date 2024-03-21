let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showPage(index) {
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
}

function prevPage() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showPage(currentIndex);
}

function nextPage() {
  currentIndex = (currentIndex + 1) % items.length;
  showPage(currentIndex);
}