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

let first = confirm("Do you want to see the first contact?");

if (first) {
  alert(
    `name : ${contacts[0].name} / phone : ${contacts[0].phone} / email : ${contacts[0].email}`
  );
}

let last = confirm("Do you want to see the last contact?");

if (last) {
  lI = contacts.length - 1;
  alert(
    `name : ${contacts[lI].name} / phone : ${contacts[lI].phone} / email : ${contacts[lI].email}`
  );
}

let newContact = confirm("Do you want to add a new contact?");

if (newContact) {
  let firstName = prompt("Enter a Name Please");
  let phoneNumber = prompt("Enter a Phone Number Please");
  let emailAddress = prompt("Enter an Email Address Please");
  if (firstName && phoneNumber && emailAddress) {
    let newContact = {
      name: firstName,
      phone: phoneNumber,
      email: emailAddress,
    };
  } else {
    alert("No Record added - Error with input");
  }
}
