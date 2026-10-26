const cartKey = 'plus-size-beauty-cart';

function getCart() {
  try {
    const data = localStorage.getItem(cartKey);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function updateCartBadge() {
  const cartCountEls = document.querySelectorAll('.cart-count');
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCountEls.forEach((el) => {
    el.textContent = count;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach((link) => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  const newsletterForms = document.querySelectorAll('.newsletter');
  newsletterForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = form.querySelector('input');
      if (input) {
        input.value = '';
        input.placeholder = 'Thanks for joining!';
      }
    });
  });

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thanks for reaching out! We will get back to you soon.');
      contactForm.reset();
    });
  }

  const affiliateLinks = document.querySelectorAll('.affiliate-link');
  affiliateLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(link.href, '_blank', 'noopener,noreferrer');
    });
  });

  updateCartBadge();
});
