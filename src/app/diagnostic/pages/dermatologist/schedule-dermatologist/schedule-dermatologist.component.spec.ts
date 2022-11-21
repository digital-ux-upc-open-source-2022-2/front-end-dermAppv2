import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDermatologistComponent } from './schedule-dermatologist.component';

describe('ScheduleDermatologistComponent', () => {
  let component: ScheduleDermatologistComponent;
  let fixture: ComponentFixture<ScheduleDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
