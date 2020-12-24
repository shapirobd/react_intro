const App = () => {
	return (
		<div>
			<Tweet
				username="shapirobd"
				name="Brian Shapiro"
				date="December 24, 2020"
				message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam distinctio quo sint facere esse corporis accusantium laboriosam, velit facilis maxime exercitationem itaque animi soluta officia tenetur excepturi fugit? Dolorum?"
			/>
			<Tweet
				username="bob_smith1"
				name="Bob Smith"
				date="December 23, 2020"
				message="What's up guys? My name is Bob."
			/>
			<Tweet
				username="soccerguy99"
				name="Jake Jones"
				date="December 22, 2020"
				message="I love soccer! I've been playing all my life and I never want to quit!"
			/>
		</div>
	);
};

console.log("app");
ReactDOM.render(<App />, document.getElementById("root"));
