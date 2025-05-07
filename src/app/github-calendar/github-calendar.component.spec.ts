import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCalendarComponent } from './github-calendar.component';

describe('GithubCalendarComponent', () => {
  let component: GithubCalendarComponent;
  let fixture: ComponentFixture<GithubCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
