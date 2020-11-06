import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMechanicComponent } from './list-mechanic.component';

describe('ListMechanicComponent', () => {
  let component: ListMechanicComponent;
  let fixture: ComponentFixture<ListMechanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMechanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
