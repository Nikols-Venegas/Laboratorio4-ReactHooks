import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Statics from './componentes/Statistics';
import Button from './componentes/Button';

const App = () => {
	// save clicks of each button to its own state
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);

	const [ average, setAverage ] = useState(0);

	const clicgood = () => {
		setGood(good + 1);
		setAverage(average + 1);
	};

	const clicneutral = () => {
		setNeutral(neutral + 1);
		setAverage(average + 0);
	};

	const clicbad = () => {
		setBad(bad + 1);
		setAverage(average - 1);
	};

	return (
		<div>
			<div>
				<h2>give feedback</h2>
				<Button text="good" funclic={clicgood} />
				<Button text="neutral" funclic={clicneutral} />
				<Button text="bad" funclic={clicbad} />
			</div>
			<div>
				<Statics good={good} neutral={neutral} bad={bad} average={average} />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
