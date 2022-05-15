function onScroll() {
  showNavOnScroll()
  showBackToTopButton()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else navigation.classList.remove('scroll')
}

function showBackToTopButton() {
  if (scrollY > 800) {
    backToTopButton.classList.add('show')
  } else backToTopButton.classList.remove('show')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .numDiv,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#about .content img,
#contact,
#contact img
`)
