import authReducer from './authReducer'

describe('reducer: auth', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual({login: false})
  })
})