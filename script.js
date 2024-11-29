// Variables globales pour le défilement des services et produits


// Liste des produits avec leurs images et éléments correspondants
let currentProductIndex = 0;  // Index du produit actuel
const products = [
    {
        mainImage: "product-1",
        images: ["images-0"],
        backgroundImage: "img/inf 1.JPG",  // Image de fond pour ce produit
        title: "INFORMATIQUE ET SECURITE"
    },
    {
        mainImage: "product-2",
        images: ["images-1"],
        backgroundImage: "img/maintenance reseau 5.JPG",  // Image de fond pour ce produit
        title: "MAINTENANCE ET SOLUTIONS RESEAUX"
    },
    {
        mainImage: "product-3",
        images: ["images-2"],
        backgroundImage: "img/agro-alimentaire.JPG",  // Image de fond pour ce produit
        title: "FOURNITURE DE PRODUITS ET SERVICE AGROALIMENTAIRE"
    },
    {
        mainImage: "product-4",
        images: ["images-3"],
        backgroundImage: "img/bat 2.JPG",  // Image de fond pour ce produit
        title: "BATIMENT TRAVAUX PUBLICS (BTP)"
    },
    {
        mainImage: "product-5",
        images: ["images-4"],
        backgroundImage: "img/voiture 1.JPG",  // Image de fond pour ce produit
        title: "TRANSPORTS ET LOGISTIQUES"
    },
    {
        mainImage: "product-6",
        images: ["images-5"],
        backgroundImage: "img/equipent et materieaux.JPG",  // Image de fond pour ce produit
        title: "Équipements et matériaux divers"
    }
];

function showProduct(productIndex) {
    // Cacher tous les produits
    products.forEach((product) => {
        document.getElementById(product.mainImage).style.display = "none";
        product.images.forEach(imageId => {
            document.getElementById(imageId).style.display = "none";
        });
    });

    // Afficher le produit et ses images associées
    const currentProduct = products[productIndex];
    document.getElementById(currentProduct.mainImage).style.display = "flex";
    currentProduct.images.forEach((imageId, index) => {
        document.getElementById(imageId).style.display = index === 0 ? "block" : "none";
    });

    // Changer l'image de fond de la section principale
    document.querySelector('.main').style.backgroundImage = `url(${currentProduct.backgroundImage})`;

    // Défilement des images secondaires
    let imageIndex = 0;
    const intervalId = setInterval(() => {
        imageIndex = (imageIndex + 1) % currentProduct.images.length;
        currentProduct.images.forEach((imageId, i) => {
            document.getElementById(imageId).style.display = i === imageIndex ? "block" : "none";
        });
    }, 2000);  // Changement d'image toutes les 2 secondes

    // Stopper le défilement des images au prochain produit
    setTimeout(() => clearInterval(intervalId), 5000);
}

// Passer au produit suivant toutes les 5 secondes
setInterval(() => {
    currentProductIndex = (currentProductIndex + 1) % products.length;
    showProduct(currentProductIndex);
}, 5000);

// Afficher le premier produit au chargement de la page
showProduct(currentProductIndex);



// Liste des produits et leurs images


// Fonction pour changer l'image de fond
function showProduct(productIndex) {
    const product = products[productIndex];
    const productElement = document.getElementById(product.id);
    
    // Appliquer l'image de fond
    productElement.style.backgroundImage = `url(${product.mainImage})`;
    
    // Afficher le texte sur l'image
    const productName = productElement.querySelector('.product-name');
    productName.textContent = `Nom du produit: ${product.id}`; // Personnalisez selon vos besoins
}

// Afficher le premier produit
showProduct(0);


let currentServiceIndex = 0;
const serviceCount = 6; // Nombre total de services
let interval; // Variable pour stocker l'intervalle

function showNextService() {
    const services = document.querySelectorAll('.content');
    services.forEach((service, index) => {
        service.style.display = (index === currentServiceIndex) ? 'flex' : 'none';
    });

    // Mettre à jour l'index du service courant
    currentServiceIndex = (currentServiceIndex + 1) % serviceCount;

    // Si un service a été sélectionné, afficher le service suivant
    interval = setTimeout(showNextService, 5000); // Changer de service toutes les 5 secondes
}

function showImages(index) {
    const images = document.querySelectorAll(`#images-${index + 1} img`);
    let currentImageIndex = 0; // Réinitialise l'index de l'image courante
    const imageContainer = document.getElementById(`images-${index + 1}`);

    // Affiche la première image et cache les autres
    imageContainer.style.display = 'block';
    images.forEach((img, i) => img.style.display = (i === currentImageIndex) ? 'block' : 'none');

    // Fonction pour faire défiler les images
    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Passer à l'image suivante
        images.forEach((img, i) => img.style.display = (i === currentImageIndex) ? 'block' : 'none');
    };

    // Affiche les images toutes les 5 secondes
    setInterval(showNextImage, 5000);
}

// Démarre le défilement des services
showNextService();

let currentReferenceIndex = 0;
const references = document.querySelectorAll('.reference-img');

function showNextReference() {
    references[currentReferenceIndex].classList.remove('active'); // Masque l'image actuelle
    currentReferenceIndex = (currentReferenceIndex + 1) % references.length; // Change d'image
    references[currentReferenceIndex].classList.add('active'); // Affiche la nouvelle image
}

// Initialisation : affiche la première image
references[currentReferenceIndex].classList.add('active');

// Change d'image toutes les 2 secondes
setInterval(showNextReference, 2000);

// Validation côté client
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Vérifier que l'email est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        event.preventDefault();
        return;
    }

    // Vérifier que le message n'est pas vide
    if (message.length < 10) {
        alert('Votre message doit contenir au moins 10 caractères.');
        event.preventDefault();
        return;
    }

    // Vérifier que le CAPTCHA est validé
    const recaptchaResponse = document.querySelector('.g-recaptcha-response').value;
    if (!recaptchaResponse) {
        alert('Veuillez valider le CAPTCHA avant de soumettre le formulaire.');
        event.preventDefault();
    }
});


document.getElementById('see-more-btn').addEventListener('click', function () {
    const moreText = document.getElementById('more-text');
    const btn = this;

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        btn.textContent = 'Voir moins';
    } else {
        moreText.style.display = 'none';
        btn.textContent = 'Voir plus';
    }
});
