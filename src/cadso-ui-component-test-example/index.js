import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import actionHandlers from './actionHandlers';

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

createCustomElement('cadso-ui-component-test-example', {
	renderer: { type: snabbdom },
	initialState: {
		tally: 0
    },
	view,
	styles,
	actionHandlers
});
