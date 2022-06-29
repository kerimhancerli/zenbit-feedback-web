import axios from "axios"
axios.defaults.baseURL = "https://feedback-zenbit.herokuapp.com/";

export const apiSendFeedback = (feedbackModal) => {
    return axios.post('feedback', feedbackModal)
}