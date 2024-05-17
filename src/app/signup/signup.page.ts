import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email:any;
  public password:any;
  public name:any;
  constructor(
    public fireService:FireserviceService,
    public router:Router,
  ) { }

  ngOnInit() {
  }

  signup(){ 
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      alert('Account Created!');
      this.router.navigateByUrl('login');
    },err=>{
      alert(err.message);
      this.router.navigateByUrl('login');
      console.log(err);
    })
  }

}