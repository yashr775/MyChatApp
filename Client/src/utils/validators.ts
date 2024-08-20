/* eslint-disable @typescript-eslint/no-unused-vars */

import { isValidUsername } from "6pp"

export const usernameValidator = (username:string) =>{

    if(!isValidUsername(username))

    return {isValid : false, errorMessage:"Username is invalid"}
} 