import { db } from "../database/database.connection.js";

export function addFlights(airlinesId, originCityId, destinationCityId, departureTime, arrivalTime, price){
    return db.query(`INSERT INTO flights ("airlinesId", "originCityId", "destinationCityId", "departureTime", "arrivalTime", price) 
    VALUES ($1, $2, $3, $4, $5, $6);`, [airlinesId, originCityId, destinationCityId, departureTime, arrivalTime, price])
}

export function flights(){
    return db.query(`SELECT * FROM flights;`);
}

export function flightsId(id){
    return db.query(`SELECT * FROM flights WHERE id= $1;`, [id])
}