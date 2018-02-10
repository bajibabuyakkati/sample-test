export class AuthService {
  authenticated = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.authenticated);
        }, 1000);
      }
    );
    return promise;
  }

  setAuthentication() {
    this.authenticated = true;
  }

  ResetAuthentication() {
    this.authenticated = false;
  }
}
