const initialState = {
  token: null,
  isAuthenticated: false,
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      console.log('Setting token:', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case 'SET_USER_INFO':
      console.log('User Info:', action.payload);
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
      };
    case 'CLEAR_TOKEN':
      console.log('Clearing token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
