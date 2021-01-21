

/* 包含所有的action creator(action 的工厂函数) */
import { ADD_COMMENT,DELETE_COMMENT } from "./action-types";
// 同步增加
export const addComment =(comment) => ({type:ADD_COMMENT,data:comment})
// 同步删除
export const deleteComment =(index) => ({type:DELETE_COMMENT,data:index})