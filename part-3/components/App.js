const App = () => {
	return (
		<div>
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
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
