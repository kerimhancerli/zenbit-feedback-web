import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { apiSendFeedback } from '../../Services/api';
import { send_feedback } from './types';

export const sendFeedback = createAsyncThunk(send_feedback, async (feedback) => {
    return await apiSendFeedback(feedback);
  });