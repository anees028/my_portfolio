// import { NgFor, NgIf } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  timeline = [
    {
      heading: "MS'c Artificial Intelligence",
      duration: "2025",
      subtitle: "BTU, Cottbus",
      content: "Almost completed my  MS in Artificial Intelligence from Brandenburgische Technische Universität Cottbus-Senftenberg.",
      location: "Cottbus, Germany.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "BS Software Engineering",
      duration: "2021",
      subtitle: "CUST University, Islamabad",
      content: "Successfully completed my Bachelor in Software Engineering from Capital University of Science & Technology.",
      location: "Islamabad, Pakistan.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2017",
      subtitle: "FBISE Board",
      content: "Successfully completed my intermediate studies in 2017 from Punjab Group of College.",
      location: "Islamabad, Pakistan.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    // {
    //   heading: "Secondary Stage(10th)",
    //   duration: "2014",
    //   subtitle: "CBSE Board",
    //   content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
    //   className1: "mar-right",
    //   className2: "prt_about_learnbox_left"
    // }
    ];

  constructor() { }

  ngOnInit(): void {
  }
}
