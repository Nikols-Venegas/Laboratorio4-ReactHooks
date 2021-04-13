export default function Statistic(props) {
	const {} = props;
	return (
		<p>
			{props.text} {props.value}
			{props.signo}
		</p>
	);
}
