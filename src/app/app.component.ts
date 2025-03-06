import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Helloworld';
 imageUrl = '../assets/BridgeLabz.avif';
 url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";
  
 ngOnInit(): void {
   this.title = 'Hello from Bridgelabz';
 }

 onClick($event:Event) {
   console.log("Save button is clicked!", $event);
   window.open(this.url, "_blank");
  }
  
  onInput($event: any) {
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = /^[A-Z]{1}[a-zA-Z\s]{2,}$/;
    
    if (!this.userName) {
      this.nameError = ""; 
      return;
    }
  
    if (nameRegex.test(this.userName)) {
      this.nameError = ""; 
    } else {
      this.nameError = "Name is Incorrect"; 
    }
  }
  
}
