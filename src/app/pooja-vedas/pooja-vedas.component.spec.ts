import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaVedasComponent } from './pooja-vedas.component';

describe('PoojaVedasComponent', () => {
  let component: PoojaVedasComponent;
  let fixture: ComponentFixture<PoojaVedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaVedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaVedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
