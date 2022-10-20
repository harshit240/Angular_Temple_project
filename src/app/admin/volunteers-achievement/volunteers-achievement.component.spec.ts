import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersAchievementComponent } from './volunteers-achievement.component';

describe('VolunteersAchievementComponent', () => {
  let component: VolunteersAchievementComponent;
  let fixture: ComponentFixture<VolunteersAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersAchievementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteersAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
