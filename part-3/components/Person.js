const Person = (props) => {
	let name = props.name;
	let message;
	if (props.age >= 18) {
		message = "Please go vote!";
	} else {
		message = "You must be 18";
	}
	if (props.name.length > 8) {
		name = props.name.slice(0, 8 - props.name.length);
	}
	const hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);
	return (
		<div>
			<p>Learn some information about this person</p>
			<p>Name: {name}</p>
			<p>Age: {props.age}</p>
			<h3>{message}</h3>
			<ul>{hobbies}</ul>
		</div>
	);
};
