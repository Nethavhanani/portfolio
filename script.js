document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll( 'sec-tion')
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    }
    
    // scroll events
    window.addEventListener('scroll', updateActiveLink);
    
    // Call once on page load to set initial active link
    updateActiveLink();
    

    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `©️ ${currentYear} Nethavhanani | Computer Scientist & Mathematician`;
    }
    
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    
    console.log(' Portfolio loaded! Welcome to Nethavhanani\'s website.');
    
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Project clicked: ' + this.parentElement.querySelector('h3').innerText);
        });
    });
    
    
    const contactButtons = document.querySelectorAll('.contact-links a');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Contact option clicked: ' + this.innerText);
        });
    });
});