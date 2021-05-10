import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Check default state set correctly
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, '@@INIT');
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

// SORT_BY_AMOUNT
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

// SORT_BY_DATE
test('should set sortBy to date', () => {
    // The default setting of sortBy is 'date', so we must send in a state where this is NOT the case,
    // the other values are not important as they are not being tested
    const currentState = {
        text: '',
        sortBy: 'XXXXXXX',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'SORT_BY_DATE'
    }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

// SET_TEXT_FILTER
test('should set text filter', () => {
    const text = 'some test text'   // Use a variable to ensure no typos typing it twice!
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text
    })
    expect(state.text).toBe(text)
})

// SET_START_DATE
test('should set startDate filter', () => {
    const startDate = moment()
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate
    })
    expect(state.startDate).toEqual(startDate)
})

// SET_END_DATE
test('should set endDate filter', () => {
    const endDate = moment()
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate
    })
    expect(state.endDate).toEqual(endDate)
})