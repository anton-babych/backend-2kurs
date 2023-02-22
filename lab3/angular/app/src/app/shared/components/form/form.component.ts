import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {ShortItemModel} from "../../models/shortItemModel";
import {JsonPipe, NgIf} from "@angular/common";

interface ShortFormGroup extends FormGroup {
  value: ShortItemModel;
  controls: {
    name: AbstractControl,
    price: AbstractControl,
    imagePath: AbstractControl;
  };
}

@Component({
  selector: 'item-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe
  ]
})
export class FormComponent implements OnInit {

  @Input() item!: ShortItemModel;
  @Output() itemEdited = new EventEmitter<ShortItemModel>();
  @Output() itemCreated = new EventEmitter<ShortItemModel>();
  @Output() itemDeleted = new EventEmitter<ShortItemModel>();

  newItem!: ShortItemModel;

  formGroup!: ShortFormGroup;
  formControl = new FormControl('');

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.newItem = this.item;

    this.formGroup = this.builder.group({
      name: [this.newItem.name, [Validators.required]],
      price: [this.newItem.price, [Validators.required]],
      imagePath: [this.newItem.imagePath, [Validators.required]],
    }) as ShortFormGroup;
  }

  handleSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    if(this.hasId()){
      console.log('edited')
      this.formGroup.value.id = this.item.id;
      this.itemEdited.emit(this.formGroup.value);
    }else{
      console.log('created')
      this.formGroup.value.id = this.generateGUID();
      this.itemCreated.emit(this.formGroup.value)
    }

  }

  handleDelete() {
    this.formGroup.value.id = this.item.id;
    this.itemDeleted.emit(this.formGroup.value);
  }

  private generateGUID() {
    let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
    return [u.substr(0,8), u.substr(8,4), '4000-8' + u.substr(13,3), u.substr(16,12)].join('-');
  }

  private hasId() {
    return typeof this.item.id !== 'undefined';
  }
}
