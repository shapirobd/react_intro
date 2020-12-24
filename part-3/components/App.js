const App = () => {
	return (
		<Row>
			<Person name="Adam" age={13} hobbies={["football", "drawing"]} />
			<Person
				name="Blake"
				age={18}
				hobbies={["painting", "guitar", "working out"]}
			/>
			<Person
				name="Christopher"
				age={21}
				hobbies={["birdwatching", "running", "piano"]}
			/>
			<Person name="Daniel" age={16} hobbies={["football", "drawing"]} />
			<Person
				name="Elizabeth"
				age={27}
				hobbies={["painting", "guitar", "working out"]}
			/>
			<Person
				name="Francisco"
				age={24}
				hobbies={["birdwatching", "running", "piano"]}
			/>
		</Row>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
