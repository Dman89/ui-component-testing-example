import { tallyFn } from './helpers';

export default {
    INCREMENT: ({ state, updateState }) => {
        const { tally: stateTally = 0 } = state;
        const tally = tallyFn({ stateTally, action: 'INCREMENT' });
        updateState({ tally });
    },
    DECREMENT: ({ state, updateState }) => {
        const { tally: stateTally = 0 } = state;
        const tally = tallyFn({ stateTally, action: 'DECREMENT' });
        updateState({ tally });
    },
    CLEAR: ({ updateState }) => {
        updateState({ tally: 0 });
    },
}