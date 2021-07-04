import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';


const App = () => {
	const [players, setPlayers] = useState<any[]>([]);
	const [currentPlayer, setCurrentPlayer] = useState<any>();

	const updateCurrentPlayer = (item: any) => setCurrentPlayer(item);

	useEffect(() => {
		const url = '/players';
		axios.get(url).then((response: any) => setPlayers(response.data));
	}, [])

	return (
		<div className="App">	
			<div className="row">
				<nav>
					<div className="nav-wrapper blue darken">
						<div className="col s12">
							<a href="/" className="brand-logo">Soccer Management</a>
						</div>
					</div>
				</nav>
			</div>
			<div className="row">
				<div className="col s3">
					<PlayerList
						players={players}
						updateCurrentPlayer={updateCurrentPlayer}
					/>
				</div>
				<div className="col s3">
					<PlayerSingle
						player={currentPlayer}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col s12">
					<PlayerForm />
				</div>
			</div>
		</div>
	);
}

export default App;
