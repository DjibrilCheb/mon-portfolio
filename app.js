// Logique de l'application Portfolio - Djibril Cheblal

// 1. Initialisation des données (chargement depuis localStorage si existant, sinon depuis data.js)
let currentData = {};
const storageKey = 'portfolio_djibril_data';

function loadData() {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    try {
      currentData = JSON.parse(savedData);
    } catch (e) {
      console.error("Erreur lors de la lecture des données sauvegardées, chargement des données par défaut", e);
      currentData = { ...portfolioData };
    }
  } else {
    currentData = { ...portfolioData };
  }
}

// Sauvegarde temporaire dans le localStorage
function saveToLocalStorage() {
  localStorage.setItem(storageKey, JSON.stringify(currentData));
}

// 2. Rendu de l'application
function renderApp() {
  // Profil Global
  document.title = `${currentData.profil.nom} | Portfolio BUT Informatique`;
  document.getElementById('profile-logo-name').textContent = currentData.profil.nom;
  document.getElementById('footer-logo-name').textContent = currentData.profil.nom;
  
  // Renseigner les liens dans le footer et contact
  const emailElem = document.getElementById('profile-email');
  if (emailElem) {
    emailElem.textContent = currentData.profil.email;
    emailElem.href = `mailto:${currentData.profil.email}`;
  }
  
  const githubElem = document.getElementById('profile-github');
  if (githubElem) {
    githubElem.textContent = currentData.profil.github;
    githubElem.href = currentData.profil.github;
  }
  
  const linkedinElem = document.getElementById('profile-linkedin');
  if (linkedinElem) {
    linkedinElem.textContent = currentData.profil.linkedin;
    linkedinElem.href = currentData.profil.linkedin;
  }
  
  const cvInput = document.getElementById('cv-url-input');
  cvInput.value = currentData.profil.cvUrl;
  const cvBtn = document.getElementById('download-cv-btn');
  cvBtn.href = currentData.profil.cvUrl;

  // Rendu de l'aperçu dynamique du CV (Image si disponible)
  const cvPreviewContainer = document.querySelector('.cv-preview-placeholder');
  if (currentData.profil.cvUrl && currentData.profil.cvUrl !== '#') {
    const isPdf = currentData.profil.cvUrl.toLowerCase().endsWith('.pdf');
    const previewImg = isPdf ? currentData.profil.cvUrl.replace(/\.pdf$/i, '.jpg') : currentData.profil.cvUrl;
    cvPreviewContainer.innerHTML = `<img src="${previewImg}" alt="Aperçu du CV" style="width:100%; height:100%; object-fit:contain; border-radius:8px; cursor:pointer; transition: transform 0.3s ease;" class="cv-preview-img" onclick="window.open('${currentData.profil.cvUrl}', '_blank')">`;
    cvPreviewContainer.style.border = 'none';
    cvPreviewContainer.style.background = 'none';
  } else {
    cvPreviewContainer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-accent"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <p class="mt-md text-center text-sm text-muted">Aperçu du CV (PDF)<br><span class="text-xs">Remplacez cvUrl dans data.js pour afficher votre CV</span></p>
    `;
    cvPreviewContainer.style.border = '2px dashed var(--divider)';
    cvPreviewContainer.style.background = 'rgba(255,255,255, 0.01)';
  }

  // Rendu de l'avatar
  const avatarElem = document.getElementById('profile-avatar');
  if (currentData.profil.avatarUrl) {
    avatarElem.src = currentData.profil.avatarUrl;
    avatarElem.style.display = 'block';
  } else {
    avatarElem.style.display = 'none';
  }

  // Page Accueil
  document.getElementById('accueil-bienvenue').textContent = currentData.accueil.bienvenue;
  document.getElementById('accueil-soustitre').textContent = currentData.accueil.soustitre;
  document.getElementById('accueil-boutonTexte').textContent = currentData.accueil.boutonTexte;

  // Page Présentation
  document.getElementById('pres-introduction').textContent = currentData.presentation.introduction;
  document.getElementById('pres-parcoursLogique').textContent = currentData.presentation.parcoursLogique;
  document.getElementById('pres-projet-desc').textContent = currentData.presentation.projetPro.description;
  document.getElementById('pres-projet-secteur').textContent = currentData.presentation.projetPro.secteur;
  document.getElementById('pres-projet-metier').textContent = currentData.presentation.projetPro.metier;
  document.getElementById('pres-conclusion').textContent = currentData.presentation.conclusionEvolution;

  // Rendu de la liste de technologies
  renderTechTags();

  // Rendu des qualités (Accordéon)
  renderQualities();

  // Page Stage
  document.getElementById('stage-poste').textContent = currentData.stage.poste;
  document.getElementById('stage-entreprise').textContent = currentData.stage.entreprise;
  document.getElementById('stage-duree').textContent = currentData.stage.duree;
  document.getElementById('stage-missions').textContent = currentData.stage.missions;
  document.getElementById('stage-decouverte').textContent = currentData.stage.decouverteMondePro;
  
  document.getElementById('stage-comp1-nom').textContent = currentData.stage.competence1.nom;
  document.getElementById('stage-comp1-synthese').textContent = currentData.stage.competence1.synthese;
  document.getElementById('stage-comp1-preuves').textContent = currentData.stage.competence1.preuves;
  
  document.getElementById('stage-comp2-nom').textContent = currentData.stage.competence2.nom;
  document.getElementById('stage-comp2-synthese').textContent = currentData.stage.competence2.synthese;
  document.getElementById('stage-comp2-preuves').textContent = currentData.stage.competence2.preuves;

  // Page Objectifs
  document.getElementById('obj-courtTerme').textContent = currentData.objectifs.courtTerme;
  document.getElementById('obj-moyenTerme').textContent = currentData.objectifs.moyenTerme;
  document.getElementById('obj-longTerme').textContent = currentData.objectifs.longTerme;

  // Page SAE (chargement de l'onglet actif)
  renderActiveSAE();
}

// Rendu des tags de technologies
function renderTechTags() {
  const container = document.getElementById('pres-projet-technologies');
  container.innerHTML = '';
  
  currentData.presentation.projetPro.technologies.forEach((tech, index) => {
    const li = document.createElement('li');
    li.className = 'tech-tag-item';
    
    const span = document.createElement('span');
    span.textContent = tech;
    li.appendChild(span);
    
    // Bouton de suppression en mode édition
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-tag-btn edit-only';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.title = 'Supprimer cette technologie';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentData.presentation.projetPro.technologies.splice(index, 1);
      saveToLocalStorage();
      renderTechTags();
    });
    li.appendChild(deleteBtn);
    
    container.appendChild(li);
  });

  // Bouton d'ajout en mode édition
  const addLi = document.createElement('li');
  addLi.className = 'add-tag-item edit-only';
  
  const addBtn = document.createElement('button');
  addBtn.className = 'btn-add-tag';
  addBtn.textContent = '+ Ajouter';
  addBtn.addEventListener('click', () => {
    const newTech = prompt("Entrez le nom de la nouvelle technologie :");
    if (newTech && newTech.trim() !== '') {
      currentData.presentation.projetPro.technologies.push(newTech.trim());
      saveToLocalStorage();
      renderTechTags();
    }
  });
  
  addLi.appendChild(addBtn);
  container.appendChild(addLi);
}

// Rendu de l'accordéon des qualités
function renderQualities() {
  const container = document.getElementById('pres-qualites-container');
  container.innerHTML = '';

  currentData.presentation.qualites.forEach((qualite, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'accordion-item';
    if (index === 0) itemDiv.classList.add('active'); // Ouvrir la première par défaut

    // Header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'accordion-header';
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'quality-name-text';
    titleSpan.textContent = qualite.nom;
    headerDiv.appendChild(titleSpan);

    // Edit controls for quality name
    const editNameBtn = document.createElement('button');
    editNameBtn.className = 'btn-edit-inline edit-only';
    editNameBtn.innerHTML = '✏️';
    editNameBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const newName = prompt("Modifier le nom de la qualité :", qualite.nom);
      if (newName && newName.trim() !== '') {
        qualite.nom = newName.trim();
        saveToLocalStorage();
        renderQualities();
      }
    });
    headerDiv.appendChild(editNameBtn);

    const iconSvg = document.createElement('div');
    iconSvg.className = 'accordion-icon-wrapper';
    iconSvg.innerHTML = `<svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
    headerDiv.appendChild(iconSvg);

    headerDiv.addEventListener('click', () => {
      // Toggle active status
      const isActive = itemDiv.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
      if (!isActive) {
        itemDiv.classList.add('active');
      }
    });

    itemDiv.appendChild(headerDiv);

    // Content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'accordion-content';
    
    const descP = document.createElement('p');
    descP.className = 'quality-desc-editable';
    descP.textContent = qualite.exemple;
    
    // Rendre la description éditable en direct si mode édition activé
    if (document.body.classList.contains('edit-mode-active')) {
      descP.contentEditable = true;
      descP.className += ' editable';
      descP.addEventListener('blur', () => {
        qualite.exemple = descP.textContent.trim();
        saveToLocalStorage();
      });
    }

    contentDiv.appendChild(descP);
    itemDiv.appendChild(contentDiv);

    // Contrôles de suppression en mode édition
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete-quality btn-danger btn-sm edit-only';
    deleteBtn.textContent = 'Supprimer cette qualité';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Voulez-vous vraiment supprimer "${qualite.nom}" ?`)) {
        currentData.presentation.qualites.splice(index, 1);
        saveToLocalStorage();
        renderQualities();
      }
    });
    contentDiv.appendChild(deleteBtn);

    container.appendChild(itemDiv);
  });

  // Bouton d'ajout de qualité
  const addBtnWrapper = document.createElement('div');
  addBtnWrapper.className = 'edit-only mt-md text-right';
  
  const addBtn = document.createElement('button');
  addBtn.className = 'btn btn-secondary btn-sm';
  addBtn.textContent = '+ Ajouter une qualité';
  addBtn.addEventListener('click', () => {
    const qualName = prompt("Entrez le nom de la qualité :");
    if (qualName && qualName.trim() !== '') {
      const qualEx = prompt("Décrivez un exemple concret qui illustre cette qualité :");
      currentData.presentation.qualites.push({
        nom: qualName.trim(),
        exemple: qualEx ? qualEx.trim() : "Exemple à remplir..."
      });
      saveToLocalStorage();
      renderQualities();
    }
  });

  addBtnWrapper.appendChild(addBtn);
  container.appendChild(addBtnWrapper);
}

// 3. Gestion des onglets SAÉ (S3 vs S4)
let activeSAE = 'S3';

function renderActiveSAE() {
  const container = document.getElementById('sae-details-container');
  const project = currentData.sae.find(s => s.semestre === activeSAE);
  
  if (!project) {
    container.innerHTML = `<p class="text-center text-muted">Aucun projet trouvé pour le semestre ${activeSAE}.</p>`;
    return;
  }

  // Construction dynamique du HTML de la SAE active
  container.innerHTML = `
    <div class="card glass-card">
      <div class="sae-card-header">
        <span class="sae-badge">${project.semestre}</span>
        <h3 id="sae-nom-display" class="sae-title editable-sae" data-field="nom">${project.nom}</h3>
      </div>
      
      <h4 class="mt-lg">Objectif(s) du projet :</h4>
      <p id="sae-objectifs-display" class="editable-sae text-block" data-field="objectifs">${project.objectifs}</p>
      
      <hr class="card-divider">
      
      <div class="grid grid-2-col gap-lg">
        <div>
          <h4>Tâches principales accomplies individuellement :</h4>
          <p id="sae-tachesP-display" class="editable-sae text-block text-sm" data-field="tachesPrincipales">${project.tachesPrincipales}</p>
        </div>
        <div>
          <h4>Tâches secondaires accomplies :</h4>
          <p id="sae-tachesS-display" class="editable-sae text-block text-sm" data-field="tachesSecondaires">${project.tachesSecondaires}</p>
        </div>
      </div>

      <hr class="card-divider">

      <div class="grid grid-2-col gap-lg">
        <div>
          <h4>Compétences techniques acquises :</h4>
          <ul id="sae-comp-tech-list" class="tag-list-sae">
            <!-- Dynamically populated -->
          </ul>
        </div>
        <div>
          <h4>Compétences transversales mobilisées :</h4>
          <ul id="sae-comp-trans-list" class="tag-list-sae">
            <!-- Dynamically populated -->
          </ul>
        </div>
      </div>

      <hr class="card-divider">

      <div class="grid grid-2-col gap-lg">
        <div>
          <h4>Preuves de compétences (Lien GitHub, capture, etc.) :</h4>
          <p id="sae-preuves-display" class="editable-sae text-block text-sm" data-field="preuves">${project.preuves}</p>
        </div>
        <div>
          <h4>Pistes d'amélioration :</h4>
          <p id="sae-ameliorations-display" class="editable-sae text-block text-sm" data-field="pistesAmelioration">${project.pistesAmelioration}</p>
        </div>
      </div>
    </div>
  `;

  // Remplissage des listes de compétences
  const techList = document.getElementById('sae-comp-tech-list');
  project.competencesTechniques.forEach((comp, idx) => {
    const li = createCompetenceListItem(comp, idx, 'competencesTechniques');
    techList.appendChild(li);
  });
  // Bouton Ajouter compétence technique
  const addTechLi = document.createElement('li');
  addTechLi.className = 'edit-only';
  addTechLi.innerHTML = `<button class="btn-add-tag-sm">+ Ajouter</button>`;
  addTechLi.querySelector('button').addEventListener('click', () => {
    const newComp = prompt("Ajouter une compétence technique :");
    if (newComp && newComp.trim() !== '') {
      project.competencesTechniques.push(newComp.trim());
      saveToLocalStorage();
      renderActiveSAE();
    }
  });
  techList.appendChild(addTechLi);

  const transList = document.getElementById('sae-comp-trans-list');
  project.competencesTransverses.forEach((comp, idx) => {
    const li = createCompetenceListItem(comp, idx, 'competencesTransverses');
    transList.appendChild(li);
  });
  // Bouton Ajouter compétence transversale
  const addTransLi = document.createElement('li');
  addTransLi.className = 'edit-only';
  addTransLi.innerHTML = `<button class="btn-add-tag-sm">+ Ajouter</button>`;
  addTransLi.querySelector('button').addEventListener('click', () => {
    const newComp = prompt("Ajouter une compétence transversale :");
    if (newComp && newComp.trim() !== '') {
      project.competencesTransverses.push(newComp.trim());
      saveToLocalStorage();
      renderActiveSAE();
    }
  });
  transList.appendChild(addTransLi);

  // Configuration des éléments modifiables de la SAE en direct
  if (document.body.classList.contains('edit-mode-active')) {
    container.querySelectorAll('.editable-sae').forEach(elem => {
      elem.contentEditable = true;
      elem.classList.add('editable');
      elem.addEventListener('blur', () => {
        const field = elem.getAttribute('data-field');
        project[field] = elem.textContent.trim();
        saveToLocalStorage();
      });
    });
  }
}

function createCompetenceListItem(compText, index, fieldKey) {
  const li = document.createElement('li');
  li.className = 'comp-list-item';
  
  const span = document.createElement('span');
  span.className = 'tag-badge';
  span.textContent = compText;
  li.appendChild(span);

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-tag-btn edit-only';
  delBtn.innerHTML = '&times;';
  delBtn.addEventListener('click', () => {
    const project = currentData.sae.find(s => s.semestre === activeSAE);
    project[fieldKey].splice(index, 1);
    saveToLocalStorage();
    renderActiveSAE();
  });
  li.appendChild(delBtn);

  return li;
}

// 4. Routage SPA de base (Switching Sections)
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, #btn-discover');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target');
      
      // Update active nav style
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const correspondingNavLink = document.querySelector(`.nav-link[data-target="${target}"]`);
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
      }

      // Show/Hide Page Sections
      document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
        if (section.id === target) {
          section.classList.add('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  });
}

// 5. Bascule de Thème (Sombre / Clair)
function setupThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  
  // Charger le thème initial
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }

  themeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('portfolio_theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('portfolio_theme', 'dark');
    }
  });
}

// 6. Gestion du Mode Édition
function setupEditMode() {
  const editCheckbox = document.getElementById('edit-mode-checkbox');
  const exportBtn = document.getElementById('export-json-btn');
  const resetBtn = document.getElementById('reset-data-btn');
  const statusText = document.getElementById('editor-status-text');
  
  // Bascule du mode édition
  editCheckbox.addEventListener('change', () => {
    const isEditing = editCheckbox.checked;
    
    if (isEditing) {
      document.body.classList.add('edit-mode-active');
      statusText.innerHTML = '<span class="status-active">Mode modification actif !</span>';
      exportBtn.classList.remove('disabled');
      exportBtn.removeAttribute('disabled');
      
      // Activer contenteditable sur les éléments modifiables
      document.querySelectorAll('.editable').forEach(elem => {
        elem.contentEditable = true;
      });
      
    } else {
      document.body.classList.remove('edit-mode-active');
      statusText.textContent = 'Mode lecture seule actif.';
      exportBtn.classList.add('disabled');
      exportBtn.setAttribute('disabled', 'true');
      
      // Désactiver contenteditable
      document.querySelectorAll('.editable').forEach(elem => {
        elem.contentEditable = false;
      });
    }
    
    // Re-rendre pour afficher/masquer les contrôles d'ajout/suppression
    renderApp();
  });

  // Écouteur d'événement sur tous les éléments éditables statiques pour la mise à jour des données
  document.addEventListener('blur', (e) => {
    if (!document.body.classList.contains('edit-mode-active')) return;
    
    const target = e.target;
    if (target.classList.contains('editable') && target.hasAttribute('data-key')) {
      const keyPath = target.getAttribute('data-key');
      const val = target.textContent.trim();
      
      // Mettre à jour l'objet de données imbriqué dynamique
      updateDataValue(currentData, keyPath, val);
      saveToLocalStorage();
    }
  }, true); // Use capture phase to catch blur events

  // Sauvegarde spéciale pour l'URL du CV en direct
  const cvInput = document.getElementById('cv-url-input');
  cvInput.addEventListener('input', () => {
    currentData.profil.cvUrl = cvInput.value.trim();
    saveToLocalStorage();
    document.getElementById('download-cv-btn').href = currentData.profil.cvUrl;
  });

  // Action: Exporter le fichier data.js
  exportBtn.addEventListener('click', () => {
    if (exportBtn.hasAttribute('disabled')) return;
    
    // Générer le code source final JavaScript avec les données insérées
    const fileContent = `// Les données du portfolio de Djibril Cheblal
// Ce fichier sert de base de données. En Mode Édition, vous pouvez modifier ces textes
// directement sur le site et exporter le fichier mis à jour.

const portfolioData = ${JSON.stringify(currentData, null, 2)};
`;
    
    // Créer un fichier de téléchargement dynamique
    const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Action: Réinitialiser les données
  resetBtn.addEventListener('click', () => {
    if (confirm("Voulez-vous vraiment réinitialiser toutes les données à leur état d'origine ? Vos modifications locales seront perdues.")) {
      localStorage.removeItem(storageKey);
      loadData();
      renderApp();
      // Désactiver le checkbox d'édition pour plus de sécurité
      editCheckbox.checked = false;
      document.body.classList.remove('edit-mode-active');
      statusText.textContent = 'Mode lecture seule actif.';
      exportBtn.classList.add('disabled');
      exportBtn.setAttribute('disabled', 'true');
      alert("Données réinitialisées avec succès !");
      window.location.reload();
    }
  });

  // Configurer le panneau de contrôle d'édition flottant rétractable
  const panel = document.getElementById('editor-control-panel');
  const trigger = document.getElementById('editor-toggle-trigger');
  
  trigger.addEventListener('click', () => {
    panel.classList.toggle('open');
  });

  // Fermer le panneau si on clique à l'extérieur
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && panel.classList.contains('open')) {
      panel.classList.remove('open');
    }
  });
}

// Fonction utilitaire pour mettre à jour des valeurs dans un objet imbriqué à partir d'un chemin de clé sous forme de chaîne (ex: "presentation.projetPro.secteur")
function updateDataValue(obj, keyPath, val) {
  const parts = keyPath.split('.');
  let current = obj;
  
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }
  
  current[parts[parts.length - 1]] = val;
}

// 7. Initialisation des événements sur les onglets SAE
function setupSaeTabs() {
  document.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.sae-tab-btn');
    if (tabBtn) {
      document.querySelectorAll('.sae-tab-btn').forEach(btn => btn.classList.remove('active'));
      tabBtn.classList.add('active');
      activeSAE = tabBtn.getAttribute('data-sae');
      renderActiveSAE();
    }
  });
}

// 8. Lancement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  renderApp();
  setupNavigation();
  setupThemeToggle();
  setupEditMode();
  setupSaeTabs();
});
