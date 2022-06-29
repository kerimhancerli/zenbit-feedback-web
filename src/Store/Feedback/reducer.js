import { createReducer } from '@reduxjs/toolkit';
import { sendFeedback } from './action';

const initlState = {
    status: "Empty",
    errorMessage: undefined
};


const FeedbackReducer = createReducer(initlState, builder => {
    builder
        .addCase(sendFeedback.pending, (state, action) => {
            state = {
                ...state,
                status: 'Pending',
                ErrorMessage: undefined,
            };
        })
        .addCase(sendFeedback.fulfilled, (state, action) => {
            state = {
                ...state,
                status: 'Fulfilled',
                ErrorMessage: undefined,
            };
        })
        .addCase(sendFeedback.rejected, (state, action) => {
            state = {
                ...state,
                status: 'Rejected',
                ErrorMessage: action.payload,
            };
        })
})

export default FeedbackReducer;