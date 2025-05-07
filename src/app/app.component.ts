import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from "./contact/contact.component";
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { FooterComponent } from "./footer/footer.component";
import { GreetingComponent } from "./greeting/greeting.component";
import { SkillProgressComponent } from "./skill-progress/skill-progress.component";
import { SkillsComponent } from "./skills/skills.component";
import { GithubCalendarComponent } from "./github-calendar/github-calendar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactComponent, EducationComponent, ExperienceComponent, FooterComponent, GreetingComponent, SkillProgressComponent, SkillsComponent, GithubCalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_app';
}
