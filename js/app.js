// ===== NAVBAR SCROLL & ACTIVE =====
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');

    const target = document.getElementById(tab.dataset.target);
    if(target){
      window.scrollTo({top: target.offsetTop - 60, behavior:'smooth'});
    }
  });
});

// ===== SCROLL SPY =====
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight/3;
  document.querySelectorAll('section').forEach(section => {
    if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){
      const id = section.getAttribute('id');
      tabs.forEach(tab => { tab.classList.toggle('active', tab.dataset.target === id); });
    }
  });
});
