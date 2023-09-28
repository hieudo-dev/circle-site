const pages = document.querySelectorAll('.page');

const PAGE_THRESHOLD = 0.1;

for (let i = 0; i < pages.length; i++) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > PAGE_THRESHOLD) {
        entry.target.classList.remove('page--out-of-view');
      }
    });
  }, {
    threshold: PAGE_THRESHOLD
  })
  observer.observe(pages[i])
}