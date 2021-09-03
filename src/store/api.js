import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallFailed = createAction("api/callFailed");

// console.log(apiCallBegan()); //
// {type: "api/callBegan", payload: undefined}
// console.log(apiCallBegan(1)); //
// {type: "api/callBegan", payload: 1}
// console.log(apiCallBegan({ id: 2 })); //
// {type: "api/callBegan", payload: {id: 2}}
