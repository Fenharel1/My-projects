export const login = (username, password) => {
  if(username == 'admin' && password == 123){
    return true;
  }
  else{
    const errors = {username: '', password: ''}
    if(!username) errors.username = 'Username invalid'
    if(!password) errors.password = 'Password invalid'
    throw errors
  }
}