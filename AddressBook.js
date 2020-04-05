const Contact = require('./Contact.js');

class AddressBook {
  constructor(contacts = []) {
    this.addressBook = [];
    this.initialComplete = false;
    if (contacts instanceof Function) {
      contacts = contacts(); 
    }
    if (contacts instanceof Array) {
      this.addressBook = contacts;
    }
    else if (contacts instanceof Object) {
      this.addressBook.push(contacts);
    }
  }
  addContact(contact) {
    if (!contact) {
      throw new Error("No contact provied");
    }
    this.addressBook.push(contact);
  }
  deleteContact(num) {
    if (num >= this.count() ) {
      throw new Error("Don't have this contact");
    }
    return this.addressBook.splice(num, 1);
  }
  getContacts() {
    return this.addressBook;
  }
  getContact(num) {
    if (this.count() !== 0 && num >= this.count() ) {
      throw new Error("Don't have this contact");
    }
    if (this.count() === 0) {
      return undefined;
    }
    return this.addressBook[num];
  }
  count() {
    return this.addressBook.length;
  }
  // an asynchronous function
  getInitialContacts(cb) {
    setTimeout(() => {
      this.initialComplete = true;
      if (cb instanceof Function) {
        return cb();
      }
    }, 1000);
  }
}

module.exports = AddressBook;
// export default AddressBook;

//let addressBook = new AddressBook();
//let contact = new Contact();
//addressBook.addContact(contact);
//console.log(addressBook.getContact(0));

