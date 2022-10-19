import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaTempleComponent } from './pooja-temple.component';

describe('PoojaTempleComponent', () => {
  let component: PoojaTempleComponent;
  let fixture: ComponentFixture<PoojaTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaTempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
