import db from '../../Firebase/config'

// const authSignInUser = async () => (dispatch, getState) => {}

export const authSignUpUser = ({email, password, name}) => async (dispatch, getState) => {
    try{
        const user = await db.auth().createUserWithEmailAndPassword(email, password);
        // console.log('user: ', user)
    } catch(error) {
        console.log(error)
    }
} 

// const authSignOutUser = async () => (dispatch, getState) => {}