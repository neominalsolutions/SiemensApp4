import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../models/customer';
import { createPasswordStrengthValidator } from 'src/utils/validators/password.validator';

@Component({
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  // FormBuilder Service ile yeni bir reactive form açtık
  // fb.group ile FormGroup oluşturuduk, firstname gibi her bir form controlü yazdık
  // Validators ile validasyon tanımı yaptık
  constructor(private fb: FormBuilder) {
    // form üzerindeki bir değerin değişimini rxjs ile dinleyebiliyoruz.
    this.customerForm.valueChanges.subscribe((val) => {
      console.log('val', val, 'form', this.customerForm);
    });

    // sadece ilgili inputu değer değişimini takip etmemizi de sağlar
    this.customerForm.get('firstName')?.valueChanges.subscribe((fs) => {
      console.log('fs', fs);
    });

    // this.customerForm.get('value')?.valueChanges.subscribe((val) => {
    //   let totalVal: number = this.customerForm.get('total')?.value || 0;

    //   totalVal += Number(val);

    //   this.customerForm.get('total')?.setValue(totalVal);
    // });
  }

  customerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(11),
        createPasswordStrengthValidator(),
      ],
    ],
    val: 0,
    total: 0,
    address: this.fb.group({
      // nested form group
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  ngOnInit(): void {
    this.customerForm.get('address.street')?.setValue('istanbul');
    // forma value set etme işlemi
    // patchValue
    const data: Customer = {
      firstName: 'ahmet',
      lastName: 'tan',
      address: {
        state: 'New York',
        city: 'New york city',
        street: '',
        zip: '',
      },
    };

    this.customerForm.patchValue(data);
  }

  submitForm() {
    if (this.customerForm.valid) {
      // form state valid ise api gönder.
      console.log('form-value', this.customerForm.value);
    }
  }
}
