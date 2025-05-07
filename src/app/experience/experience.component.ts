import { Component } from '@angular/core';
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, NgFor, NgIf],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Web Developer (Part time)",
        company: "50Hertz Transmission GmbH",
        color: "#FE6E3B",
        link: "https://www.50hertz.com/",
        companylogo: "/images/50hertz.png",
        date: "Jun 2023 – Present",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "I am working in Digital Department of the company, learning the new technologies with a good team. ", 
      },
      {
        role: "Associate Full Stack Developer",
        company: "DAOProptech",
        color: "#3781c2",
        link: "https://daoproptech.com/",
        companylogo: "/images/dao.png",
        date: "Aug 2021 – Dec 2022",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "I have worked as a full stack web developer at DAOProptech, gaining experience in developing web applications and working in a team environment.", 
      },
      {
        role: "Software Engineer Intern",
        company: "CUST University",
        color: "#ff9102",
        link: "https://cust.edu.pk/",
        companylogo: "/images/cust.png",
        date: "Jul 2020 – Sep 2020",
        desc: "The 8- Week summer training focused on mobile application development using (React Native) and helped learn to work in a team.",
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
