import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {Helmet} from "../../core/models/helmet";
import {JsonPipe, NgIf} from "@angular/common";

interface HelmetFormGroup extends FormGroup {
  value: Helmet;
  controls: {
    name: AbstractControl,
    price: AbstractControl,
    description: AbstractControl,
    image_url: AbstractControl;
  };
}

@Component({
  selector: 'item-form',
  template: `
    <form (ngSubmit)="handleSubmit()" [formGroup]="formGroup" *ngIf="formGroup">
      <label>
        <p>Назва</p>
        <input
          type="text"
          class="input"
          formControlName="name"/>
      </label>
      <label>
        <p>Ціна</p>
        <input
          type="number"
          class="input"
          formControlName="price">
      </label>
      <label>
        <p>Опис</p>
        <input
          type="text"
          class="input"
          formControlName="description">
      </label>
      <label>
        <p>Фото</p>
        <input
          type="text"
          class="input"
          formControlName="image_url">
      </label>
      <div class="buttons-container">
        <button
          type="submit"
          class="btn btn--green"
          [disabled]="formGroup.invalid">
          Зберегти
        </button>
        <button
          type="button"
          class="btn btn--grey"
          *ngIf="formGroup.dirty"
          (click)="formGroup.reset()">
          Очистити
        </button>
        <button
          type="button"
          class="btn btn--grey"
          *ngIf="formGroup.valid"
          (click)="handleDelete()">
          Видалити
        </button>
        <button
          type="button"
          class="btn btn--grey"
          (click)="handleClose()">
          Закрити
        </button>
      </div>
    </form>
  `,
  styles: [`
    form{
      display: flex;
      flex-direction: column;
      place-items: center;
      padding: 10%;
    }

    .buttons-container{
      display: flex;
      justify-content: space-between;

      flex-wrap: wrap;
      gap: .5rem;
    }

    label{
      width: 100%;
      margin-bottom: 10px;
    }

    .input{
      width: 100%;
    }
    .ng-valid{
      border-color: #155e09;
    }

    .btn{
    }
  `],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  @Input() item!: Helmet;
  @Output() itemEdited = new EventEmitter<Helmet>();
  @Output() itemCreated = new EventEmitter<Helmet>();
  @Output() itemDeleted = new EventEmitter<Helmet>();
  @Output() formClosed = new EventEmitter();

  newItem: Helmet = {description: "", image_url: "", name: "", price: 0};

  formGroup!: HelmetFormGroup;
  formControl = new FormControl('');

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.newItem = this.item;

    this.formGroup = this.builder.group({
      name: [this.newItem.name, [Validators.required]],
      price: [this.newItem.price, [Validators.required]],
      description: [this.newItem.description, [Validators.required]],
      image_url: [this.newItem.image_url, [Validators.required]]
    }) as HelmetFormGroup;
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

  handleClose() {
    this.formClosed.emit()
  }
}
