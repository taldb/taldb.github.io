      // Initialize GSAP ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);


      const colorThemes = [
        { hex: '#2563eb', name: 'Royal Blue' },
        { hex: '#dc2626', name: 'Ruby Red' },
        { hex: '#16a34a', name: 'Emerald Green' },
        { hex: '#9333ea', name: 'Royal Purple' },
        { hex: '#ea580c', name: 'Burning Orange' },
        { hex: '#0891b2', name: 'Ocean Blue' },
        { hex: '#4f46e5', name: 'Electric Indigo' },
        { hex: '#059669', name: 'Jade Green' },
        { hex: '#db2777', name: 'Pink Rose' },
        { hex: '#854d0e', name: 'Golden Brown' },
        { hex: '#f59e0b', name: 'Sunset Yellow' },
        { hex: '#d4d2cd', name: 'Pale Gray' },
        { hex: '#6d28d9', name: 'Amethyst Purple' },
        { hex: '#6366f1', name: 'Lavender Blue' },
        { hex: '#8b5cf6', name: 'Vivid Violet' },
        { hex: '#10b981', name: 'Mint Green' },
        { hex: '#f43f5e', name: 'Crimson Red' },
        { hex: '#eab308', name: 'Goldenrod Yellow' },
        { hex: '#3b82f6', name: 'Sky Blue' },
        { hex: '#9ca3af', name: 'Slate Gray' }
    ];
    
      function updateThemeColor(color) {
          const root = document.documentElement;
          const hex = color.hex;
          
          // Update CSS variables
          root.style.setProperty('--primary', hex);
          root.style.setProperty('--secondary', adjustColor(hex, -20));
          
          // Update display
          document.querySelector('.color-hex').textContent = hex;
          document.querySelector('.color-name').textContent = color.name;
          
          // Update gradients and other color-dependent elements
          updateGradients(hex);
      }

      function adjustColor(hex, percent) {
          // Convert hex to RGB
          let r = parseInt(hex.slice(1, 3), 16);
          let g = parseInt(hex.slice(3, 5), 16);
          let b = parseInt(hex.slice(5, 7), 16);

          // Adjust brightness
          r = Math.max(0, Math.min(255, r + (percent * 2.55)));
          g = Math.max(0, Math.min(255, g + (percent * 2.55)));
          b = Math.max(0, Math.min(255, b + (percent * 2.55)));

          // Convert back to hex
          return '#' + 
              ((1 << 24) + (Math.round(r) << 16) + 
              (Math.round(g) << 8) + Math.round(b))
              .toString(16).slice(1);
      }

      function updateGradients(primaryColor) {
          const hero = document.querySelector('.hero');
          const beforeColor = adjustColor(primaryColor, 20);
          const afterColor = adjustColor(primaryColor, -20);
          
          // Update hero gradients
          hero.style.setProperty('--before-gradient', beforeColor);
          hero.style.setProperty('--after-gradient', afterColor);
      }

      function getRandomColor() {
          return colorThemes[Math.floor(Math.random() * colorThemes.length)];
      }

      // Initialize with random color on load
      document.addEventListener('DOMContentLoaded', () => {
          const initialColor = getRandomColor();
          updateThemeColor(initialColor);

          // Add click handler to color display
          document.querySelector('.color-display').addEventListener('click', () => {
            document.querySelector('.sidetext').textContent = "";
              let newColor;
              do {
                  newColor = getRandomColor();
              } while (newColor.hex === document.querySelector('.color-hex').textContent);
              updateThemeColor(newColor);
          });
      });

      // Add this to your existing GSAP animations
      gsap.to(".color-display", {
          scrollTrigger: {
              trigger: ".color-display",
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
      });
      
              gsap.to(".project-card", {
          scrollTrigger: {
              trigger: ".project-card",
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
      });

      // Add hover animations for project cards
      document.querySelectorAll('.project-card').forEach(card => {
          card.addEventListener('mouseover', () => {
              gsap.to(card, {
                  scale: 1.02,
                  duration: 0.3
              });
          });

          card.addEventListener('mouseout', () => {
              gsap.to(card, {
                  scale: 1,
                  duration: 0.3
              });
          });
      });

      // Hero animations
      gsap.to("h1", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
      });

      gsap.to(".tagline", {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out"
      });

      gsap.to(".skill", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: "back.out(1.7)"
      });

      gsap.to(".social", {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 1,
          ease: "power3.out"
      });

      // Scroll animations
      gsap.to("h2", {
          scrollTrigger: {
              trigger: "h2",
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
          },
          opacity: 1,
          duration: 1,
          ease: "power3.out"
      });

      gsap.to(".card", {
          scrollTrigger: {
              trigger: ".cards",
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
      });

      gsap.to(".contact-form", {
          scrollTrigger: {
              trigger: ".contact-form",
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
      });

      // Create floating shapes
      function createShapes() {
          const shapes = document.querySelector('.floating-shapes');
          for (let i = 0; i < 15; i++) {
              const shape = document.createElement('div');
              shape.classList.add('shape');
              const size = Math.random() * 100 + 50;
              shape.style.width = `${size}px`;
              shape.style.height = `${size}px`;
              shape.style.left = `${Math.random() * 100}vw`;
              shape.style.top = `${Math.random() * 100}vh`;
              shape.style.animationDelay = `${Math.random() * 20}s`;
              shapes.appendChild(shape);
          }
      }

      createShapes();

      // Hover animations for cards
      document.querySelectorAll('.card').forEach(card => {
          card.addEventListener('mouseover', () => {
              gsap.to(card, {
                  scale: 1.05,
                  duration: 0.3
              });
          });

          card.addEventListener('mouseout', () => {
              gsap.to(card, {
                  scale: 1,
                  duration: 0.3
              });
          });
      });