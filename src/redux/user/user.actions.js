import { UserActionTypes } from './user.types';

export const setCurrentUser = user => {
    return {
        type : UserActionTypes.SET_CURRENT_USER,
        payload : user
    }
}

export const googleSignInStart = () => ({
    type : UserActionTypes.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
    type : UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload : user
})

export const googleSignInFailure = error => ({
    type : UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload : error
})

export const emailSignInStart = emailAndPassword => ({
    type : UserActionTypes.EMAIL_SIGN_IN_START,
    payload : emailAndPassword
})

export const emailSignInSuccess = user => ({
    type : UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload : user
})

export const emailSignInFailure = error => ({
    type : UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload : error
})

export const checkUserSession = () => ({
    type : UserActionTypes.CHECK_USER_SESSION
})

export const signOut = () => ({
    type : UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type : UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type : UserActionTypes.SIGN_OUT_FAILURE,
    payload : error.message
})