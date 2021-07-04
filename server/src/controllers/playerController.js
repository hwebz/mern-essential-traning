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

export const getPlayers = (req, res) => {
    Player.find({}, (err, players) => {
        if (err) {
            res.send(err);
        }

        res.json(players);
    });
};

export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, player) => {
        if (err) {
            res.send(err);
        }
        res.json(player);
    });
};