import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // Định nghĩa file html tương ứng,
  styleUrls: ['./login.component.scss']  // Định nghĩa file scss hoặc css truyền vào cho .html sử dụng
})
export class LoginComponent implements OnInit {
  username : string = 'the first';
  loginForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    // Trong new FormGroup thì chứa một object , object này chứa đủ thông tin 
    // về form
    // this.loginForm = new FormGroup({
    //   username : new FormControl(),
    //   email : new FormControl(),
    //   password : new FormControl()
    // });
  }

  // login(){
  //   console.log(this.username);
  // }
  // onLoginForm(){}

}
