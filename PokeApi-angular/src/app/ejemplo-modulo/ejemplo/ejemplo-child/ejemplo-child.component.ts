import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-child',
  templateUrl: './ejemplo-child.component.html',
  styleUrls: ['./ejemplo-child.component.css'],
})
export class EjemploChildComponent implements OnInit, OnDestroy {
  // @Input() namePokemon = '';
  @Input() namePokemon: string | undefined = '';
  @Output() onChangePokemon: EventEmitter<number | string> = new EventEmitter<
    number | string
  >();

  // formGroupPokemon: FormGroup = new FormGroup({
  //   idpokemon: new FormControl('')
  // })
  formGroupPokemon: FormGroup = this.fb.group({
    idpokemon: this.fb.control(['']),
  });
  get idpokemon(): FormControl {
    return this.formGroupPokemon.get('idpokemon') as FormControl;
  }
  constructor(private fb: FormBuilder) {}
  ngOnDestroy(): void {
    console.log('ejemplo-child se ha destruido');
  }
  changePokemon() {
    // this.onChangePokemon.emit(this.formGroupPokemon.controls['idpokemon'].value);
    this.onChangePokemon.emit(this.idpokemon.value);
  }

  ngOnInit(): void {
    // this.idpokemon.valueChanges.subscribe((changeStr) => {
    //   console.log(changeStr);
    // });
  }
}
