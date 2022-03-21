import axios from 'axios';
import { setAlert } from './alert';
import { fetchUrl } from 'fetch';
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    SET_ALERT,
    REMOVE_ALERT,
    LOGOUT,
    TWO_FACTOR_ATTEMPTED,
    TWO_FACTOR_SUCCESS,
    TWO_FACTOR_FAILED,
} from './types';
import setAuthToken from '../utils/setAuthToken';

function getDevPrefix() { 
  var devPrefix = "http://localhost:5000";

  if(process === undefined) {
    console.log(">>> Process doesnt exist, dev mode activated");
    return devPrefix;
  } else if(process.env.NODE_ENV == null) {
    console.log(">>> NODE_ENV is null, dev mode activated");
    return devPrefix;
  } else if(process.env.NODE_ENV === undefined) {
    console.log(">>> NODE_ENV undefined, dev mode activated");
    return devPrefix;
  } else if(process.env.NODE_ENV === "development") {
    console.log(">>> NODE_ENV is set to development, dev mode activated");
    return devPrefix;    
  } else {
    console.log(">>> No dev mode detected");
    return "";
  }
}

// Load User
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    try {
      const res = await axios.get(getDevPrefix() + '/api/auth');
  
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

// Register User
export const register = (
    firstName,
    lastName,
    email,
    alias,
    password,
    phoneNumber,
    idNum,
    instagram,
    facebook,
    other
  ) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    var socials = { instagram, facebook, other };
    var body = JSON.stringify({ firstName, lastName, alias, email, password, phoneNumber, idNum, socials });
    // if (idNum) {
    //   body = JSON.stringify({ firstName, lastName, alias, email, password, phoneNumber, idNum });
    // } else {
    //   body = JSON.stringify({ firstName, lastName, alias, email, password, phoneNumber });
    // }
  
    try {
      const res = await axios.post(getDevPrefix() + '/api/users', body, config);
  
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
  
      dispatch(loadUser());
      dispatch(setAlert("Successful Registration 🎉🎉🎉", 'success'));
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const login = (email, password) => async (dispatch) => {
// export async function login(email, password) {
    var body = JSON.stringify({ email: email, password: password });
    // body = { email: email, password: password };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(getDevPrefix() + '/api/auth', body, config);
      // const res = await axios.post('/api/auth', body);
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
      dispatch(setAlert("Successful Login 🎉🎉🎉", 'success'));
    } catch (err) {
      // const errors = err.response.data.errors;
      // // return errors;
  
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      // }
  
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Add a User Category
export const addCategory = (category) => async (dispatch) => {
    // export async function login(email, password) {
    var body = JSON.stringify({ category: category });
    // body = { email: email, password: password };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(getDevPrefix() + '/api/users/category', body, config);
      // const res = await axios.post('/api/auth', body);
      console.log(res);

    } catch (err) {
      console.log(err.message);
    }
};

// Update a User's Bio
export const updateBio = (bio) => async (dispatch) => {
  var body = JSON.stringify({ bio: bio });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(getDevPrefix() + '/api/users/bio', body, config);
    // const res = await axios.post('/api/auth', body);
    console.log(res);

  } catch (err) {
    console.log(err.message);
  }
};

// Get Posts
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(getDevPrefix() + '/api/auth/all');
    return res.data;
  } catch (err) {
    console.log(err.msg);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const uploadProfilePicture = (file) => async (dispatch) => {
  try {
    console.log("in profile upload")
    console.log(file)
    var result = await axios.get(getDevPrefix() + '/api/image');
    console.log(result.data);
    const response = await fetch(result.data, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
      'Cache-Control': 'no-store max-age=0',
      'Content-Type': file.type,
      'x-ms-date': new Date().toUTCString(),
      'x-ms-version': '2020-04-08',
      'x-ms-blob-type': 'BlockBlob'
      },
      body: file, // body data type must match "Content-Type" header
    });
    await axios.post(getDevPrefix() + '/api/image');
  } catch (error) {
    console.log(error);
  }
};

export const uploadPostPicture = (file, postId) => async (dispatch) => {
  try {
    console.log("in post upload")
    console.log(file)
    var result = await axios.get(getDevPrefix() + '/api/postimage/' + postId);
    console.log(result.data);
    const response = await fetch(result.data, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
      'Cache-Control': 'no-store max-age=0',
      'Content-Type': file.type,
      'x-ms-date': new Date().toUTCString(),
      'x-ms-version': '2020-04-08',
      'x-ms-blob-type': 'BlockBlob'
      },
      body: file, // body data type must match "Content-Type" header
    });
    await axios.post(getDevPrefix() + '/api/postimage/' + postId);
  } catch (error) {
    console.log(error);
  }
};

export const twoFactorAuth = (email, phoneNumber) => async (dispatch) => {
  const body = { email: email, phoneNumber: phoneNumber };

  dispatch({
    type: TWO_FACTOR_ATTEMPTED,
  });
  try {
    await axios.post('/api/twofa', body);
    dispatch({
      type: CONTACT_MESSAGE_SENT,
    });

    // dispatch(setAlert('Text message sent'));
  } catch (err) {
    const errors = err.response.data.errors;
  }
};

export const twoFactorAuthCheck = (email, code) => async (dispatch) => {
  const body = { email, code };

  try {
    await axios.post('/api/twofa/verify', body);
    dispatch({
      type: TWO_FACTOR_SUCCESS,
    });
    return true;

    // dispatch(setAlert('Text message sent'));
  } catch (err) {
    dispatch({
      type: TWO_FACTOR_FAILED,
    });
    return false;
    // const errors = err.response.data.errors;
  }
};