import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristasComponent } from './turistas.component';

describe('TuristasComponent', () => {
  let component: TuristasComponent;
  let fixture: ComponentFixture<TuristasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuristasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
