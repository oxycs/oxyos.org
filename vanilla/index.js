let pages = document.getElementsByClassName('page');
Array.prototype.forEach.call(document.getElementsByClassName('sectionLink'), link => {
  let target = document.getElementById(`${link.getAttribute('href').slice(1)}-page`);
  link.addEventListener('click', e => {
    Array.prototype.forEach.call(pages, page => {
      page.classList.add('hidden');
    });
    target.classList.remove('hidden');
  });
});
