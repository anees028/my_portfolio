import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  standalone: true,
  imports: [NgFor],
  templateUrl: './software-skill.component.html',
  styleUrl: './software-skill.component.scss'
})
export class SoftwareSkillComponent {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "Angularjs",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "Reactjs",
        fontAwesomeClassname: "fab fa-react"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "JavaScript/TypeScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
      },
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      // {
      //   skillName: "sass",
      //   fontAwesomeClassname: "fab fa-sass"
      // },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "sql / Non-sql",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "git",
        fontAwesomeClassname: "fab fa-git"
      },
      {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
      },
      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }

    ]
  };
  constructor() { }

  ngOnInit(): void {
  }
}
