    // ============================================
    // PREMIUM LOADING ANIMATION
    // ============================================
    (function() {
      const loaderWrapper = document.getElementById('loaderWrapper');
      const loadingProgress = document.getElementById('loadingProgress');
      const loadingPercentage = document.getElementById('loadingPercentage');
      const contentWrapper = document.querySelector('.content-wrapper');
      
      let progress = 0;
      const duration = 3000; // 3 seconds
      const steps = 100;
      const increment = 100 / steps;
      const interval = duration / steps;
      
      // Simulate loading progress
      const loadingInterval = setInterval(() => {
        progress += increment;
        
        if (progress >= 100) {
          progress = 100;
          clearInterval(loadingInterval);
          
          // Hide loader after completion
          setTimeout(() => {
            loaderWrapper.classList.add('hidden');
            contentWrapper.classList.add('visible');
            document.body.style.overflow = 'auto';
          }, 500);
        }
        
        loadingProgress.style.width = progress + '%';
        loadingPercentage.textContent = Math.round(progress) + '%';
      }, interval);
      
      // Ensure body doesn't scroll during loading
      document.body.style.overflow = 'hidden';
      
      // Fallback: Force hide loader after 4 seconds
      setTimeout(() => {
        if (!loaderWrapper.classList.contains('hidden')) {
          loaderWrapper.classList.add('hidden');
          contentWrapper.classList.add('visible');
          document.body.style.overflow = 'auto';
        }
      }, 4000);
    })();

    // ============================================
    // LOADING SCREEN CODE PARTICLES
    // ============================================
    (function() {
      const loaderWrapper = document.getElementById('loaderWrapper');
      if (!loaderWrapper) return;

      // Create particles container
      const particlesContainer = document.createElement('div');
      particlesContainer.style.cssText = `
        position: absolute;
        inset: 0;
        z-index: 5;
        pointer-events: none;
        overflow: hidden;
      `;
      loaderWrapper.insertBefore(particlesContainer, loaderWrapper.firstChild);

      // Code symbols for particles
      const symbols = ['<', '>', '{', '}', '[', ']', '/', '*', '+', '=', ';', '(', ')', '$', '#'];
      
      // Create floating particles
      function createParticle() {
        const particle = document.createElement('div');
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.cssText = `
          position: absolute;
          font-family: 'JetBrains Mono', monospace;
          font-size: ${12 + Math.random() * 12}px;
          color: rgba(0, 255, 136, ${0.2 + Math.random() * 0.3});
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: floatParticle ${5 + Math.random() * 10}s linear infinite;
          pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 15000);
      }

      // Add CSS animation for particles
      const style = document.createElement('style');
      style.textContent = `
        @keyframes floatParticle {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);

      // Create initial particles
      for (let i = 0; i < 20; i++) {
        setTimeout(() => createParticle(), i * 100);
      }

      // Keep creating particles during loading
      const particleInterval = setInterval(createParticle, 300);

      // Stop creating particles when loading is done
      setTimeout(() => {
        clearInterval(particleInterval);
      }, 3500);
    })();

    // ============================================
    // ANIMATED CODER BACKGROUND
    // ============================================
    (function() {
      // Create code background container
      const codeBg = document.createElement('div');
      codeBg.className = 'code-bg';
      document.body.appendChild(codeBg);

      // Code snippets to display (developer themed)
      const codeSnippets = [
        'const developer = "Piyush Mehta";',
        'function buildAmazingThings() {',
        'return innovation + passion;',
        '}',
        'npm install creativity',
        'git commit -m "Made it awesome"',
        'SELECT * FROM opportunities;',
        '<?php echo "Hello World"; ?>',
        'const skills = ["PHP", "JS", "MySQL"];',
        'while(coding) { learn(); }',
        'if (challenge) { solve(); }',
        'let dreams = reality;',
        'class Developer { build() {} }',
        'query SELECT success FROM effort;',
        'import passion from "heart";',
        'async function achieve() {',
        'return await hardWork();',
        'document.querySelector(".success")',
        'console.log("Building the future");',
        'background: linear-gradient()',
        'transform: translateX(100%);',
        'animation: fadeIn 2s ease;',
        '$sql = "INSERT INTO projects";',
        'for(let i=0; i<infinity; i++) {',
        'position: absolute; top: 0;',
        'z-index: 9999; opacity: 1;',
        'margin: auto; display: flex;',
        'justify-content: center;',
        'align-items: center;'
      ];

      // Create falling code lines
      function createCodeLine() {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random positioning
        codeLine.style.left = Math.random() * 100 + '%';
        codeLine.style.animationDuration = (15 + Math.random() * 10) + 's';
        codeLine.style.animationDelay = Math.random() * 5 + 's';
        
        // Random colors (mostly green, some cyan)
        const colors = [
          'rgba(0, 255, 136, 0.6)',
          'rgba(0, 212, 255, 0.5)',
          'rgba(0, 255, 136, 0.4)',
          'rgba(100, 255, 200, 0.5)'
        ];
        codeLine.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        codeBg.appendChild(codeLine);

        // Remove after animation
        setTimeout(() => {
          if (codeLine.parentNode) {
            codeLine.remove();
          }
        }, 30000);
      }

      // Create initial code lines
      for (let i = 0; i < 15; i++) {
        setTimeout(() => createCodeLine(), i * 500);
      }

      // Continuously add new code lines
      setInterval(createCodeLine, 2000);
    })();

    // ============================================
    // PORTFOLIO CODE
    // ============================================
    // Projects Data
    const projects = [
      {
        title: 'Surgical Equipment E-commerce',
        desc: 'Full-stack e-commerce platform with secure payment integration, inventory management, and admin dashboard.',
        tech: ['PHP', 'MySQL', 'Bootstrap']
      },
      {
        title: 'Portfolio CMS',
        desc: 'Headless content management system with REST API for dynamic portfolio websites.',
        tech: ['JavaScript', 'PHP', 'API']
      },
      {
        title: 'Employee Attendance System',
        desc: 'Real-time attendance tracking solution with reporting dashboard and analytics.',
        tech: ['PHP', 'MySQL', 'Charts.js']
      }
    ];

    // Render Projects
    function renderProjects() {
      const grid = document.getElementById('projectsGrid');
      if (!grid) {
        console.error('Projects grid not found');
        return;
      }
      
      grid.innerHTML = projects.map((project, i) => `
        <div class="project-card reveal">
          <div class="project-header">
            <div class="project-number">0${i + 1}</div>
          </div>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <div class="tech-stack">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      `).join('');
      
      // Re-observe new project cards for scroll reveal animation
      setTimeout(() => {
        const projectCards = grid.querySelectorAll('.project-card.reveal');
        projectCards.forEach(card => {
          if (revealObserver) {
            revealObserver.observe(card);
          }
        });
      }, 100);
    }

    // Navbar Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
        }
      });
    });

    // Active Nav Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
        }
      });
    });

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(reveal => revealObserver.observe(reveal));

    // Skill Bars Animation
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width;
        }
      });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));

    // Init - CALL ALL FUNCTIONS
    renderProjects();
      