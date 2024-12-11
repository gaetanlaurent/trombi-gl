// Initialisation de la carte
const map = L.map('map').setView([50.7, 2.3], 9);

// Ajout des tuiles de la carte provenant d'OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

// Données des personnes (faut encore modif les liens et stack de ceux dont c'est pas encore fait)
const personnes = [
    {
        nom: "Gaëtan",
        ville: "Le Portel",
        photo: "./photos/Gaetan.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            github: "https://github.com/gaetanlaurent",
        },
        hobbies: ["Jeux Vidéos", "Musique", "Manga"],
        coord: [50.708208, 1.576384],
        backgroundImage: "./logos/arcane.gif"
    },
    {
        nom: "Cindy",
        ville: "Saint-Martin Boulogne",
        photo: "./photos/Cindy.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            github: "https://github.com/cindcht",
        },
        hobbies: ["Sport", "Musique", "Jeux Vidéos"],
        coord: [50.725987, 1.6338],
        backgroundImage: "./logos/sda.png"
    },
    {
        nom: "Adrien",
        ville: "Saint-Martin Boulogne",
        photo: "./photos/Adrien.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            linkedin: "https://www.linkedin.com/in/adrien-evrard-12b9a11b6/",
            github: "https://github.com/AdrienE62",
        },
        hobbies: ["Animés", "Musique", "Jeux Vidéos"],
        coord: [50.725987, 1.633471],
    },
    {
        nom: "Camille",
        ville: "Marquise",
        photo: "./photos/Camille.jpg",
        stack: ["HTML", "CSS"],
        liens: {
            linkedin: "https://fr.linkedin.com/in/camille-buridant-a79506214",
            github: "https://github.com/CamilleDev62",
            youtube: "https://www.youtube.com/@SalutUnivers",
        },
        hobbies: ["Cinéma/Animation", "Écriture", "Jeux Vidéos"],
        coord: [50.81449, 1.703519],
        backgroundImage: "./logos/dr.jpg"
    },
    {
        nom: "Doriane",
        ville: "Calais",
        photo: "./photos/Doriane.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            github: "https://github.com/Doryane24",
        },
        hobbies: ["Voyages", "Randonnée", "Lecture"],
        coord: [50.952658, 1.854581],
        backgroundImage: "./logos/by.png"
    },
    {
        nom: "Florian",
        ville: "Wimereux",
        photo: "./photos/Florian.jpg",
        stack: ["HTML", "CSS", "JavaScript", "React"],
        liens: {
            linkedin: "https://www.linkedin.com/in/florian-lhomel-8995b1285/",
            github: "https://github.com/Luzdeveloper",
            twitch: "https://www.twitch.tv/fluztea",
        },
        hobbies: ["Streaming", "Asie", "Jeux Vidéos"],
        coord: [50.769786, 1.61131],
        backgroundImage: "./logos/fluz.png"
    },
    {
        nom: "Ibra",
        ville: "Boulogne-sur-Mer",
        photo: "./photos/Ibra.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            linkedin: "https://www.linkedin.com/in/papa-ibra-diouf-8b85463a/",
            github: "https://github.com/IbraDiouf",
        },
        hobbies: ["Football", "Cinéma", "Lecture"],
        coord: [50.725186, 1.613392],
        backgroundImage: "./logos/sen.jpg"
    },
    {
        nom: "Jonathan",
        ville: "Wimille",
        photo: "./photos/Jonathan.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            github: "https://github.com/Jlouvet22",
        },
        hobbies: ["Voyages", "Football", "Jeux Vidéos"],
        coord: [50.763934, 1.630429],
        backgroundImage: "./logos/ekko.jpg"
    },
    {
        nom: "Léo",
        ville: "Isques",
        photo: "./photos/Léo.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            github: "https://github.com/LeoTellier62",
        },
        hobbies: ["Jeux de Rôles", "Cuisine", "Jeux Vidéos"],
        coord: [50.677517, 1.644918],
    },
    {
        nom: "Romain",
        ville: "Cucq",
        photo: "./photos/Romain.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            github: "https://github.com/Romain-Accary",
        },
        hobbies: ["Sport", "Code", "Jeux Vidéos"],
        coord: [50.487009, 1.624416],
        backgroundImage: "./logos/ds.jpg"
    },
    {
        nom: "Steeve",
        ville: "Lille",
        photo: "./photos/Steeve.jpg",
        stack: ["HTML", "CSS", "JavaScript"],
        liens: {
            github: "https://github.com/VAN-LANCKER-Steeve",
        },
        hobbies: ["Bricolage", "Informatique", "Jeux Vidéos"],
        coord: [50.63425, 3.06186],
        backgroundImage: "./logos/man.jpg"
    },
    {
        nom: "Nicolas",
        ville: "Samer",
        photo: "./photos/Nicolas.png",
        stack: ["HTML", "CSS", "JavaScript", "PHP", "Symfony", "MySQL"],
        liens: {
            linkedin: "https://www.linkedin.com/in/nicolas-herbez-hdf/",
            github: "https://github.com/nicolas-herbez",
        },
        hobbies: ["Code", "Famille", "Jeux Vidéos", "Les Apprenants"],
        coord: [50.639619, 1.745254],
        backgroundImage: "./logos/grandient.png",
        formateur: true,
    },
    {
        nom: "Remy",
        ville: "Arques",
        photo: "./photos/Remy.png",
        stack: ["HTML", "CSS", "JavaScript", "Figma", "React", "NodeJS", "Swagger", "NextJS"],
        liens: {
            linkedin: "https://www.linkedin.com/in/remyco/",
            github: "https://github.com/RemyCTRZ",
        },
        hobbies: ["Cinéma", "Séries", "Jeux Vidéos", "Développement Web"],
        coord: [50.733668, 2.295059],
        backgroundImage: "./logos/ryan.jpeg",
        formateur: true,
    },
];

// Fonction pour afficher une popup avec les informations d'une personne
function showPopup(personne) {
    const overlay = document.getElementById('popup-overlay'); // Sélectionne l'élément overlay (fond de la popup)
    const content = document.getElementById('popup-content'); // Sélectionne le contenu principal de la popup

    const isFormateur = personne.formateur; // Vérifie si la personne a le tag formateur

    // Construction dynamique du contenu HTML de la popup
    content.innerHTML = `
        <img src="${personne.photo}" alt="${personne.nom}">
        <h2>${personne.nom} ${isFormateur ? '<span class="tag formateur">Formateur</span>' : ''}</h2>
        <p><strong>Ville :</strong> ${personne.ville}</p>
        <p><strong>Stack :</strong> ${personne.stack.join(", ")}</p>
        <div>
            <strong>Liens :</strong>
            <ul>
                ${personne.liens.linkedin ? `<li><a href="${personne.liens.linkedin}" target="_blank">LinkedIn</a></li>` : ""}
                ${personne.liens.github ? `<li><a href="${personne.liens.github}" target="_blank">GitHub</a></li>` : ""}
                ${personne.liens.perso ? `<li><a href="${personne.liens.perso}" target="_blank">Site personnel</a></li>` : ""}
                ${personne.liens.twitch ? `<li><a href="${personne.liens.twitch}" target="_blank">Twitch</a></li>` : ""}
                ${personne.liens.youtube ? `<li><a href="${personne.liens.youtube}" target="_blank">YouTube</a></li>` : ""}
            </ul>
        </div>
        <p><strong>Hobbies :</strong> ${personne.hobbies.join(", ")}</p>
    `;

    // Appliquer le fond personnalisé si définie
    if (personne.backgroundImage) {
        content.style.setProperty('--popup-background', `url(${personne.backgroundImage})`); // Ajoute une image de fond
        content.setAttribute('data-background', 'true'); // Ajoute un attribut personnalisé pour signaler qu'un fond est actif
    } else {
        content.style.removeProperty('--popup-background'); // Supprime l'image de fond si elle n'est pas définie
        content.removeAttribute('data-background'); // Retire l'attribut personnalisé
    }

    overlay.classList.remove('hidden'); // Affiche la popup en retirant la classe CSS "hidden"
}

// Fonction pour fermer la popup
function closePopup() {
    const overlay = document.getElementById('popup-overlay'); // Sélectionne l'élément overlay
    overlay.classList.add('hidden'); // Sélectionne l'élément overlay
}

// Ajout d'un événement de fermeture au bouton
document.getElementById('close-popup').addEventListener('click', closePopup);

// Boucle pour ajouter des marqueurs et des événements à la liste des personnes
personnes.forEach((personne) => {
    const marker = L.marker(personne.coord).addTo(map); // Crée un marqueur pour chaque personne et l'ajoute à la carte

    // Gestion du clic sur un marqueur
    marker.on('click', () => {
        // Affiche la popup avec les informations de la personne associée
        showPopup(personne);
    });

    // Création d'un élément de liste pour chaque personne
    const listItem = document.createElement('li'); // Crée un élément <li>
    const isFormateur = personne.formateur; // Vérifie si la personne a le tag formateur

    // Remplit l'élément avec la photo, le nom, et le tag Formateur si la variable est active
    listItem.innerHTML = `
        <img src="${personne.photo}" alt="${personne.nom}">
        ${isFormateur ? `<span class="tag formateur">Formateur</span>` : ""} ${personne.nom}
    `;
    listItem.dataset.lat = personne.coord[0]; // Ajoute la latitude comme attribut de données
    listItem.dataset.lng = personne.coord[1]; // Ajoute la longitude comme attribut de données

    // Clic sur l'élément de la liste
    listItem.addEventListener('click', () => {
        // Centrer la carte sur la position de la personne avec un délai avant l'affichage du popup
        map.flyTo(personne.coord, 18, {
            duration: 1.5, // Durée en secondes
        });

        setTimeout(() => {
            showPopup(personne); // Affiche la popup après l'animation
        }, 1500); // Délai synchronisé avec la durée de l'animation
    });

    document.getElementById('list').appendChild(listItem); // Ajoute l'élément <li> à la liste
});
