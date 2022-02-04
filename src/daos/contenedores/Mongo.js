const { MongoClient, ObjectId } = require('mongodb');
const {logger} = require('../../logger.js')

const {database} = require("../../../options/mongoDB");

const stringConection = database.url.replace('<username>', process.env.MONGO_DB_USER).replace('<password>', process.env.MONGO_DB_PASSWORD)


class Mongo {

    constructor( collection) {
        const client = new MongoClient(stringConection, { serverSelectionTimeOutMS: 10000 });

        client.connect();   
        
        this.collection = client.db(process.env.MONGO_DB).collection(collection)
                
    }

    // save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    async create(object) {

        await this.collection.insertOne(object)
            .then()
    }

    // getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
    async getAll() {
        const array = await this.collection.find().toArray()

        return array
    }

    async getById(id) {

        try {
            const [object] = await this.collection.find({ id: id }).toArray()
            return object
        }
        catch (err) {
            logger.error(err)
        }
    }

    async getByObjectId(id) {

        try {
            const [object] = await this.collection.find({ _id: ObjectId(id) }).toArray()

            return object
        }
        catch (err) {
            logger.error(err)
        }
    }

    // deleteAll(): void - Elimina todos los objetos presentes en el archivo
    async deleteAll() {
        this.collection.findOne({}).deleteAll()
    }

    async deleteById(id) {
        this.collection.deleteOne({ id: Number.parseInt(id) }, function (err, obj) {
            if (err) throw err;
            logger.error("1 document deleted");
        });
    }

}

module.exports =  Mongo