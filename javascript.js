// 1. Μεταφράσεις
const translations = {
    en: {
        hero_strings: ['Interactive 3D interiors that sell.', 'Immersive 3D interiors, not just show.', 'Experience the space in 3D.'],
        hero_btn: "Experience the Space",
        projects_title: "Explore Our Projects",
        projects_subtitle: "Select a project to experience the 3D walkthrough.",
        back_btn: "← Back to Projects",
        select_room: "Select a room type",
        features_title: "Why 3D Tours are Non-Negotiable",
        features_subtitle: "Standard photos are no longer enough. To lead the market, you need to provide presence.",
        feat_1_title: "Virtual Open House 24/7",
        feat_1_body: "Sell properties 31% faster. Allow potential buyers or guests to explore every corner of your space from anywhere in the world, reducing wasted viewings.",
        feat_2_title: "Boost Booking Confidence",
        feat_2_body: "Eliminate 'not as pictured' complaints. Provide an immersive 1:1 preview that builds absolute trust for Airbnb guests and hotel visitors.",
        feat_3_title: "Millimeter-Level Precision",
        feat_3_body: "Architects and Designers can showcase spatial flow and structural details with the famous 'Dollhouse View' — the ultimate digital portfolio.",
        industries_title: "Industries We Transform",
        ind_1_title: "Real Estate",
        ind_1_body: "Transform listings into immersive digital open houses. Reduce unnecessary viewings by 40% while attracting high-intent buyers from around the globe.",
        ind_2_title: "Hospitality",
        ind_2_body: "Increase direct bookings and eliminate 'not as pictured' uncertainty. Give your guests the confidence of a 5-star digital arrival before they even check in.",
        ind_3_title: "Event Venues",
        ind_3_body: "Enable remote event planning and layout visualization. Convert venue inquiries into bookings faster by showcasing your space's versatility 24/7.",
        ind_4_title: "Architecture",
        ind_4_body: "Document construction progress and showcase finished projects with absolute spatial accuracy. The ultimate tool for high-end spatial storytelling.",
        ind_5_title: "Yachting",
        ind_5_body: "Provide a luxury walkthrough for international buyers. Capture every detail of the deck and interior with stunning, high-definition 3D clarity.",
        contact_h2: "Let's Build Your 3D Experience",
        contact_subtitle: "Turn your space into a 3D experience your clients won't forget. Let's make it happen.",
        form_name: "Your name",
        form_email: "Email Address",
        form_message: "Tell us about your project...",
        form_btn: "Send Message",
        form_success: "Thank you! Your message has been sent successfully.",
        form_error: "Oops! Something went wrong. Please try again."
    },
    el: {
        hero_strings: ['3D περιηγήσεις που απογειώνουν τις πωλήσεις.',
            'Η απόλυτη αίσθηση του χώρου, ψηφιακά.',
            'Εξερευνήστε κάθε λεπτομέρεια σε 3D.'],
        hero_btn: "Περιηγηθείτε στον Χώρο",
        projects_title: "Ανακαλύψτε τα Έργα μας",
        projects_subtitle: "Επιλέξτε ένα έργο για να ξεκινήσετε την περιήγηση.",
        back_btn: "← Επιστροφή στα Έργα",
        select_room: "Επιλέξτε τύπο δωματίου",
        features_title: "Γιατί οι 3D Περιηγήσεις είναι Απαραίτητες",
        features_subtitle: "Οι απλές φωτογραφίες δεν αρκούν πια. Για να ηγηθείτε στην αγορά, χρειάζεστε παρουσία.",
        feat_1_title: "Virtual Open House 24/7",
        feat_1_body: "Πουλήστε ακίνητα 31% ταχύτερα. Επιτρέψτε σε αγοραστές ή επισκέπτες να περιηγηθούν σε κάθε γωνιά από οπουδήποτε, μειώνοντας τις άσκοπες επισκέψεις.",
        feat_2_title: "Ενίσχυση Εμπιστοσύνης",
        feat_2_body: "Εξαλείψτε τα παράπονα τύπου «δεν ήταν όπως στις φωτό». Προσφέρετε μια 1:1 προεπισκόπηση που χτίζει απόλυτη εμπιστοσύνη για Airbnb και ξενοδοχεία.",
        feat_3_title: "Ακρίβεια Χιλιοστού",
        feat_3_body: "Αρχιτέκτονες και Σχεδιαστές μπορούν να αναδείξουν τη ροή και τις λεπτομέρειες με το «Dollhouse View» — το απόλυτο ψηφιακό portfolio.",
        industries_title: "Κλάδοι που Μεταμορφώνουμε",
        ind_1_title: "Real Estate",
        ind_1_body: "Μετατρέψτε τις αγγελίες σε ψηφιακές εμπειρίες. Μειώστε τις άσκοπες επισκέψεις κατά 40% προσελκύοντας αγοραστές από όλο τον κόσμο.",
        ind_2_title: "Hospitality",
        ind_2_body: "Αυξήστε τις κρατήσεις και κερδίστε την εμπιστοσύνη των πελατών. Δώστε τους μια 5άστερη εμπειρία πριν καν φτάσουν.",
        ind_3_title: "Χώροι Εκδηλώσεων",
        ind_3_body: "Διευκολύνετε τον σχεδιασμό εκδηλώσεων εξ αποστάσεως. Μετατρέψτε τις ερωτήσεις σε κρατήσεις αναδεικνύοντας την ευελιξία του χώρου σας 24/7.",
        ind_4_title: "Αρχιτεκτονική",
        ind_4_body: "Καταγράψτε την πρόοδο των εργασιών και παρουσιάστε ολοκληρωμένα έργα με απόλυτη χωρική ακρίβεια.",
        ind_5_title: "Yachting",
        ind_5_body: "Προσφέρετε πολυτελείς περιηγήσεις για διεθνείς αγοραστές. Αποτυπώστε κάθε λεπτομέρεια του σκάφους με εκπληκτική 3D ευκρίνεια.",
        contact_h2: "Ας δημιουργήσουμε την 3D εμπειρία σας",
        contact_subtitle: "Μετατρέψτε τον χώρο σας σε μια εμπειρία που οι πελάτες σας δεν θα ξεχάσουν.",
        form_name: "Το όνομά σας",
        form_email: "Διεύθυνση Email",
        form_message: "Πείτε μας για το έργο σας...",
        form_btn: "Αποστολή Μηνύματος",
        form_success: "Ευχαριστούμε! Το μήνυμά σας στάλθηκε με επιτυχία.",
        form_error: "Ωχ! Κάτι πήγε στραβά. Δοκιμάστε ξανά."
    }
};

// 2. Ανίχνευση Γλώσσας
let currentLang = navigator.language.includes('el') ? 'el' : 'en';

function applyTranslations() {
    const langData = translations[currentLang];

    // Μετάφραση απλού κειμένου
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) el.innerText = langData[key];
    });

    // Μετάφραση Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langData[key]) el.setAttribute('placeholder', langData[key]);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();

    // AOS
    AOS.init({ duration: 800, once: true });

    // Typed.js με δυναμικά strings
    new Typed('#typed-text', {
        strings: translations[currentLang].hero_strings,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true,
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    renderMainNodes();
});

// 3. Logic για τα Projects (Nodes)
const projects = {
    elysium: { name: "Elysium Retreat", url: "https://my.matterport.com/show/?m=gnCs6bcha8J", image: "url('elysium-thumb.jpg')" },
    makedonia: {
        name: "Makedonia Palace",
        image: "url('makedonia-logo.jpg')",
        rooms: [
            { name: "Junior City View (T1)", url: "https://my.matterport.com/show/?m=XCS8cfkquWU", img: "url('t1.jpg')" },
            { name: "Junior City View (T2)", url: "https://my.matterport.com/show/?m=xt46UGFxezF", img: "url('t2.jpg')" },
            { name: "Junior Sea View Suite", url: "https://my.matterport.com/show/?m=WeX5PS76XjQ", img: "url('t3.jpg')" },
            { name: "Executive Sea View", url: "https://my.matterport.com/show/?m=XryZtKbY7vs", img: "url('t4.jpg')" },
            { name: "Premium Sea View", url: "https://my.matterport.com/show/?m=xj9HEdDhfSc", img: "url('t5.jpg')" },
            { name: "Executive Suite", url: "https://my.matterport.com/show/?m=KSJ2aVJDmHd", img: "url('t6.jpg')" },
            { name: "Deluxe Suite", url: "https://my.matterport.com/show/?m=XxC8fResg7c", img: "url('t7.jpg')" },
            { name: "Grand Deluxe Suite", url: "https://my.matterport.com/show/?m=Gf6iW4ND1Ui", img: "url('t8.jpg')" },
            { name: "Presidential Suite", url: "https://my.matterport.com/show/?m=tHLSp85QgaF", img: "url('t9.jpg')" },
            { name: "AMEA Room", url: "https://my.matterport.com/show/?m=Ztj3DFXFfdD", img: "url('t10.jpg')" }
        ]
    }
};

const container = document.getElementById('nodes-container');
const viewer = document.getElementById('viewer-container');
const backNav = document.getElementById('back-nav');

function renderMainNodes() {
    backNav.style.display = 'none';
    viewer.classList.remove('active');
    container.innerHTML = `
        <div class="main-node" onclick="openTour('${projects.elysium.url}', '${projects.elysium.name}')" style="background-image: ${projects.elysium.image}">
            <div class="node-overlay"><span>${projects.elysium.name}</span></div>
        </div>
        <div class="main-node" onclick="renderMakedoniaNodes()" style="background-image: ${projects.makedonia.image}">
            <div class="node-overlay"><span>${projects.makedonia.name}</span></div>
        </div>
    `;
}

function renderMakedoniaNodes() {
    backNav.style.display = 'block';
    container.innerHTML = '';
    projects.makedonia.rooms.forEach((room, index) => {
        const node = document.createElement('div');
        node.className = 'sub-node';
        node.style.backgroundImage = room.img;
        node.style.animationDelay = `${index * 0.05}s`;
        node.innerHTML = `<div class="node-overlay"><span>${room.name}</span></div>`;
        node.onclick = () => openTour(room.url, room.name);
        container.appendChild(node);
    });
}

function openTour(url, title) {
    document.getElementById('tour-iframe').src = url;
    document.getElementById('active-title').innerText = title;
    viewer.classList.add('active');
    viewer.scrollIntoView({ behavior: 'smooth' });
}

function closeViewer() {
    viewer.classList.remove('active');
    document.getElementById('tour-iframe').src = '';
}

// 4. Video Scroll & Form
const vid = document.getElementById('scrub-video');
window.addEventListener('scroll', () => {
    const scrollFraction = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    if (vid.duration) vid.currentTime = vid.duration * Math.min(0.99, scrollFraction);
});

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const status = document.getElementById("form-status");
        const btn = document.getElementById("submit-button");
        btn.disabled = true;

        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                status.innerText = translations[currentLang].form_success;
                status.style.color = "#00f7b5";
                contactForm.reset();
            } else {
                status.innerText = translations[currentLang].form_error;
            }
        }).finally(() => { btn.disabled = false; });
    });
}
