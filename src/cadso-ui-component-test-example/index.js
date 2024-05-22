import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import actionHandlers from './actionHandlers';
import view from './view';


createCustomElement('cadso-ui-component-test-example', {
	renderer: { type: snabbdom },
	initialState: {
		tally: 0
    },
	view,
	styles,
	actionHandlers
});
