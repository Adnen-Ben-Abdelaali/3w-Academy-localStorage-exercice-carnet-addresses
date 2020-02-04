
const DOM_LISTE_DES_CONTCACTS = 'Contacts';

function chargerContacts() {
  let maListeDeContacts = JSON.parse(localStorage.getItem(DOM_LISTE_DES_CONTCACTS));

  if(maListeDeContacts == null) {

    return [];
  }
  return maListeDeContacts;
}

function afficherContacts() {

  const contacts = chargerContacts();
  let unContact;

  $("#listeDeContacts").empty();
  for(let i = 0; i < contacts.length; i++) {
    unContact = $('<li>');
    unContact.text('<a>'+ contacts[i]["nom"] + ' ' + contacts[i]["prenom"] + '</a>');
    $('#listeDeContacts').append(unContact);
  }


}