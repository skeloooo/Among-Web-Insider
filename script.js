CSS : function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Traitez les données comme vous le souhaitez
      console.log('Données récupérées du fichier JSON :', data);
      /// ON ECRIT LE CODE ICI !

/// FIN DU CODE
})
  .catch((error) => console.error('Erreur lors de la lecture des données :', error));
  }

  async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}

function displayData(data) {
    const journal = data.journal;
    const container = document.getElementById('journal-container');

    const journalTitle = document.createElement('h1');
    journalTitle.className = 'journal-title';
    journalTitle.textContent = journal.nomJournal;
    container.appendChild(journalTitle);

    const accroche = document.createElement('p');
    accroche.textContent = journal.phraseAccroche;
    container.appendChild(accroche);

    const appelAction = document.createElement('p');
    appelAction.textContent = journal.texteAppelAction;
    container.appendChild(appelAction);

    const articlePrincipal = document.createElement('div');
    articlePrincipal.className = 'journal-section';
    articlePrincipal.innerHTML = `
        <h2>Article Principal</h2>
        <h3>${journal.articlePrincipal.titre}</h3>
        <p>${journal.articlePrincipal.description}</p>
        <p><strong>Date:</strong> ${journal.articlePrincipal.date}</p>
        <p><strong>Thème:</strong> ${journal.articlePrincipal.theme}</p>
    `;
    container.appendChild(articlePrincipal);

    const articlesSection = document.createElement('div');
    articlesSection.className = 'journal-section';
    articlesSection.innerHTML = '<h2>Articles</h2>';
    journal.articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <h3>${article.titre}</h3>
            <p><strong>Date:</strong> ${article.date}</p>
            <p><strong>Thème:</strong> ${article.theme}</p>
        `;
        articlesSection.appendChild(articleDiv);
    });
    container.appendChild(articlesSection);

    const themesSection = document.createElement('div');
    themesSection.className = 'journal-section';
    themesSection.innerHTML = '<h2>Thèmes</h2>';
    journal.themes.forEach(theme => {
        const themeDiv = document.createElement('div');
        themeDiv.className = 'theme';
        themeDiv.innerHTML = `
            <h3>${theme.nom}</h3>
            <p>${theme.description}</p>
        `;
        themesSection.appendChild(themeDiv);
    });
    container.appendChild(themesSection);

    const auteursSection = document.createElement('div');
    auteursSection.className = 'journal-section';
    auteursSection.innerHTML = '<h2>Auteurs</h2>';
    journal.auteurs.forEach(auteur => {
        const auteurDiv = document.createElement('div');
        auteurDiv.className = 'auteur';
        auteurDiv.innerHTML = `
            <h3>${auteur.prenom}</h3>
            <p><strong>Type d'expérience:</strong> ${auteur.typeExperience}</p>
            <p>${auteur.presentation}</p>
        `;
        auteursSection.appendChild(auteurDiv);
    });
    container.appendChild(auteursSection);
}

window.onload = fetchData;

getData();