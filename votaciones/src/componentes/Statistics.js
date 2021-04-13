import Statistic from './Statistic';
import '../index.css';
export default function Statics(props) {
	const {} = props;
	return (
		<div>
			<h2 className="estadisticas">statistics</h2>
			{props.good + props.bad + props.neutral == 0 ? (
				<p className="resultado">No feedback given</p>
			) : (
				<div>
					<Statistic text="good" value={props.good} signo="" />
					<Statistic text="neutral" value={props.neutral} signo="" />
					<Statistic text="bad" value={props.bad} signo="" />
					<Statistic text="all" value={props.good + props.neutral + props.bad} signo="" />
					<Statistic
						text="average"
						value={props.average / (props.good + props.neutral + props.bad)}
						signo=""
					/>
					<Statistic
						text="positive"
						value={props.good / (props.good + props.neutral + props.bad) * 100}
						signo="%"
					/>
				</div>
			)}
		</div>
	);
}
