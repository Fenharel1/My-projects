import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn:boolean = false;
  private readonly authTokenKey:string = 'auth_token';

  constructor() { }

  
  login(useremail: string, password: string): boolean{
    if(useremail === "user@innovar.com" && password === 'password'){
      this.isLoggedIn = true;
      return true;
    }else{
      return false;
    }
  }

  logout(): void{
    this.isLoggedIn = false;
  }

  isLogged(): boolean{
    return this.isLoggedIn;
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.authTokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }
}
