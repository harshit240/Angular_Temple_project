import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaReligionComponent } from './pooja-religion.component';

describe('PoojaReligionComponent', () => {
  let component: PoojaReligionComponent;
  let fixture: ComponentFixture<PoojaReligionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaReligionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaReligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
