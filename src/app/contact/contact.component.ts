import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactUs: any | undefined

  constructor(public fb: FormBuilder, private router: Router) {
    this.contactUs = this.fb.group({
      nameForm: ['', [Validators.required, Validators.minLength(3)]],
      emailForm: [
        '',
        [Validators.required, Validators.minLength(5), Validators.email],
      ],
      msgForm: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(3)]],
    });
  }
  

  onsubmit( $event : Event) {
    $event.preventDefault();
    if(this.contactUs.valid){
      console.log(this.contactUs.value)
    }
  };
  clear() {
    this.contactUs.controls.nameForm.setValue('');
    this.contactUs.controls.emailForm.setValue('');
    this.contactUs.controls.msgForm.setValue('');
  }
  redirected() {
    this.router.navigate(['/home']);
  }
}
