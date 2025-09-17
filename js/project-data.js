// Project data configuration
const projectData = {
    'koncert-produkcija': {
        title: 'Koncert produkcija',
        subtitle: 'Event Management & Production',
        image: 'img/produkcija.jpeg',
        category: 'Web & Design',
        date: 'Januar 2024',
        client: 'Koncert produkcija',
        author: 'Redo Agency',
        description: 'Profesionalna organizacija koncerata i muzičkih događaja. Nudimo kompletne usluge od planiranja do realizacije svih tipova muzičkih nastupa.',
        longDescription: 'Naš tim stručnjaka specijalizovan je za kreiranje nezaboravnih koncertnih iskustava kroz pažljivo planiranje, najsavremeniju opremu i besprekorno izvršavanje. Bavimo se svim aspektima produkcije - od koordinacije sa venueovima do tehničke podrške.',
        website: 'https://produkcija.koncert.hr/',
    },
    'kameleon-security': {
        title: 'Kameleon Security',
        subtitle: 'Security Solutions & Technology',
        image: 'img/kameleon.png',
        category: 'Web & Design',
        date: 'Decembar 2023',
        client: 'Kameleon Security',
        author: 'Redo Agency',
        description: 'Napredna sigurnosna rešenja i tehnološka integracija za moderna preduzeća i stambene objekte. Specijalizovani za video nadzor i alarmne sisteme.',
        longDescription: 'Pružamo najsavremenije sigurnosne sisteme, tehnologiju video nadzora i sveobuhvatne zaštitne usluge prilagođene specifičnim potrebama klijenata. Naša oprema garantuje maksimalnu bezbednost.',
        website: 'https://www.kameleon-security.hr/',
    },
    'omega-concept-bar': {
        title: 'Omega Concept Bar',
        subtitle: 'Hospitality & Design',
        image: 'img/works/3.jpg',
        category: 'Marketing & Branding',
        date: 'May 24 2023',
        client: 'Omega Concept Bar',
        author: 'Redo Agency',
        description: 'Innovative bar concept with modern design and exceptional customer experience.',
        longDescription: 'A revolutionary approach to bar design and hospitality, combining contemporary aesthetics with functional excellence.',
        website: 'https://www.instagram.com/omegaconceptbar/',
        gallery: [
            'img/works/3/1.jpg',
            'img/works/3/2.jpg',
            'img/works/3/3.jpg'
        ]
    },
    'broko': {
        title: 'Broko',
        subtitle: 'Business Consulting',
        image: 'img/broko.png',
        category: 'Branding & Marketing',
        date: 'Mart 2024',
        client: 'Broko d.o.o',
        author: 'Redo Agency',
        description: 'Profesionalno poslovno konsaltovanje i strateško planiranje za rastući biznis. Pomažemo kompanijama da ostvare svoje ciljeve kroz stručno savetovanje.',
        longDescription: 'Specijalizovani smo za optimizaciju poslovnih procesa, razvoj strategijskih planova i postizanje održivog rasta kroz stručno konsaltovanje. Naš tim ima bogato iskustvo u različitim industrijama.',
        website: 'https://www.instagram.com/pivnica_broko/',
        gallery: [
            'img/works/2/1.gif',
            'img/works/2/2.jpg',
            'img/works/2/3.jpg'
        ]
    },
    'soba-23': {
        title: 'Soba 23',
        subtitle: 'Interior Design & Hospitality',
        image: 'img/soba.png',
        category: 'Marketing & Branding',
        date: 'May 24 2023',
        client: 'Soba 23',
        author: 'Redo Agency',
        description: 'Unique hospitality experience with custom interior design and personalized service.',
        longDescription: 'Creating memorable stays through thoughtful design, attention to detail, and exceptional hospitality services.',
        website: 'https://www.instagram.com/soba23_streetfood/',
        gallery: [
            'img/works/1/1.jpg',
            'img/works/1/2.jpg',
            'img/works/1/3.jpg'
        ]
    },
    'dubioza-rent-a-bar': {
        title: 'Dubioza Rent-a-bar',
        subtitle: 'Event Venue & Entertainment',
        image: 'img/dubioza.png',
        category: 'Web & Design',
        date: 'May 24 2023',
        client: 'Dubioza Rent-a-bar',
        author: 'Redo Agency',
        description: 'Flexible event venue rental with full-service bar and entertainment options.',
        longDescription: 'We provide versatile venue spaces for events of all sizes, complete with professional bar service and entertainment coordination.',
        website: 'https://www.dubiozabar.com/',
        gallery: [
            'img/works/1/4.jpg',
            'img/works/1/5.jpg',
            'img/works/1/6.jpg'
        ]
    },
    'liros-rent-a-boat': {
        title: 'Liros Rent-a-boat',
        subtitle: 'Marine Services & Tourism',
        image: 'img/liros.png',
        category: 'Marketing & Branding',
        date: 'May 24 2023',
        client: 'Liros Rent-a-boat',
        author: 'Redo Agency',
        description: 'Premium boat rental services for leisure and business activities on the Adriatic coast.',
        longDescription: 'Offering a fleet of well-maintained boats with professional crew services for unforgettable maritime experiences.',
        website: 'https://www.instagram.com/liros_rentaboatpula/',
        gallery: [
            'img/works/6/1.jpg',
            'img/works/6/2.gif',
            'img/works/6/3.jpg'
        ]
    },
    'ring-room': {
        title: 'Ring Room',
        subtitle: 'Entertainment & Events',
        image: 'img/works/1.jpg',
        category: 'Web & Design',
        date: 'May 24 2023',
        client: 'Ring Room',
        author: 'Redo Agency',
        description: 'Exclusive entertainment venue with state-of-the-art facilities for premium events.',
        longDescription: 'A sophisticated entertainment space designed for high-end events, featuring cutting-edge technology and luxury amenities.',
        website: '#',
        gallery: [
            'img/works/1/1.jpg',
            'img/works/1/2.jpg',
            'img/works/1/3.jpg'
        ]
    }
};

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to populate project data
function populateProjectData() {
    const projectId = getUrlParameter('project');
    
    if (!projectId || !projectData[projectId]) {
        // Default project data if no valid project ID
        console.warn('No valid project ID found, using default data');
        return;
    }

    const project = projectData[projectId];

    // Update page title
    document.title = `${project.title} - Redo Agency`;

    // Update banner content
    const bannerTitle = document.querySelector('.mil-inner-banner h1');
    if (bannerTitle) {
        bannerTitle.innerHTML = `${project.title} <span class="mil-thin">${project.subtitle}</span>`;
    }

    // Update project details
    const clientElement = document.querySelector('.mil-service-list li:nth-child(1) span');
    const dateElement = document.querySelector('.mil-service-list li:nth-child(2) span');
    const authorElement = document.querySelector('.mil-service-list li:nth-child(3) span');

    if (clientElement) clientElement.textContent = project.client;
    if (dateElement) dateElement.textContent = project.date;
    if (authorElement) authorElement.textContent = project.author;

    // Update description
    const shortDesc = document.querySelector('.mil-p-0-120 p:first-of-type');
    const longDesc = document.querySelector('.mil-p-0-120 p:nth-of-type(2)');

    if (shortDesc) shortDesc.textContent = project.description;
    if (longDesc) longDesc.textContent = project.longDescription;

    // Update website link
    const websiteLink = document.querySelector('.mil-p-0-120 a[data-no-swup]');
    if (websiteLink && project.website !== '#') {
        websiteLink.href = project.website;
    }

    // Update main project image
    const mainImage = document.querySelector('.mil-image-frame img');
    if (mainImage) {
        mainImage.src = project.image;
        mainImage.alt = project.title;
    }

    // Update gallery images if they exist
    const galleryImages = document.querySelectorAll('.mil-image-frame img');
    project.gallery.forEach((imageSrc, index) => {
        if (galleryImages[index + 1]) { // Skip first image as it's the main one
            galleryImages[index + 1].src = imageSrc;
            galleryImages[index + 1].alt = `${project.title} - Image ${index + 1}`;
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', populateProjectData);

// Export for use in other scripts
window.projectData = projectData; 