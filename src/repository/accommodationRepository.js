import { db } from "../database/database.connection.js";

export function addAccommodation(name, citiesId, description, dailyPrice){
    return db.query(`INSERT INTO hotels (name, "citiesId", description, "dailyPrice") 
    VALUES ($1, $2, $3, $4);`, [name, citiesId, description, dailyPrice])
}

export function accommodation(){
    return db.query(`SELECT * FROM hotels;`);
}

export function accommodationId(id){
    return db.query(`SELECT * FROM hotels WHERE id= $1;`, [id])
}