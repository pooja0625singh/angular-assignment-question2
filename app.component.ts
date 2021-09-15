import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Detail Form';

  onSubmit(contactForm: { value: any; }) {
    console.log(contactForm.value);
  }
}
