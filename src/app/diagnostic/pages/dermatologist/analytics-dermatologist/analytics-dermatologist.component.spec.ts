import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnanalyticsDermatologistComponent } from './analytics-dermatologist.component';

describe('AnanalyticsDermatologistComponent', () => {
  let component: AnanalyticsDermatologistComponent;
  let fixture: ComponentFixture<AnanalyticsDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnanalyticsDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnanalyticsDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
