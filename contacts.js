const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("contacts.json");
console.log("contactsPath:", contactsPath);

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// // TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(Path, utf8)
    .then((data) => console.log(toString(data)))
    .catch((err) => console.error(err));
}

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
// module.exports(listContacts, getContactById, addContact, removeContact);
