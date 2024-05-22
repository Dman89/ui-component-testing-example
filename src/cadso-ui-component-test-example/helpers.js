export const tallyFn = ({ stateTally, action }) => {
    if (action === 'INCREMENT') {
        return stateTally + 1;
    }
    if (action === 'DECREMENT') {
        return stateTally - 1;
    }
    return stateTally;
}