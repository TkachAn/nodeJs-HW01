import fs from "fs/promises";
await fs.writeFile("../db/contacts.json", {tel, name, email});
