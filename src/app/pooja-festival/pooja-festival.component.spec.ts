import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaFestivalComponent } from './pooja-festival.component';

describe('PoojaFestivalComponent', () => {
  let component: PoojaFestivalComponent;
  let fixture: ComponentFixture<PoojaFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
