import { Children, createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
  // user: null,
  user: {
    _id: "64a178f177cad556c5c5a06f",
    username: "Hiroki Sugiyama",
    email: "hiroki.sugiyama.dev@gmail.com",
    password: "abcdef",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
