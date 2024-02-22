import { Dispatch } from "redux";
import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userRedux";
import { orderPlaced } from "./cartRedux";
import { publicRequest } from "@/requestMethods";

interface User {
    id: string;
    username: string;
    email: string;
  }

interface RegisterUser {
    username: string;
    email: string;
    password: string;
  }

export interface OrderData {
    userId: string;
    products: {
      productId: string;
      quantity: number;
    }[];
  }


export const login = async (dispatch: Dispatch, user: User) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch: Dispatch, registerUser: RegisterUser) => {
  try {
    const response = await publicRequest.post("/auth/register", registerUser);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    console.error("Error registering the user:", error);
  }
};

export const placeOrder = async (dispatch: Dispatch, orderData: OrderData) => {
  try {
    const response = await publicRequest.post("/orders/placeorder", orderData);
    dispatch(orderPlaced(response.data));
  } catch (error) {
    console.error("Error placing the order:", error);
  }
};
