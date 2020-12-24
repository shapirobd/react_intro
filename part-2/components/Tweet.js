const Tweet = (props) => {
	return (
		<div>
			<h1>{props.username}</h1>
			<h2>{props.name}</h2>
			<i>{props.date}</i>
			<blockquote>{props.message}</blockquote>
		</div>
	);
};
