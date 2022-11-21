import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDermatologistComponent } from './navbar-dermatologist.component';

describe('NavbarDermatologistComponent', () => {
  let component: NavbarDermatologistComponent;
  let fixture: ComponentFixture<NavbarDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
