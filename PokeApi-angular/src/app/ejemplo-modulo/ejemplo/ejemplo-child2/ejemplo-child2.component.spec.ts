import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploChild2Component } from './ejemplo-child2.component';

describe('EjemploChild2Component', () => {
  let component: EjemploChild2Component;
  let fixture: ComponentFixture<EjemploChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
