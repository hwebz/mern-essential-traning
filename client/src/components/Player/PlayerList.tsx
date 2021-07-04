const PlayerList = ({
    players,
    updateCurrentPlayer
}: any) => {
    return (
        <div>
            <ul className="colection with-header">
                <li className="collection-header">
                    <h4>Players</h4>
                </li>
                {players.map((player: any) => (
                    <a
                        href="#!"
                        className="collection-item"
                        key={player._id}
                        onClick={() => updateCurrentPlayer(player)}
                    >{`${player.firstName} ${player.lastName}`}</a>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;