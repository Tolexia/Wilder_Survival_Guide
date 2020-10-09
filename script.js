function onDocumentReady() {
  // initialiser un "tableau associatif" (ici un objet en js) vide par défaut
  let checkStates = {};

  // charger le local storage (s'il contient quelque chose)
  const checkStatesValue = localStorage.getItem('checkStates');

  if (checkStatesValue != null) {
    checkStates = JSON.parse(checkStatesValue);
  }

  // parcourir les checkbox
  const checkboxes = document.querySelectorAll('.checkable');

  for (let i = 0; i < checkboxes.length; i++) {
    // pour chaque checkbox
    const checkbox = checkboxes[i];

    // étape 1 : la cocher si le storage dit qu'elle a déjà été cochée
    if (checkStates[checkbox.id] != null && checkStates[checkbox.id] != false) {
      checkbox.checked = true;
    }

    // étape 2 : surveiller les changements pour mettre à jour le storage
    checkbox.addEventListener('change', function(event) {
      const key = event.target.id;
      const value = event.target.checked;

      checkStates[key] = value;

      localStorage.setItem('checkStates', JSON.stringify(checkStates));
    })
  }
}
