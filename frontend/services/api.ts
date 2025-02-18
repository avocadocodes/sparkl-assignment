import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getQuizzes = (token) => axios.get(`${API_URL}/quizzes/`, { headers: { Authorization: `Bearer ${token}` } });
export const startQuiz = (id, token) => axios.post(`${API_URL}/quizzes/${id}/start`, {}, { headers: { Authorization: `Bearer ${token}` } });
export const submitQuiz = (id, answers, token) => axios.post(`${API_URL}/quizzes/${id}/submit`, { answers }, { headers: { Authorization: `Bearer ${token}` } });
