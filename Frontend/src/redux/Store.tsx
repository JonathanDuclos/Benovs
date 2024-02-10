import { legacy_createStore } from "redux";

import rootReducers from "./RootReducer";

const store = legacy_createStore(rootReducers)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;