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
      updateCallToAction(data);
      updateMainArticle(data);
      updateArticles(data);
      updateAuthors(data);
      updateThemes(data);
/// FIN DU CODE
})
  .catch((error) => console.error('Erreur lors de la lecture des données :', error));
  }
function afficherTitreJournal() {
  let title= data.journal.nomJournal;
  console.log(title);
  let titleID= document.getElementById("title")
  console.log(titleID);
  titleID.insertAdjacentHTML("beforeend", title);
 }
function afficherLesThemes(){
let themes = data.journal.themes;
 console.log(themes);
 themes.forEach(element => {
   let themeTitre = element.nom
   console.log(themeTitre);
   let liste = `<li >
     <a href="#">${themeTitre}</a>
     </li>`;
   let themesId = document.getElementById("themes")
   console.log(themesId);
   themesId.insertAdjacentHTML("beforeend",liste )
 })
}
function updateCallToAction(data) {
 let texteAppelAction = data.journal.texteAppelAction;
 let texteAppelActionReplacment = document.querySelector('#appel_action');
 texteAppelActionReplacment.textContent = texteAppelAction;
}
function updateMainArticle(data) {
 let articlePrincipalTitle = data.journal.articlePrincipal.titre;
 let articlePrincipalTitleReplacment = document.querySelector('#article_principal_title');
 articlePrincipalTitleReplacment.textContent = articlePrincipalTitle;
 let articlePrincipalTheme = data.journal.articlePrincipal.theme;
 let articlePrincipalDate = data.journal.articlePrincipal.date;
 let articlePrincipalThemeDateReplacment = document.querySelector('#article_principal_theme_date');
 articlePrincipalThemeDateReplacment.textContent = `${articlePrincipalTheme} - ${articlePrincipalDate}`;
 let articlePrincipalDescription = data.journal.articlePrincipal.description;
 let articlePrincipalDescriptionReplacment = document.querySelector('#article_principal_description');
 articlePrincipalDescriptionReplacment.textContent = articlePrincipalDescription;
}
function updateArticles(data) {
 let articles = data.journal.articles;
 articles.forEach((article, index) => {
     let articleTitre = article.titre;
     let articleTheme = article.theme;
     let articleDate = article.date;
     let articleImage = article.image;
     let articleTitreReplacement = document.querySelectorAll('.article_title')[index];
     let articleThemeDateReplacement = document.querySelectorAll('.article_theme_date')[index];
     let articleImageReplacement = document.querySelectorAll('.article_image')[index];
     articleTitreReplacement.textContent = articleTitre;
     articleThemeDateReplacement.textContent = `${articleTheme} - ${articleDate}`;
     articleImageReplacement.src = articleImage;
 });
}
function updateAuthors(data) {
 let auteurs = data.journal.auteurs;
 auteurs.forEach((auteur, index) => {
     let prenomAuteur = auteur.prenom;
     let presentation = auteur.presentation;
     let imageAuteur = auteur.image;
     let auteurNomReplacement = document.querySelectorAll('.team_member_name')[index];
     let auteurRoleReplacement = document.querySelectorAll('.team_member_role')[index];
     let auteurImageReplacement = document.querySelectorAll('.team_member_image')[index];
     auteurNomReplacement.textContent = prenomAuteur;
     auteurRoleReplacement.textContent = presentation;
     auteurImageReplacement.src = imageAuteur;
 });
}
function updateThemes(data) {
 let themes = data.journal.themes;
 themes.forEach((theme, index) => {
     let nomTheme = theme.nom;
     let descriptionTheme = theme.description;
     let themeNomReplacement = document.querySelectorAll('.theme_nom')[index];
     let themeDescriptionReplacement = document.querySelectorAll('.theme_description')[index];
     themeNomReplacement.textContent = nomTheme;
     themeDescriptionReplacement.textContent = descriptionTheme;
 });
}
getData();