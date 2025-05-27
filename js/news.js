// Datos de las noticias
const newsData = {
    1: {
        title: "Avances en Tecnología Sostenible",
        date: "25 de Mayo, 2025",
        image: "https://via.placeholder.com/700x250/3498db/ffffff?text=Noticia+1+Expandida",
        content: `
            <p>Las últimas innovaciones en energía renovable están transformando el panorama tecnológico mundial de manera revolucionaria. Los científicos han desarrollado nuevos paneles solares con una eficiencia del 95%.</p>
            <p>Estos avances representan un salto cuántico en la búsqueda de soluciones energéticas sostenibles. La nueva tecnología utiliza materiales perovskita combinados con silicio para alcanzar niveles de eficiencia nunca antes vistos.</p>
            <p>Los expertos predicen que esta tecnología estará disponible comercialmente en los próximos dos años, lo que podría revolucionar completamente la industria de la energía solar.</p>
            <p>Además, el costo de producción se ha reducido significativamente, haciendo que esta tecnología sea accesible para un público más amplio.</p>
        `
    },
    2: {
        title: "Descubrimiento Científico Importante",
        date: "24 de Mayo, 2025",
        image: "https://via.placeholder.com/700x250/e74c3c/ffffff?text=Noticia+2+Expandida",
        content: `
            <p>Un equipo internacional de científicos ha hecho un descubrimiento revolucionario que podría cambiar fundamentalmente nuestra comprensión del universo y las leyes de la física.</p>
            <p>El hallazgo, publicado en la revista Nature, revela la existencia de una nueva partícula subatómica que desafía el modelo estándar de la física de partículas.</p>
            <p>Este descubrimiento ha sido posible gracias al uso del acelerador de partículas más avanzado del mundo, donde los científicos han estado trabajando durante más de una década.</p>
            <p>Las implicaciones de este descubrimiento son enormes y podrían abrir nuevos campos de investigación en la física teórica y aplicada.</p>
        `
    },
    3: {
        title: "Innovación en Medicina Digital",
        date: "23 de Mayo, 2025",
        image: "https://via.placeholder.com/700x250/2ecc71/ffffff?text=Noticia+3+Expandida",
        content: `
            <p>La inteligencia artificial está transformando radicalmente el campo de la medicina, especialmente en el área del diagnóstico médico, donde nuevas herramientas de precisión están salvando vidas.</p>
            <p>Los algoritmos de IA pueden ahora detectar enfermedades en etapas tempranas con una precisión del 98%, superando significativamente la capacidad de diagnóstico humano tradicional.</p>
            <p>Hospitales de todo el mundo están implementando estas tecnologías, reduciendo los tiempos de diagnóstico de semanas a minutos en muchos casos.</p>
            <p>Esta revolución digital en la medicina promete hacer que la atención médica de calidad sea más accesible y eficiente para pacientes en todo el mundo.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('newsModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalText = document.getElementById('modalText');
    const closeBtn = document.querySelector('.close-modal');
    
    // Función para abrir modal
    function openModal(newsId) {
        const news = newsData[newsId];
        if (!news) return;
        
        modalImage.style.backgroundImage = `url('${news.image}')`;
        modalTitle.textContent = news.title;
        modalDate.textContent = news.date;
        modalText.innerHTML = news.content;
        
        modal.classList.add('active');
        document.body.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
    }
    
    // Función para cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-active');
        document.body.style.overflow = '';
    }
    
    // Eventos para abrir modal
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-more')) {
            e.preventDefault();
            const newsCard = e.target.closest('.news-card');
            const newsId = newsCard.getAttribute('data-news');
            openModal(newsId);
        }
    });
    
    // Eventos para cerrar modal
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Prevenir propagación en el contenido del modal
    document.querySelector('.modal-container').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});