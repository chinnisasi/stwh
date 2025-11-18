// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Photo Gallery Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.classList.remove('hidden');
                        item.style.opacity = '1';
                    } else {
                        const itemCategory = item.getAttribute('data-category');
                        if (itemCategory === filterValue) {
                            item.classList.remove('hidden');
                            item.style.opacity = '1';
                        } else {
                            item.classList.add('hidden');
                            item.style.opacity = '0';
                        }
                    }
                });
            });
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            console.log('Form submitted:', formObject);

            // Hide form and show success message
            contactForm.style.display = 'none';
            const successMessage = document.getElementById('formSuccess');
            if (successMessage) {
                successMessage.style.display = 'block';
            }

            // Reset form after 5 seconds (optional)
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 5000);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation - including both timeline-item and history-timeline-item
    const animatedElements = document.querySelectorAll('.timeline-item, .history-timeline-item, .value-card, .testimonial-card, .gallery-item');
    animatedElements.forEach(el => {
        // Check if element is already in viewport before setting opacity
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isInViewport) {
            // Only hide if not in viewport
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        } else {
            // Already in viewport, make visible immediately
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            // Still observe in case user scrolls away and back
            observer.observe(el);
        }
    });
    
    // Fallback: Ensure all text content is visible after a short delay
    // This handles cases where IntersectionObserver might not trigger
    setTimeout(() => {
        document.querySelectorAll('.timeline-item, .history-timeline-item').forEach(el => {
            if (el.style.opacity === '0' || window.getComputedStyle(el).opacity === '0') {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }, 1000);

    // Handle image loading errors for elders-deacons page
    const leaderImages = document.querySelectorAll('.leader-avatar img');
    leaderImages.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const icon = this.nextElementSibling;
            if (icon) {
                icon.style.display = 'flex';
            }
        });
        
        img.addEventListener('load', function() {
            this.style.display = 'block';
            const icon = this.nextElementSibling;
            if (icon) {
                icon.style.display = 'none';
            }
        });
    });

    // Support for multiple image formats (PNG, JPG, JPEG) with fallback
    function tryImageFormats(img, basePath) {
        const formats = ['jpg', 'jpeg', 'png'];
        let currentFormatIndex = 0;
        
        function tryNextFormat() {
            if (currentFormatIndex >= formats.length) {
                // All formats tried, image not found
                console.warn('Could not load image with any format:', basePath);
                return;
            }
            
            const ext = formats[currentFormatIndex];
            const newSrc = basePath + '.' + ext;
            
            // Try loading the image
            const testImg = new Image();
            testImg.onload = function() {
                // Image found, update the source
                img.src = newSrc;
            };
            testImg.onerror = function() {
                // Try next format
                currentFormatIndex++;
                tryNextFormat();
            };
            testImg.src = newSrc;
        }
        
        // Start trying formats
        tryNextFormat();
    }
    
    // Apply format fallback to all history timeline images
    const historyImages = document.querySelectorAll('.history-image');
    historyImages.forEach(img => {
        const currentSrc = img.getAttribute('src');
        if (currentSrc) {
            // Remove extension to get base path
            const basePath = currentSrc.replace(/\.(jpg|jpeg|png)$/i, '');
            
            // Add error handler to try other formats if current one fails
            img.addEventListener('error', function onError() {
                img.removeEventListener('error', onError);
                tryImageFormats(img, basePath);
            }, { once: true });
        }
    });

    // Contact Page Tabs
    const contactTabs = document.querySelectorAll('.contact-tab');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    const mapWrappers = document.querySelectorAll('.map-wrapper');
    
    if (contactTabs.length > 0 && tabContents.length > 0) {
        contactTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs
                contactTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab contents
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });
                
                // Show selected tab content
                const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
                
                // Switch maps based on active tab
                mapWrappers.forEach(mapWrapper => {
                    const mapTab = mapWrapper.getAttribute('data-map-tab');
                    if (mapTab === targetTab) {
                        mapWrapper.style.display = 'block';
                    } else {
                        mapWrapper.style.display = 'none';
                    }
                });
            });
        });
    }
});

