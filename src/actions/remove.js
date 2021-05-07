// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
};

// module.exports = removeExpense