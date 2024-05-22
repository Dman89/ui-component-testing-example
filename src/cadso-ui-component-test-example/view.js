
const view = (state, { dispatch }) => {
    const { tally } = state;
	return (
		<div>
			<h2>Click Counter</h2>
			<span>
				<button
					type="button"
					on-click={() => dispatch("INCREMENT")}
				>
					Increment
				</button>
				<button
					type="button"
					on-click={() => dispatch("DECREMENT")}
				>
					Decrement
				</button>
			</span>
			<span>
				<button
					type="button"
					on-click={() => dispatch("CLEAR")}
				>
					Clear
				</button>
			</span>
			<div>Value: {tally}</div>
		</div>
	);
};

export default view;