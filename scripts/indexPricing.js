window.addEventListener('DOMContentLoaded', () => {
  // Scroll effect on header
  const header = document.querySelector('.header')
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })
  }

  // Dash animation (ONLY if dash exists)
  const dash = document.querySelector('.dash')
  if (dash) {
    setTimeout(() => {
      dash.classList.add('loaded')
    }, 300)
  }

  // Hamburger menu
  const menuBtn = document.getElementById('menuBtn')
  const sideMenu = document.getElementById('sideMenu')
  const closeBtn = document.getElementById('closeBtn')
  const overlay = document.getElementById('overlay')

  if (menuBtn && sideMenu && overlay) {
    menuBtn.addEventListener('click', () => {
      sideMenu.classList.add('active')
      overlay.classList.add('active')
    })
  }

  if (closeBtn && sideMenu && overlay) {
    closeBtn.addEventListener('click', () => {
      sideMenu.classList.remove('active')
      overlay.classList.remove('active')
    })
  }

  if (overlay && sideMenu) {
    overlay.addEventListener('click', () => {
      sideMenu.classList.remove('active')
      overlay.classList.remove('active')
    })
  }
})
