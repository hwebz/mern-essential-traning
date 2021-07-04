const PlayerList = ({
    players,
    updateCurrentPlayer
}: any) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4>Players</h4>
                </li>
                {players.map((player: any) => (
                    <li className="collection-item">
                        <a
                            href="#!"
                            className="collection-item"
                            key={player._id}
                            onClick={() => updateCurrentPlayer(player)}
                        >{`${player.firstName} ${player.lastName}`}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;