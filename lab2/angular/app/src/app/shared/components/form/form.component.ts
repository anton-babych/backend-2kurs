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
import {BaseItemModel} from "../../models/baseItem.model";
import {ShortItemModel} from "../../models/shortItemModel";
import {ItemService} from "../../services/item.service";
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

  newItem!: ShortItemModel;

  formGroup!: ShortFormGroup;
  formControl = new FormControl('');

  constructor(private itemService: ItemService, private builder: FormBuilder) {}

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

    this.formGroup.value.id = this.item.id;
    this.itemEdited.emit(this.formGroup.value);
  }
}
