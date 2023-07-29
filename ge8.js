let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

while (true) {
  let choice = prompt(
    `Choose from the following options - "one" = show one contact, "all" = Show all contacts, "new" = Add new contact OR "quit" = quit`
  );

  if (choice === "quit") {
    break;
  }

  const showContact = (arr1, idx1) => {
    let displayOneContact;
    if (arr1 instanceof Array) {
      displayOneContact = `name: ${contacts[idx1].name} / phone : ${contacts[idx1].phone} / email : ${contacts[idx1].email}`;
    } else {
      displayOneContact = "ERROR - Contacts passed is not an array!";
    }
    return displayOneContact;
  };

  if (choice === "one") {
    let lastIndex = contacts.length - 1;

    let promptMessage1 = `Please enter an index number between 0 and ${lastIndex}`;

    let contactIndex = prompt(promptMessage1);

    let correctIndex = false;

    while (correctIndex === false) {
      contactIndex < 0
        ? (contactIndex = prompt(promptMessage1))
        : contactIndex <= lastIndex
        ? (correctIndex = true)
        : (contactIndex = prompt(promptMessage1));
    }

    console.log(
      `The contact at index ${contactIndex} is : ${showContact(
        contacts,
        contactIndex
      )}`
    );
  }

  const showAllContacts = (arr2) => {
    let displayAllContacts = "";
    let counter = 1;
    if (arr2 instanceof Array) {
      for (contact of arr2) {
        displayAllContacts += `Contact ${counter}) name: ${contact.name} / phone : ${contact.phone} / email : ${contact.email} \n `;
        counter++;
      }
    } else {
      displayAllContacts = "ERROR - Contacts passed is not an array!";
    }
    return displayAllContacts;
  };

  if (choice === "all") {
    console.log("All Contacts");
    console.log("------------");
    console.log(showAllContacts(contacts));
  }

  const addNewContact = (arr3, newPerson, newPhone, newEmail) => {
    let displayNewContactError = "No Errors - New contact successfully added";
    if (arr3 instanceof Array) {
      if (newPerson && newPerson && newEmail) {
        let newContact = {
          name: newPerson,
          phone: newPhone,
          email: newEmail,
        };
        contacts.push(newContact);
      } else {
        displayNewContactError = "Contact Details not fully supplied";
      }
    } else {
      displayNewContactError = "ERROR - Contacts passed is not an array!";
    }
    return displayNewContactError;
  };

  if (choice === "new") {
    let addPerson = prompt("Enter a name Please");
    let addPhone = prompt("Enter a phone number Please");
    let addEmail = prompt("Enter an email address Please");
    console.log(
      `Message : ${addNewContact(contacts, addPerson, addPhone, addEmail)}`
    );
  }
}
