import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    // Logic to submit the contact form
    console.log('Contact form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
  }

}
