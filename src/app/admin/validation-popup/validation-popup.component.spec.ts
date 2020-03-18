import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPopupComponent } from './validation-popup.component';

describe('ValidationPopupComponent', () => {
  let component: ValidationPopupComponent;
  let fixture: ComponentFixture<ValidationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
