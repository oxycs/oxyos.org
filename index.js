let pages = document.getElementsByClassName('page');
Array.prototype.forEach.call(document.getElementsByClassName('sectionLink'), link => {
  link.addEventListener('click', e => {
    showPage(`${link.getAttribute('href').slice(1)}-page`);
  });
});

function showPage(page) {
  let target = document.getElementById(page);
  console.log(target);
  Array.prototype.forEach.call(pages, page => {
    page.classList.add('hidden');
  });
  target.classList.remove('hidden');
  window.scrollTo(0,0);
}

let index = document.URL.lastIndexOf('#');
if (index!=-1) showPage(`${document.URL.slice(index+1)}-page`);
