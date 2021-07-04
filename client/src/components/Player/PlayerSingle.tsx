const PlayerSingle = ({
    player
}: any) => {
    return player ? (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src="https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg" alt={`${player.firstName} ${player.lastName}`} />
                    <span className="card-title">{`${player.firstName} ${player.lastName}`}</span>
                </div>
                <div className="card-content">
                    <p>Phone: {player.phone} - Email: {player.email}</p>
                </div>
                <div className="card-action">
                    Team: {player.team}
                </div>
                </div>
            </div>
        </div>
    ) : <></>;
};

export default PlayerSingle;