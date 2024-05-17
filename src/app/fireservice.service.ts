import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'

export interface LoginData {
  email: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) {}

  loginWithEmail(data: LoginData) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }
  signup(data : LoginData){
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }
  
}
