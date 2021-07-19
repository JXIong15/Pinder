import decode from 'jwt-decode';

// need a refreshToken!
const Auth = () => {
  const token = localStorage.getItem('token');
  // const refreshToken = localStorage.getItem('refreshToken');
  // if (!token || !refreshToken) {
  if (!token) {
    return false;
  }
  // try {
  //   const {exp} = decode(refreshToken);
  //   if (exp < new Date().getTime()) {
  //     return false;
  //   }
  // } catch (e) {
  //   return false;
  // }

  return true;
}


// class Auth {
//   constructor() {
//     this.authenticated = false;
//   }

//   login(cb) {
//     this.authenticated = true;
//     cb();
//   }

//   logout(cb) {
//     this.authenticated = false;
//     cb();
//   }

//   isAuthenticated() {
//     return this.authenticated;
//   }
// }

export default Auth();