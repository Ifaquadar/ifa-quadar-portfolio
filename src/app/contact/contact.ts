import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  onSubmit(form: any) {
  const data = new FormData();
  data.append('form-name', 'contact');
  Object.keys(form.value).forEach(key => {
    data.append(key, form.value[key]);
  });

  fetch('/', {
    method: 'POST',
    body: data
  })
  .then(() => alert('Message sent!'))
  .catch(() => alert('Error sending message'));
}
}
