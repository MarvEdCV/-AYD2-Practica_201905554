const {Database} = require('./../database/database')

/**
 * Clase que extiende de la configuración de la base de datos
 */
class P1Model extends Database{
    static create(app){
        return new P1Model(app.locals.mysqlConnectionPool);
    }

    readName(){
        return this.queryView({sql:`SELECT name FROM dev WHERE dev_id=1`})
    }

    readCarnet(){
        return this.queryView({sql:`SELECT card FROM dev WHERE dev_id=1`})
    }


}

module.exports = {P1Model};