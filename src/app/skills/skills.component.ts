import { Component, OnInit } from '@angular/core';
import { SoftwareSkillComponent } from "./software-skill/software-skill.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SoftwareSkillComponent, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "I AM A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      "⚡ Creating application backend in NodeJS, ExpressJS, NestJS & FastAPI",
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      "⚡ Integration of third party services such as Firebase/ Heroku/ AWS",
      "⚡ Experience of working with Computer Vision and NLP projects",
      "⚡ Perform a unit testing for the module"
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
