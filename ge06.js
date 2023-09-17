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
  let action = prompt(
    `Choose action ("first" to display the first contact, "last" to display the last contact, "all" to display all contacts, "new" to add a new contact or "quit" to exit the program)`
  );

  if ((action === "quit") | (action === "Quit")) {
    break;
  }

  if (action === "first") {
    console.log(
      `FIRST RECORD ---> name : ${contacts[0].name} / phone : ${contacts[0].phone} / email : ${contacts[0].email}`
    );
  }

  if (action === "last") {
    let lIdx = contacts.length - 1;
    console.log(
      `LAST RECORD ---> name : ${contacts[lIdx].name} / phone : ${contacts[lIdx].phone} / email : ${contacts[lIdx].email}`
    );
  }

  if (action === "all") {
    console.log("ALL RECORDS");
    console.log("-----------");
    for (let person of contacts) {
      console.log(
        `name : ${person.name} / phone : ${person.phone} / email : ${person.email}`
      );
    }
  }

  if (action === "new") {
    let newName = prompt("Please enter a name");
    let newPhone = prompt("Please enter a phone number");
    let newEmail = prompt("Please enter an email address");
    let addName = "";
    let addPhone = "";
    let addEmail = "";
    if (!newName) {
      addName = "Name unknown";
    } else {
      addName = newName;
    }
    if (!newPhone) {
      addPhone = "Phone number unknown";
    } else {
      addPhone = newPhone;
    }
    if (!newEmail) {
      addEmail = "Email address unknown";
    } else {
      addEmail = newEmail;
    }
    let newContact = {
      name: addName,
      phone: addPhone,
      email: addEmail,
    };
    contacts.push(newContact);
    console.log("NEW RECORD ADDED");
    console.log("----------------");
  }
}
