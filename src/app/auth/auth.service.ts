import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenicated = false;
  constructor() { }


  get userIsAuthenticated(){
    return this._userIsAuthenicated;
  }
  login(){
    this._userIsAuthenicated = true;
  }

  logout(){
    this._userIsAuthenicated = false;
  }
}
