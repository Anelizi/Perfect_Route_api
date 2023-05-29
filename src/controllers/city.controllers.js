import { citys, cityId, addCitys } from "../repository/cityRepository.js";

export async function postCity(req, res){
    const {name, description, photo} = req.body;
    try {
        const city = await addCitys(name, description, photo);

        res.status(201).send(city.rows)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getCity(req, res){
    try {
        const {rows: cities} = await citys();
        res.status(200).send(cities);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getCityId(req, res){
    const {id} = req.params;
    try {
        const city = await cityId(id);
        if (city.rowCount === 0) return res.status(404).send({ message: "cidade não existe!" });

        res.status(200).send(city.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}