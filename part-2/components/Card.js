const Card = (props) => {
	return (
		<div className="card col-10 m-2 bg-dark text-light">
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
				<ul className="card-text">{props.text}</ul>
				<i href="#" className="text-secondary">
					{props.date}
				</i>
			</div>
		</div>
	);
};
