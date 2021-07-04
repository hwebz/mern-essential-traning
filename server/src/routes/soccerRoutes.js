import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer
} from '../controllers/playerController';

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);
    
    app.route('/players/:PlayerId')
        .get(getPlayerWithID)
        .put(updatePlayer)
        .delete(deletePlayer);
};

export default routes;