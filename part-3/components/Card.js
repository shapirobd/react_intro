const Card = (props) => {
	return (
		<div className="card col-3 m-2" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
				<ul className="card-text">{props.text}</ul>
				<a href="#" className="card-link">
					Learn more about this person
				</a>
			</div>
		</div>
	);
};
