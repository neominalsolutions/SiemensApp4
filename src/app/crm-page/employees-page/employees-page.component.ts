import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent implements OnInit {
  // FormBuilder Service ile yeni bir reactive form açtık
  // fb.group ile FormGroup oluşturuduk, firstname gibi her bir form controlü yazdık
  // Validators ile validasyon tanımı yaptık
  constructor(private fb: FormBuilder) {}

  customerForm = this.fb.group({
    firstName: ['ali', Validators.required],
    lastName: ['can', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [],
      state: [],
      zip: [],
    }),
  });

  ngOnInit(): void {
    this.customerForm.get('address.street')?.setValue('istanbul');
    // forma value set etme işlemi
  }
}
