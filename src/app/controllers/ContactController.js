const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
    async index(request, response) {
        //listar todos os registros
        const contacts = await ContactsRepository.findAll();
        response.json(contacts);
    }
    show() {
        //obter um registro
    }
    store() {
        //criar um novo registro
    }
    update() {
        //editar um registro
    }
    delete() {
        //deletar um registro
    }
}

module.exports = new ContactController();
