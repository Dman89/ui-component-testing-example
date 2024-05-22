import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
    const { tally } = state;
	return (
		<div>
			<h2>Click Counter</h2>
			<span>
				<button
					type="button"
					on-click={() => updateState({ tally: tally + 1 })}
				>
					Increment
				</button>
				<button
					type="button"
					on-click={() => updateState({ tally: tally - 1 })}
				>
					Decrement
				</button>
			</span>
			<span>
				<button
					type="button"
					on-click={() => updateState({tally: 0})}
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
	styles
});
