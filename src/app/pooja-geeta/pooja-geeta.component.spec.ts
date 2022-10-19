import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaGeetaComponent } from './pooja-geeta.component';

describe('PoojaGeetaComponent', () => {
  let component: PoojaGeetaComponent;
  let fixture: ComponentFixture<PoojaGeetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojaGeetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoojaGeetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
