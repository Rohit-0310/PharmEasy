import { LOG_IN } from "./actionType";

export const logIn = (data) =>({
    type: LOG_IN,
    payload: data,
})