// ===== BLOG SCRIPT =====
// Script leve para funcionalidades do blog

// Calcular tempo de leitura (em minutos)
function calculateReadTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

// Adicionar tempo de leitura aos cards
document.addEventListener('DOMContentLoaded', function() {
    // Calcular tempo de leitura para artigos
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        const readTime = calculateReadTime(articleContent.innerText);
        const readTimeElement = document.querySelector('.read-time');
        if (readTimeElement) {
            readTimeElement.textContent = `${readTime} min de leitura`;
        }
    }

    // Adicionar IDs automáticos aos headings para navegação
    const headings = document.querySelectorAll('.article-content h2, .article-content h3');
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Função para compartilhar artigo (opcional)
function shareArticle(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        // Fallback: copiar URL para clipboard
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado para clipboard!');
        });
    }
}

// Função para copiar link do artigo
function copyArticleLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copiado para clipboard!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Filtrar artigos por categoria (opcional)
function filterArticles(category) {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Buscar artigos (opcional)
function searchArticles(query) {
    const cards = document.querySelectorAll('.blog-card');
    const lowerQuery = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const excerpt = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(lowerQuery) || excerpt.includes(lowerQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Adicionar classe ativa ao link de navegação atual
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Lazy loading para imagens (opcional)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}
