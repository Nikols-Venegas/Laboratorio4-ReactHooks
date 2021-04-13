import '../index.css';
export default function Statistic(props) {
	const {} = props;
	return (
		<p className="resultado">
			{props.text} {props.value}
			{props.signo}
		</p>
	);
}
