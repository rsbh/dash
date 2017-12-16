
export default function authReducer(state = {login: false}, action) {
  switch(action.type) {
    case 'GOOGLE_LOGIN':
      return action.payload
    default:
      return state
  }
} 