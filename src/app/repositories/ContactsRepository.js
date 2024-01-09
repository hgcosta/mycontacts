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
    findByEmail(email) {
        return new Promise((resolve) => {
            resolve(contacts.find((contact) => contact.email === email));
        });
    }
    create({ name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id: v4(),
            };
            contacts.push(newContact);
            resolve(newContact);
        });
    }
    update(id, { name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const updatedContact = {
                name,
                email,
                phone,
                category_id,
            };
            contacts = contacts.map((contaato) => {
                contaato.id === id ? updatedContact : contaato;
            });
            console.log(contacts);
            resolve(updatedContact);
        });
    }
}

module.exports = new ContactRepository();
