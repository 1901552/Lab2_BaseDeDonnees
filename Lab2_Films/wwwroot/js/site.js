let requestURL = 'api/Films';

request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = 'json';
request.send();

request.onload = MaFonctionCallBack;

function MaFonctionCallBack() {
    const Film = this.response;     // emmagasiner les données JSON dans une variable. La réponse est envoyée  this 
    console.log(Film);
    ConstruireEntete(Film);            // Appel de la fonction qui va créer un entête et un paragraphe html
    afficheBoxOffice(Film);
    AfficherAuteur(Film);              // Appel de la fonction qui vas récupérer les éléments du tableau Vedette pour remplir notre page html
}

// Fonction pour construire l'entête de notre page    

function ConstruireEntete(jsonObj) {
    const Films = jsonObj['films'];

    for (var i = 0; i < Films.length; i++) {
        var section = document.createElement('section');
        section.id = 'section' + i;
        document.body.appendChild(section);

        for (var j = 0; j < 2; j++) {
            var div = document.createElement('div');

            if (j == 0) {
                div.className = 'topdiv';
            } else {
                div.className = 'downdiv';
            }

            document.getElementById('section' + i).appendChild(div)
        }

        var topdiv = document.getElementById('section' + i).firstChild;

        // var header = document.getElementsByTagName('HEADER')[i];

        const myH1 = document.createElement('h1');  // Créer un entête élément de type h1m(l'élément est créé mais non associer a notre page pour le moment)
        myH1.textContent = Films[i].titre;    // Utiliser la valeur de la propriété JSON 'Titre' retourné par le serveur pour initialiser le texte de notre entête h1
        topdiv.appendChild(myH1);             // Assigner(associer) notre entête à l'entête de notre page HTML

        const myPara1 = document.createElement('p'); // Créer un élément de type paragraphe
        myPara1.textContent = 'Directeur: ' + Films[i].directeur + ' // Auteur: ' + Films[i].auteur; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
        topdiv.appendChild(myPara1);

        const myPara2 = document.createElement('p'); // Créer un autre paragraphe pour la date
        myPara2.textContent = 'Date: ' + Films[i].date; // Utiliser la valeur de la propriété JSON 'Directeur' et 'Auteur' retourné par le serveur pour initialiser le texte du paragraphe
        topdiv.appendChild(myPara2);

        const mypara3 = document.createElement('p');
        mypara3.textContent = 'Description: ' + Films[i].description;
        topdiv.appendChild(mypara3);
    }
}

function afficheBoxOffice(jsonObj) {
    const Films = jsonObj['films'];

    for (var j = 0; j < Films.length; j++) {

        var topdiv = document.getElementById('section' + j).firstChild;
        const BoxOffice = Films[j].boxOffice;


        const h2 = document.createElement('h2');
        h2.textContent = 'BoxOffice';
        topdiv.appendChild(h2);

        const para1 = document.createElement('p');
        para1.textContent = 'Budget: ' + BoxOffice.budget;
        topdiv.appendChild(para1);

        const para2 = document.createElement('p');
        para2.textContent += "Fin de semaine d'ouverture: " + BoxOffice.fdsOuverture;
        topdiv.appendChild(para2);

        const para3 = document.createElement('p');
        para3.textContent += 'Total au états-Unis: ' + BoxOffice.totalUSA;
        topdiv.appendChild(para3);

        const para4 = document.createElement('p');
        para4.textContent += 'Total international: ' + BoxOffice.totalMonde;
        topdiv.appendChild(para4);

    }
}


// Fonction pour afficher les informations sur le film

function AfficherAuteur(jsonObj) {
    const Films = jsonObj['films'];

    for (var j = 0; j < Films.length; j++) {
        // var section = document.getElementsByTagName('SECTION')[j];

        var downdiv = document.getElementById('section' + j).lastChild;

        const Vedette = Films[j].vedettes; //Emmagasiner la valeur de la propriété JSON 'Vedette' dans la varaible tableau heroes 

        // Récupérer les éléments du tableau Vedette pour remplir notre page html

        for (var i = 0; i < Vedette.length; i++) {
            const myArticle = document.createElement('article');// Pour chaque vedette, créer un article ('article'), une entête h2 ('h2'), 1 paragraphe ('p')
            const Nom = document.createElement('article');
            const myH2 = document.createElement('h2');
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');

            myH2.textContent = Vedette[i].nom; // Utiliser la valeur de la propriété JSON 'Nom' retourné par le serveur pour initialiser le texte de notre entête h2
            myPara1.textContent = 'Age: ' + Vedette[i].age;
            myPara2.textContent = 'Personnage: ' + Vedette[i].personnage; // Utiliser la valeur de la propriété JSON 'Personnage' retourné par le serveur pour initialiser le paragraphe

            // Assigner(associer) l'entête myH2 et le paragraphes myPara1 à l'article myArticle

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            downdiv.appendChild(myArticle); // Associer notre article a notre section de la page HTML

        }
    }
}