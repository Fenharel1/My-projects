import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploChildComponent } from './ejemplo-child.component';

describe('EjemploChildComponent', () => {
  let component: EjemploChildComponent;
  let fixture: ComponentFixture<EjemploChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
