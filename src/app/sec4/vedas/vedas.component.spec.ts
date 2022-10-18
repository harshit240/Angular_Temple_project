import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedasComponent } from './vedas.component';

describe('VedasComponent', () => {
  let component: VedasComponent;
  let fixture: ComponentFixture<VedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
