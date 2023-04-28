const {Database} = require('./../database/database')

/**
 * Clase que extiende de la configuración de la base de datos
 */
class P1Model extends Database{
    static create(app){
        return new P1Model(app.locals.mysqlConnectionPool);
    }

    async create(name,genre,release_year,description,classification){
        const newMovie = await this.queryView({sql:`INSERT INTO movie(name,release_year,description,classification,genre) VALUES ('${name}',${release_year},'${description}','${classification}','${genre}')`})
        if(newMovie.affectedRows > 0){
            return this.queryView({sql:`SELECT * FROM movie WHERE movie_id = ${newMovie.insertId}`})
        }
    }
    read(){
        return this.queryView({sql:`SELECT * FROM movie`})
    }

    async update(movie_id,name,genre,release_year,description,classification){
        const exist = await this.queryView({sql:`SELECT * FROM movie WHERE movie_id = ${movie_id}`});
        if(exist.length == 0){
            return false;
        }
        const movie = await this.queryView({sql:`UPDATE movie SET name = '${name}',release_year = ${release_year},description='${description}',classification = '${classification}',genre = '${genre}' WHERE movie_id = ${movie_id}`})
        if(movie.affectedRows > 0){
            return this.queryView({sql:`SELECT * FROM movie WHERE movie_id = ${movie_id}`})
        }
    }

    async delete(movie_id){
        const exist = await this.queryView({sql:`SELECT * FROM movie WHERE movie_id = ${movie_id}`});
        if(exist.length == 0){
            return false;
        }
        return this.queryView({sql:`DELETE FROM movie WHERE movie_id = ${movie_id}`})
    }

    readName(){
        return this.queryView({sql:`SELECT name FROM dev WHERE dev_id=1`})
    }

    readCarnet(){
        return this.queryView({sql:`SELECT card FROM dev WHERE dev_id=1`})
    }


}

module.exports = {P1Model};