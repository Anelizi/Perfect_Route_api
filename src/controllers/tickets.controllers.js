import { flights, flightsId } from "../repository/ticketsRepository.js";

export async function getFlights(req, res){
    try {
        const {rows: passagem} = await flights();
        res.status(200).send(passagem);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getFlightsId(req, res){
    const {id} = req.params;
    try {
        const passagem = await flightsId(id);
        if (passagem.rowCount === 0) return res.status(404).send({ message: "passagem não existe!" });

        res.status(200).send(passagem.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}