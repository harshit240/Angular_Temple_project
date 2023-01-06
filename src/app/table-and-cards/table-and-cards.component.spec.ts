import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAndCardsComponent } from './table-and-cards.component';

describe('TableAndCardsComponent', () => {
  let component: TableAndCardsComponent;
  let fixture: ComponentFixture<TableAndCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAndCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
