const friends = require("./contacts");

const { program } = require("commander");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const friendList = await friends.listContacts();
      console.table(friendList);
      break;

    case "get":
      const getContact = await friends.getContactById(id);
      console.table(getContact);
      break;

    case "add":
      const newContact = await friends.addContact({ name, email, phone });
      console.table(newContact);
      break;

    case "remove":
      const removeContact = await friends.removeContact(id);
      console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(argv);

//invokeAction({ action: "list" });

//invokeAction({ action: "get", id: "1" });

// invokeAction({
//   action: "add",
//   name: "Alex Yarosh",
//   email: "alex.ante@vestibul.co.uk",
//   phone: "(999) 999-9999",
// });

// invokeAction({ action: "remove", id: "100" });

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();

const options = program.opts();

invokeAction(options);
