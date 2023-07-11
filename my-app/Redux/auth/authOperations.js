import auth from '../../Firebase/config'


export const authSignUpUser = ({email, password, name}) => async (dispatch, getState) => {
    try{
        const user = await auth.createUserWithEmailAndPassword(email, password);
        console.log('user in authSignUpUser--->', auth)
    } catch(error) {
        console.log(error);
        console.log(error.message)
        console.log(app)
    }
};

// const authSignInUser = async () => (dispatch, getState) => {}

// const authSignOutUser = async () => (dispatch, getState) => {}