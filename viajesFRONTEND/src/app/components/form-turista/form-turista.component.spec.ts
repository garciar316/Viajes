import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTuristaComponent } from './form-turista.component';

describe('FormTuristaComponent', () => {
  let component: FormTuristaComponent;
  let fixture: ComponentFixture<FormTuristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTuristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTuristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
