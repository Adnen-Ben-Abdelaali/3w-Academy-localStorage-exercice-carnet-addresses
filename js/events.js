  
  /* fonction permettant la récupération 
    des éléments depuis les champs du formualire
  */
    function onClickAjouter() {
    
      let categorie = $("#categorie").val();
      let nom = $("#nom").val();
      let prenom = $("#prenom").val();
      let telephone = $("#telephone").val(); 

      let nouveauContact = {
        "categorie": categorie,
        "nom": nom,
        "prenom": prenom,
        "telephone": telephone
      };
      let listeDesContacts = chargerContacts();
      listeDesContacts.push(nouveauContact);
      
      localStorage.setItem(DOM_LISTE_DES_CONTCACTS, JSON.stringify(listeDesContacts));
      

    }

  
