import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountTypeComponent } from './edit-account-type.component';

describe('EditAccountTypeComponent', () => {
  let component: EditAccountTypeComponent;
  let fixture: ComponentFixture<EditAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
