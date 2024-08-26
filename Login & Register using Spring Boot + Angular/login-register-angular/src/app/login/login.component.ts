import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data  = new FormGroup({
    userId: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private httpClient: HttpClient) {}

  public handleSubmit() {
    console.log(this.data.value);

    this.httpClient.post('http://localhost:8082/loginUser', this.data.value).subscribe((data:any) =>{
      console.log(data);
      if(data == true){
        alert("login successfully");
      }
      else {
        alert("Wrong credentials Please try again");
      }
    })
    
  }

}
