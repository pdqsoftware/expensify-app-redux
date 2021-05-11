import moment from 'moment'
// It uses a default export so any name here will do
// But, the name must not be inside {} as it cannot be found inside the imported file!
import selectExpenses from '../../selectors/expenses'  
import expenses from '../fixtures/expenses'

// Filter by text => 'e'
test('should filter by text value', () => {
    const filters = {
        text: 'e',     // This will select 'rEnt' and 'crEdit card'
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    // const result = []
    expect(result).toEqual([
        expenses[2],    // Credit card - most recent date
        expenses[1]     // Rent - oldest date
    ])
});

// Filter by startDate
test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ])

});

// Filter by endDate
test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(1, 'days')   // Requires a moment
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[0],
        expenses[1]
    ])
})

// Sort by date
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ])
})

// Sort by amount
test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[1],
        expenses[2],
        expenses[0]
    ])
})

