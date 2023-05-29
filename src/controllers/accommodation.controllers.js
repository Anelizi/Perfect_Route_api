import { accommodation, accommodationId } from "../repository/accommodationRepository.js";

export async function getAccommodation(req, res){
    try {
        const {rows: hotel} = await accommodation();
        res.status(200).send(hotel);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getAccommodationId(req, res){
    const {id} = req.params;
    try {
        const hotel = await accommodationId(id);
        if (hotel.rowCount === 0) return res.status(404).send({ message: "hotel não existe!" });

        res.status(200).send(hotel.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}