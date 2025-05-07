import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProgressComponent } from './skill-progress.component';

describe('SkillProgressComponent', () => {
  let component: SkillProgressComponent;
  let fixture: ComponentFixture<SkillProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
