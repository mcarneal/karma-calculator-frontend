export const login = (user) => {
  return {
    type: 'LOGIN',
    payload: Object.assign({}, user)
  }
}
