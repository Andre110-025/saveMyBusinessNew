window.addEventListener('DOMContentLoaded', () => {
  // Scroll effect on header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    if (window.scrollY > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })

  // Dash animation
  const dash = document.querySelector('.dash')
  setTimeout(() => {
    dash.classList.add('loaded')
  }, 300)

  // Hamburger menu
  const menuBtn = document.getElementById('menuBtn')
  const sideMenu = document.getElementById('sideMenu')
  const closeBtn = document.getElementById('closeBtn')
  const overlay = document.getElementById('overlay')

  menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active')
    overlay.classList.add('active')
  })

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active')
    overlay.classList.remove('active')
  })

  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active')
    overlay.classList.remove('active')
  })
})
