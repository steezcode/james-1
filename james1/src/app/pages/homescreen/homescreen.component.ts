import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Bertie', Validators.required],
      email: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit() {
    this.router.navigate(['secondpage']);
  }
}
