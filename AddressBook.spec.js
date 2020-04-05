const AddressBook = require('./AddressBook');
const Contact = require('./Contact');

describe("Addres Book", () => {
  let addressBook, thisContact;

  beforeEach(() => {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', () => {
    addressBook.addContact(thisContact);
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', () => {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

describe("Async Address Book 1", () => {
  let addressBook = new AddressBook();

  beforeEach((done) => {
    addressBook.getInitialContacts(() => done());
  });

  it('should grab initial contacts', (done) => {
    expect(addressBook.initialComplete).toBe(true);
    done();
  });
});

describe("Async Address Book 2", () => {
  let addressBook = new AddressBook();

  it('should grab initial contacts', (done) => {
    function cb() {
      try {
        expect(addressBook.initialComplete).toBe(true);
        done();
      }
      catch (error) {
        done(error);
      }
    }
    addressBook.getInitialContacts(cb);
  });
});

