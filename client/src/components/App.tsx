import React from 'react';
import './App.scss';
import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';


const App = () => {
	return (
		<div className="App">
			<div className="row">
				<div className="col s12">Menu</div>
			</div>
			<div className="row">
				<div className="col s3">
					<PlayerList />
				</div>
				<div className="col s3">
					<PlayerSingle />
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
