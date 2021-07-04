import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

/**
{
	"firstName": "Ha",
	"lastName": "Manh Do",
	"email": "hado@gmail.com"
}
 */
export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, player) => {
        if (err) {
            res.send(err);
        }

        res.json(player);
    });
};