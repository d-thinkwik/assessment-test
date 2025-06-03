document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
      // Optional parameters
      loop: true,
      speed: 800,
      effect: 'slide',
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // Add some effects and callbacks
      on: {
        slideChangeTransitionStart: function() {
          // Animate content when slide changes
          animateContent();
        },
      }
    });
  
    // Function to handle animations
    function animateContent() {
      // Get the active slide
      const activeSlide = document.querySelector('.swiper-slide-active');
      
      if (activeSlide) {
        // Find elements to animate within the active slide
        const image = activeSlide.querySelector('.product-image img');
        const features = activeSlide.querySelectorAll('.feature');
        const cards = activeSlide.querySelectorAll('.ingredient-card');
        const button = activeSlide.querySelector('.customize-btn');
        
        // Reset animations
        resetAnimations(image, features, cards, button);
        
        // Apply animations with slight delays
        setTimeout(() => {
          if (image) image.style.opacity = '1';
        }, 100);
        
        features.forEach((feature, index) => {
          setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
          }, 200 + (index * 100));
        });
        
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 500 + (index * 100));
        });
        
        setTimeout(() => {
          if (button) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
          }
        }, 800);
      }
    }
  
    // Function to reset animations
    function resetAnimations(image, features, cards, button) {
      if (image) {
        image.style.opacity = '0';
        image.style.transition = 'opacity 0.5s ease';
      }
      
      features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      if (button) {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      }
    }
  
    // Add event listeners for "Customize" buttons
    const customizeButtons = document.querySelectorAll('.customize-btn');
    customizeButtons.forEach(button => {
      button.addEventListener('click', function() {
        // This function would trigger your customization modal or redirect to customization page
        console.log('Customize button clicked!');
        
        // Example: Get product info from the current slide
        const currentSlide = this.closest('.swiper-slide');
        const productTitle = currentSlide.querySelector('.ingredient-title').textContent;
        
        // Here you would typically:
        // 1. Open a modal with customization options
        // 2. Or redirect to a customization page with product details
        alert(`Starting customization for: ${productTitle}`);
        
        // In a real application, you would integrate this with your POD platform
        // For Shopify/Etsy integration, you would collect customization data and
        // prepare it for the product creation API
      });
    });
  
    // Run initial animation for the first slide
    setTimeout(animateContent, 300);
  
    // Add touch/swipe support for mobile 
    let touchStartX = 0;
    let touchEndX = 0;
    
    const slider = document.querySelector('.swiper-container');
    
    slider.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    slider.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, false);
    
    function handleSwipe() {
      if (touchEndX < touchStartX) {
        // Swipe left - next slide
        swiper.slideNext();
      }
      if (touchEndX > touchStartX) {
        // Swipe right - previous slide
        swiper.slidePrev();
      }
    }
  });