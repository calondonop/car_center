import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMechanicComponent } from './register-mechanic.component';

describe('RegisterMechanicComponent', () => {
  let component: RegisterMechanicComponent;
  let fixture: ComponentFixture<RegisterMechanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMechanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
