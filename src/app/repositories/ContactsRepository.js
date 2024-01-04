const { v4 } = require("uuid");
const contacts = [
    {
        id: v4(),
        name: "Hugo",
        email: "hugo@example.com",
        phone: "123-456",
        category_id: v4(),
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
