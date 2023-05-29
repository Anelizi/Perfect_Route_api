import { db } from "../database/database.connection.js";

export function addCitys(name, description, photo){
    return db.query(`INSERT INTO cities (name, description, photo) 
    VALUES ($1, $2, $3);`, [name, description, photo])
}

export function citys(){
    return db.query(`SELECT * FROM cities;`);
}

export function cityId(id){
    return db.query(`SELECT * FROM cities WHERE id= $1;`, [id])
}
