const { v4 } = require("uuid");
let contacts = [
    {
        id: v4(),
        name: "Hugo",
        email: "hugo@example.com",
        phone: "123-456",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Henrique",
        email: "henrique@example.com",
        phone: "819913-456",
        category_id: v4(),
    },
];

class ContactRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }
    findById(id) {
        return new Promise((resolve) => {
            resolve(contacts.find((contact) => contact.id === id));
        });
    }
    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id != id);
            resolve();
        });
    }
}

module.exports = new ContactRepository();
