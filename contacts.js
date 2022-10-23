const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContact = async () => {
  const list = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(list);
};

const getContactById = async (Id) => {
  const list = await listContact();
  const [item] = list.filter(({id}) => id === Id);
  return item;
};

const removeContact = async (contactId) => {
  const contacts = await listContact();
  const id = contacts.findIndex(({id}) => id.toString() === contactId);
  if (id === -1) return;
  const update = contacts.splice(id, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return update;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContact();
  const add = {
    id: nanoid(5),
    name,
    email,
    phone,
  };
  contacts.push(add);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return add;
};

module.exports = {listContact, getContactById, removeContact, addContact};
