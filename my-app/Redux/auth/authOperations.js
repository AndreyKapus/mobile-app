import firebase from '../../Firebase/config'


export const authSignUpUser = ({email, password, name}) => async (dispatch, getState) => {
    try{
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('user: ', user)
    } catch(error) {
        console.log(error);
        console.log(error.message)
    }
};

// const authSignInUser = async () => (dispatch, getState) => {}

// const authSignOutUser = async () => (dispatch, getState) => {}