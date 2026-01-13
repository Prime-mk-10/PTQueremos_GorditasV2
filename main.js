// Datos del menú
const menuItems = [
  { 
    name: 'Gordita de Chicharrón', 
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: 'Deliciosa gordita rellena de chicharrón prensado con salsa roja, lechuga, crema y queso.', 
    price: '$25'
  },
  { 
    name: 'Gordita de Pollo', 
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: 'Gordita con pollo deshebrado en salsa verde, acompañado de cebolla y cilantro.', 
    price: '$25'
  },
  { 
    name: 'Gordita de Tinga', 
    image: 'https://images.unsplash.com/photo-1610057099443-648d9c8d8196?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: 'Tinga de pollo o res con chipotle, servida en gordita calientita.', 
    price: '$25'
  },
  { 
    name: 'Gordita de Barbacoa', 
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: 'Barbacoa de res estilo Hidalgo, con su consomé y salsa borracha.', 
    price: '$28'
  },
  { 
    name: 'Gordita de Rajas', 
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: 'Rajas de chile poblano con queso y cebolla, un clásico vegetariano.', 
    price: '$22'
  },
  { 
    name: 'Gordita de Picadillo', 
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: 'Picadillo de res con papas, zanahorias y especias, todo guisado a la perfección.', 
    price: '$25'
  }
];

// Datos de combos
const comboItems = [
  { 
    name: 'Combo Familiar', 
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: '6 gorditas (a elegir), 2 aguas frescas de 1L, y papas a la francesa.', 
    price: '$220'
  },
  { 
    name: 'Combo Individual', 
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: '2 gorditas (a elegir), 1 agua fresca de 500ml, y una orden de frijoles charros.', 
    price: '$80'
  },
  { 
    name: 'Combo Pareja', 
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: '4 gorditas (a elegir), 2 aguas frescas de 500ml, y guacamole.', 
    price: '$150'
  },
  { 
    name: 'Combo Desayuno', 
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: '2 gorditas (a elegir), café o chocolate, y fruta de temporada.', 
    price: '$70'
  },
  { 
    name: 'Combo Estudiantil', 
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: '3 gorditas (a elegir) y 1 refresco de 600ml. ¡Perfecto para el lunch!', 
    price: '$90'
  },
  { 
    name: 'Combo Fiesta', 
    image: 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
    description: '12 gorditas (mezcladas), 3L de agua fresca, guacamole y papas.', 
    price: '$450'
  }
];

// Carrusel de imágenes
const carouselImages = [
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
];

let currentSlide = 0;

// Funciones del carrusel
function renderCarousel() {
  const carouselInner = document.getElementById('carousel-inner');
  carouselInner.innerHTML = '';
  
  carouselImages.forEach((image, index) => {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `
      <img src="${image}" alt="Gorditas del día ${index + 1}" class="w-full h-64 md:h-96 object-cover">
    `;
    carouselInner.appendChild(div);
  });
  
  updateCarousel();
}

function updateCarousel() {
  const carouselInner = document.getElementById('carousel-inner');
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselImages.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
}

// Render Menú Diario
function renderMenuItems() {
  const menuContainer = document.getElementById('menu-items');
  menuContainer.innerHTML = '';
  
  menuItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item bg-white p-4 md:p-6 rounded-xl shadow-lg';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-full h-48 md:h-56 object-cover rounded-lg mb-4">
      <h3 class="text-xl md:text-2xl font-bold mb-2 text-[#002244]">${item.name}</h3>
      <p class="text-gray-600 mb-4 text-sm md:text-base">${item.description}</p>
      <div class="price-tag text-base md:text-lg">${item.price}</div>
    `;
    menuContainer.appendChild(div);
  });
}

// Render Combos
function renderComboItems() {
  const comboContainer = document.getElementById('combo-items');
  comboContainer.innerHTML = '';
  
  comboItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item bg-white p-4 md:p-6 rounded-xl shadow-lg';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-full h-48 md:h-56 object-cover rounded-lg mb-4">
      <h3 class="text-xl md:text-2xl font-bold mb-2 text-[#002244]">${item.name}</h3>
      <p class="text-gray-600 mb-4 text-sm md:text-base">${item.description}</p>
      <div class="price-tag text-base md:text-lg">${item.price}</div>
    `;
    comboContainer.appendChild(div);
  });
}

// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');
  menu.classList.toggle('active');
  
  if (menu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}

// Cerrar menú móvil al hacer clic fuera de él
document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  
  if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target) && menu.classList.contains('active')) {
    menu.classList.remove('active');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Inicializar todo al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  renderCarousel();
  renderMenuItems();
  renderComboItems();
  
  // Auto slide cada 5 segundos
  setInterval(nextSlide, 5000);
  
  // Cerrar menú móvil al hacer clic en un enlace
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.remove('active');
      document.getElementById('menu-icon').classList.remove('fa-times');
      document.getElementById('menu-icon').classList.add('fa-bars');
    });
  });
  
  // Añadir clase activa al enlace del menú actual
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if(scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('text-[#ffcc99]');
      if(link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-[#ffcc99]');
      }
    });
  });
  
 // Detectar cambios en el tamaño de la pantalla
    window.addEventListener('resize', function() {
    // Si la pantalla es mayor a 1023px y el menú móvil está abierto, cerrarlo
    if (window.innerWidth >= 1024) {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');
        if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        }
    }
    });
});