const { v4 } = require("uuid");

const db = require("../../database");

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
    async findAll() {
        const rows = await db.query("SELECT * FROM contacts");
        return rows;
    }
    async findById(id) {
        const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [
            id,
        ]);
        return row;
    }
    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id != id);
            resolve();
        });
    }
    async findByEmail(email) {
        const [row] = await db.query(
            "SELECT * FROM contacts WHERE email = $1",
            [email]
        );
        return row;
    }
    async create({ name, email, phone, category_id }) {
        const [row] = await db.query(
            `
        INSERT INTO contacts (name, email, phone, category_id)
        VALUES($1, $2, $3, $4)
        RETURNING *
        `,
            [name, email, phone, category_id]
        );
        console.log("Usuário Cadastrado com sucesso");
        return row;
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
