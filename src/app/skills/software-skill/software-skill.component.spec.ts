import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSkillComponent } from './software-skill.component';

describe('SoftwareSkillComponent', () => {
  let component: SoftwareSkillComponent;
  let fixture: ComponentFixture<SoftwareSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
