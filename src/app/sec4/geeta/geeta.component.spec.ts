import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeetaComponent } from './geeta.component';

describe('GeetaComponent', () => {
  let component: GeetaComponent;
  let fixture: ComponentFixture<GeetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
