import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes } from './user.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from './../../firebase/firebase.utils';
import { 
    googleSignInSuccess, 
    googleSignInFailure, 
    emailSignInSuccess, 
    emailSignInFailure,
    signOutSuccess,
    signOutFailure } from './user.actions';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess(userSnapshot.data()))
        // console.log(userRef);
    } catch(error) {
        yield put(googleSignInFailure(error.message))
    }
}

export function* signInWithEmailAndPassword({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(emailSignInSuccess(userSnapshot.data()));
    } catch(error) {
        yield put(emailSignInFailure(error.message));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(emailSignInSuccess(userSnapshot.data()));
    } catch(error) {
        yield put(emailSignInFailure(error.message))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOut)
    ])
}