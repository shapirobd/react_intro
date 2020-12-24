const Tweet = (props) => {
	return (
		<Card
			title={props.username}
			subtitle={props.name}
			text={props.message}
			date={props.date}
		/>
	);
};
