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
	return <Card title={name} subtitle={message} text={hobbies} />;
};
