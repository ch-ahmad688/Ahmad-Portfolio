// Data
const projects = [
    { icon: "fas fa-store", title: "Cook And Maid", desc: "Complete home service booking platform with real-time tracking, payment integration, and chat system.", tags: ["Flutter", "Firebase", "GetX"] },
    { icon: "fas fa-store", title: "Rezorent", desc: "E-commerce solution with 10k+ downloads, featuring AI recommendations and AR try-on.", tags: ["Flutter", "Firebase", "GetX"] },
    { icon: "fas fa-motorcycle", title: "Bike Shopping", desc: "Multi-vendor bike marketplace with live inventory, reviews, and secure payments.", tags: ["Flutter", "MySQL", "REST API"] },
];

const skills = [
    { icon: "fab fa-flutter", name: "Flutter & Dart", level: "Expert" },
    { icon: "fab fa-php", name: "PHP", level: "Advanced" },
    { icon: "fas fa-database", name: "MySQL/Firebase", level: "Advanced" },
    { icon: "fab fa-react", name: "React.js", level: "Intermediate" },
    { icon: "fas fa-cloud", name: "Cloud Services", level: "Advanced" },
    { icon: "fab fa-git-alt", name: "Git & CI/CD", level: "Expert" },
    { icon: "fas fa-mobile-alt", name: "iOS & Android", level: "Advanced" }
];

const experiences = [
    { year: "Feb 2026 - Present", title: "Junior Flutter Developer", company: "Jeux Developer", desc: "Built 5+ cross-platform apps with 5k+ combined downloads and 4.8+ ratings." },
    { year: "Dec 2025 - Jan 2026", title: "Flutter Developer", company: "DevelopersHub Corporation", desc: "Built cross-platform apps with 1k+ combined downloads and 4.8+ ratings." },
    { year: "July 2025 - Nov 2025", title: "Junior Developer", company: "StartUp Hub", desc: "Started Flutter journey, learned and contributed to live projects, mastered core concepts." }
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <div class="project-icon"><i class="${p.icon}"></i></div>
            <h3>${p.title}</h3>
            <p style="color: #94a3b8; margin-bottom: 15px; font-size: 0.9rem;">${p.desc}</p>
            <div>${p.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}</div>
        </div>
    `).join('');
}

// Render Skills
function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    container.innerHTML = skills.map(s => `
        <div class="skill-card">
            <div class="skill-icon"><i class="${s.icon}"></i></div>
            <h4>${s.name}</h4>
            <p style="color: #1E88E5; font-size: 0.8rem;">${s.level}</p>
        </div>
    `).join('');
}

// Render Experience
function renderExperience() {
    const container = document.getElementById('timeline');
    if (!container) return;
    container.innerHTML = experiences.map(exp => `
        <div class="timeline-item">
            <div style="color: #1E88E5; font-weight: bold; margin-bottom: 8px; font-size: 0.9rem;">${exp.year}</div>
            <h3 style="margin-bottom: 5px;">${exp.title}</h3>
            <div style="color: #6C63FF; margin-bottom: 10px; font-size: 0.9rem;">${exp.company}</div>
            <p style="color: #94a3b8; font-size: 0.9rem;">${exp.desc}</p>
        </div>
    `).join('');
}

// Scroll to section
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Generate stars
function generateStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    starsContainer.innerHTML = '';
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.setProperty('--duration', Math.random() * 3 + 1 + 's');
        starsContainer.appendChild(star);
    }
}

// Generate floating shapes
function generateShapes() {
    const shapesContainer = document.getElementById('shapes');
    if (!shapesContainer) return;
    shapesContainer.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.style.width = Math.random() * 150 + 50 + 'px';
        shape.style.height = shape.style.width;
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 10 + 's';
        shape.style.animationDuration = Math.random() * 20 + 10 + 's';
        shapesContainer.appendChild(shape);
    }
}

// Custom cursor
function initCursor() {
    if (window.innerWidth < 769) return;
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    if (!cursor || !cursorDot) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        cursorDot.style.transform = `translate(${e.clientX - 2.5}px, ${e.clientY - 2.5}px)`;
    });
    
    const interactiveElements = document.querySelectorAll('button, .project-card, .skill-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = `scale(1.5)`;
            cursorDot.style.transform = `scale(0.5)`;
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = `scale(1)`;
            cursorDot.style.transform = `scale(1)`;
        });
    });
}

// Handle image error
document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('profileImg');
    if (img) {
        img.onerror = () => {
            img.style.display = 'none';
            const fallback = document.querySelector('.fallback-icon');
            if (fallback) fallback.style.display = 'block';
        };
    }
});

// Form submission - Direct to Formspree (No PHP needed!)
// IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
// Get your free ID from: https://formspree.io/
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const feedbackDiv = document.getElementById('feedback');
    
    // Create FormData object for Formspree
    const formData = new FormData();
    formData.append('name', form.name.value);
    formData.append('email', form.email.value);
    formData.append('subject', form.subject.value);
    formData.append('message', form.message.value);
    
    // ⚠️ IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    // Get your free ID from: https://formspree.io/
    // Example: 'xayzklrj' (this is just an example)
    const FORMSPREE_ID = 'YOUR_FORM_ID'; // 🔴 CHANGE THIS TO YOUR ACTUAL FORMSPREE ID
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        feedbackDiv.style.display = 'block';
        
        if (response.ok) {
            feedbackDiv.className = 'alert alert-success';
            feedbackDiv.innerHTML = '✨ Message sent successfully! I will get back to you soon.';
            form.reset();
        } else {
            const data = await response.json();
            feedbackDiv.className = 'alert alert-error';
            feedbackDiv.innerHTML = data.error || 'Failed to send message. Please try again.';
        }
        
        setTimeout(() => {
            feedbackDiv.style.display = 'none';
        }, 5000);
    } catch (error) {
        feedbackDiv.style.display = 'block';
        feedbackDiv.className = 'alert alert-error';
        feedbackDiv.innerHTML = 'Network error. Please check your connection and try again.';
        setTimeout(() => {
            feedbackDiv.style.display = 'none';
        }, 5000);
    } finally {
        // Restore button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Navigation buttons
document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => scrollToSection(btn.dataset.nav));
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    generateShapes();
    initCursor();
    renderProjects();
    renderSkills();
    renderExperience();
});