import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './skill-progress.component.html',
  styleUrl: './skill-progress.component.scss'
})
export class SkillProgressComponent {
  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend (Angular, React, HTML/CSS/JavaScript) ",
        progressPercentage: "80%"
      },
      {
        Stack: "Backend (NodeJS, ExpressJS, NestJS, FastAPI)",
        progressPercentage: "90%"
      },
      {
        Stack: "Database (MySQL, Sql, MongoDB, Firebase)",
        progressPercentage: "80%"
      },
      {
        Stack: "Git / GitHub / Bitbucket / Azure / Docker",
        progressPercentage: "95%"
      },
      {
        Stack: "Programming & MachineLearning/AI",
        progressPercentage: "65%"
      },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }
}
