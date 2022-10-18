import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivjiComponent } from './shivji.component';

describe('ShivjiComponent', () => {
  let component: ShivjiComponent;
  let fixture: ComponentFixture<ShivjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShivjiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShivjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
