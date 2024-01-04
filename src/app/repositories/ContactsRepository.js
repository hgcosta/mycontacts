const { uuid } = require("uuidv4");
const contacts = [
    {
        id: uuid(),
        name: "Hugo",
        email: "hugo@example.com",
        phone: "123-456",
        category_id: uuid(),
    },
];

class ContactRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }
}

module.exports = new ContactRepository();
