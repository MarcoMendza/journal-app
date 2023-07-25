import { singInWithGoogle } from "../../firebase/providers";
import { chekingCredentials } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() );
    }
}

export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        dispatch( chekingCredentials() );

        const result =  await singInWithGoogle();

        
    }
}