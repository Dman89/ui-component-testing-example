
const view = (state, { dispatch }) => {
    const { tally } = state;
	return (
		<div>
			<h2>Click Counter</h2>
			<span>
				<button
					className="btn-primary"
					type="button"
					on-click={() => dispatch("INCREMENT")}
				>
					Increment
				</button>
				<button
					className="btn-danger"
					type="button"
					on-click={() => dispatch("DECREMENT")}
				>
					Decrement
				</button>
			</span>
			<span>
				<button
					className="btn-secondary"
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