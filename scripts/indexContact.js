// const faqItems = document.querySelectorAll(".faq-item");
// const cards = document.querySelectorAll('.card');
// const sections = {
//   general: document.querySelector(".general-section"),
//   prescriptions: document.querySelector(".assist-container"),
//   business: document.querySelector(".business-section"),
//   support: document.querySelector(".support-section")
// };

// cards.forEach(card => {
//   card.addEventListener('click', () => {
//     cards.forEach(c => c.classList.remove('active'));
//     card.classList.add('active');

//     Object.values(sections).forEach(sections => sections.style.display = "none");
//     const value = card.getAttribute("data-inquiry");
//     if (sections[value]) {
//       sections[value].style.display = "flex";
//       sections[value].scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// faqItems.forEach(item => {
//   const question = item.querySelector(".faq-question");
//   question.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });

// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

//   // Hamburger menu
//   const menuBtn = document.getElementById('menuBtn')
//   const sideMenu = document.getElementById('sideMenu')
//   const closeBtn = document.getElementById('closeBtn')
//   const overlay = document.getElementById('overlay')

//   menuBtn.addEventListener('click', () => {
//     sideMenu.classList.add('active')
//     overlay.classList.add('active')
//   })

//   closeBtn.addEventListener('click', () => {
//     sideMenu.classList.remove('active')
//     overlay.classList.remove('active')
//   })

//   overlay.addEventListener('click', () => {
//     sideMenu.classList.remove('active')
//     overlay.classList.remove('active')
//   })

//   const form = document.getElementById("businessForm");
// const toast = document.getElementById("toast");

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // stop real submit for now

//   // clear form fields
//   form.reset();

//   // show toast
//   toast.classList.add("show");

//   // hide toast after 3 seconds
//   setTimeout(() => {
//     toast.classList.remove("show");
//   }, 3000);
// });

const faqItems = document.querySelectorAll(".faq-item");
const cards = document.querySelectorAll('.card');
const form = document.getElementById("support-section")
 const businessForm = document.getElementById('businessForm');
const sections = {
  general: document.querySelector(".general-section"),
  dashboard: document.querySelector(".assist-container"), 
  business: document.querySelector(".business-section"),
  support: document.querySelector(".support-section")
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    // remove all active states
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // hide all sections
    Object.values(sections).forEach(section => {
      if (section) section.style.display = "none";
    });

    // show the one that matches
    const value = card.getAttribute("data-inquiry");
    if (sections[value]) {
      sections[value].style.display = "flex";
      sections[value].scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// FAQ dropdown
faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Navbar scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  form.reset(); 
  console.log("form subiit")
});
 
businessForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    businessForm.reset();   
    console.log("Inquiry sent!")
  });