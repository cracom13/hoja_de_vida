document.addEventListener('DOMContentLoaded', function() {
    // Crear el script de datos estructurados
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Camilo Andrés González",
        "jobTitle": "Tecnólogo en Desarrollo de Sistemas | Ingeniero de Software en formación",
        "image": "https://videos.openai.com/vg-assets/assets%2Ftask_01jtmrkpdpf4ab7998brm3efb4%2F1746601165_img_1.webp?st=2025-05-07T05%3A14%3A19Z&se=2025-05-13T06%3A14%3A19Z&sks=b&skt=2025-05-07T05%3A14%3A19Z&ske=2025-05-13T06%3A14%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=0FIOgRskSSGoP9%2B5SuyfgE54rq3mXFgptvKga6wHlZs%3D&az=oaivgprodscus",
        "email": "camicamilo499@gmail.com",
        "telephone": "+573025469787",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle 76 #24-65",
            "addressLocality": "Bogotá"
        },
        "description": "Tecnólogo en Análisis y Desarrollo de Sistemas de Información con experiencia en soporte técnico y atención al cliente. Actualmente cursando Ingeniería de Software.",
        "url": window.location.href,
        "sameAs": [
            "https://github.com/tu-usuario"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Desarrollador de Software",
            "description": "Ingeniero de Software en formación con experiencia en desarrollo de sistemas"
        },
        "knowsAbout": [
            {
                "@type": "Thing",
                "name": "Responsive design",
                "description": "Experiencia en patrones de diseño responsive"
            },
            {
                "@type": "Thing",
                "name": "HTML y CSS",
                "description": "Conocimientos sólidos en desarrollo frontend"
            },
            {
                "@type": "Thing",
                "name": "Java y MySQL",
                "description": "Especializado en desarrollo backend con Java y bases de datos"
            }
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "HELISA CLOUD",
            "description": "Experiencia en desarrollo de sistemas de soporte técnico"
        }
    };

    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    // Añadir microdatos a elementos específicos
    document.querySelector('body').setAttribute('itemscope', '');
    document.querySelector('body').setAttribute('itemtype', 'http://schema.org/Person');
    
    const nameElement = document.querySelector('.hero h1');
    nameElement.setAttribute('itemprop', 'name');
    
    const jobTitleElement = document.querySelector('.hero p');
    jobTitleElement.setAttribute('itemprop', 'jobTitle');
    
    const descriptionElements = document.querySelectorAll('.about-text p');
    descriptionElements[0].setAttribute('itemprop', 'description');
    
    const imageElement = document.querySelector('.profile-image');
    imageElement.setAttribute('itemprop', 'image');
    
    const emailElement = document.querySelector('.contact-info p:nth-child(2)');
    emailElement.setAttribute('itemprop', 'email');
    
    const telephoneElement = document.querySelector('.contact-info p:nth-child(1)');
    telephoneElement.setAttribute('itemprop', 'telephone');
    
    const addressElement = document.querySelector('.contact-info p:nth-child(3)');
    addressElement.setAttribute('itemprop', 'address');
    addressElement.setAttribute('itemscope', '');
    addressElement.setAttribute('itemtype', 'http://schema.org/PostalAddress');
    
    const streetAddress = addressElement.querySelector('span');
    streetAddress.setAttribute('itemprop', 'streetAddress');
    
    const projects = document.querySelectorAll('.case-study-card');
    projects.forEach(project => {
        project.setAttribute('itemprop', 'creator');
        project.setAttribute('itemscope', '');
        project.setAttribute('itemtype', 'http://schema.org/CreativeWork');
        
        const projectName = project.querySelector('h3');
        projectName.setAttribute('itemprop', 'name');
        
        const projectDesc = project.querySelector('p');
        projectDesc.setAttribute('itemprop', 'description');
    });
    
    const skills = document.querySelectorAll('.skill-card');
    skills.forEach(skill => {
        skill.setAttribute('itemprop', 'knowsAbout');
        skill.setAttribute('itemscope', '');
        skill.setAttribute('itemtype', 'https://schema.org/Thing');
        
        const skillName = skill.querySelector('h3');
        skillName.setAttribute('itemprop', 'name');
        
        const skillDesc = skill.querySelector('p');
        skillDesc.setAttribute('itemprop', 'description');
    });
});