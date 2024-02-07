let listImg = document.querySelectorAll('.list-img div');
let imgWrap = document.querySelector('.img-wrap img');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let showInnerBtn = document.getElementsByTagName('button');
console.log(showInnerBtn);

console.log(listImg, imgWrap, prevBtn, nextBtn);
let currentIndex = 0;

function updateIndex(index) {
  currentIndex = index;
  listImg.forEach((item) => {
    item.classList.remove('active');
  });
  // ở đây nếu ta gọi const listImg = document.querySelectorAll('.list-img img');
  //  thì không cần queyryselector img. nhưng do chúng ta "cần" gọi tới div để có thể
  // thao tác với classlist "bên trên", nơi mà div có class là"active""." nên ta phải querySelector img ở đây
  imgWrap.src = listImg[currentIndex].querySelector('img').src;
  listImg[currentIndex].classList.add('active');
}

listImg.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    updateIndex(index);
    // item.classList.add('active');
  });
});
// assign event to prevBtn
prevBtn.addEventListener('click', () => {
  if (currentIndex == 0) currentIndex = listImg.length - 1;
  else currentIndex--;
  updateIndex(currentIndex);
});
// assign event to nextBtn
nextBtn.addEventListener('click', () => {
  document.getElementById('main-content').innerHTML = 'hi';
  if (currentIndex == listImg.length - 1) currentIndex = 0;
  else currentIndex++;
  updateIndex(currentIndex);
});
