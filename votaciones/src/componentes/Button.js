import '../index.css';
export default function Button(props) {
	const {} = props;
	return (
		<button className="botones" onClick={props.funclic}>
			{props.text}
		</button>
	);
}
