// contact.component.ts
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../../../directives/scroll-animate.directive';
import { ContactService } from '../../../../services/contact.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ScrollAnimateDirective,
  ],
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      number: [''],
      email: ['', [Validators.required, Validators.email]],
      companyName: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;

      const formData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.number || '',
        message: this.contactForm.value.message,
        company_name: this.contactForm.value.companyName || '',
      };

      this.contactService.sendMessage(formData).subscribe({
        next: () => {
          this.isLoading = false;
          this.contactForm.reset();

          // ✅ Success toast
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Message sent successfully!',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          // Reset validation states
          Object.keys(this.contactForm.controls).forEach((key) => {
            this.contactForm.get(key)?.setErrors(null);
          });
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error submitting form:', error);

          // ❌ Error toast
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Failed to send message. Please try again.',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        },
      });
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });

      // ⚠️ Validation warning toast
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'warning',
        title: 'Please fill in all required fields.',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
  }
}
