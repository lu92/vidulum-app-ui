import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'asset-registration',
  templateUrl: './asset-registration.component.html',
  styleUrls: ['./asset-registration.component.scss']
})
export class AssetRegistrationComponent implements OnInit {

firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
