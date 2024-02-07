const carousel = () => {
  const imgWrap = document.querySelector('.img-wrap img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const listImg = document.querySelectorAll('.list-img div');
  // get attribute of element is h1
  const getH1 = document.getElementsByTagName('h1');
  // get element have name is test-name and attribute is h1
  const getH1Name = document.getElementsByName('test-name');
  console.log(getH1Name[0]);

  const getMainContent = document.getElementById('main-content');

  // get attribute of element is h1

  var parent = document.getElementById('demo');
  var childP1 = document.getElementById('p1');

  // not implement
  const getName = document.getElementsByName('test-name');

  // log textContent of element getName
  console.log(getName[0].textContent);

  //log attribute of element
  console.log(getH1);

  getMainContent.innerHTML = 'Inner huyhung';
  var nodeNew = document.createTextNode('This is new.');
  var linkNode = document.createElement('a');
  linkNode.href = 'http://www.google.com';
  linkNode.innerText = 'huyhungNodes';
  linkNode.style.display = 'block';
  linkNode.style.textDecoration = 'none';
  linkNode.style.color = 'black';

  //gắn node vào attribute a
  linkNode.appendChild(nodeNew);

  //gắn a vào div getMainContent
  getMainContent.appendChild(linkNode);

  // remove node in parent
  parent.removeChild(childP1);

  let index = 0;

  function updateIndex(index) {
    currentIndex = index;
    listImg.forEach((item) => {
      console.log(item.classList);
      item.classList.remove('active');
    });
    imgWrap.src = listImg[currentIndex].querySelector('img').src;
    listImg[currentIndex].classList.add('active');
  }

  listImg.forEach((img, idx) => {
    img.addEventListener('click', () => {
      updateIndex(idx);
    });
  });

  prevBtn.addEventListener('click', () => {
    if (index === 0) {
      updateIndex(listImg.length - 1);
    } else {
      updateIndex(index - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (index === listImg.length - 1) {
      updateIndex(0);
    } else {
      updateIndex(index + 1);
    }
  });
};

carousel();
