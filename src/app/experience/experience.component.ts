import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Associate Full Stack Developer",
        company: "DAOProptech",
        color: "#3781c2",
        companylogo: "../../../assets/images/infosys.png", //Need to update
        date: "Aug 2021 – Dec 2022",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Upcoming Software Enginer Specialist(SES) at Infosys", //Need to update
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      // {
      //   role: "Computer Science & Engineering",
      //   company: "GLA University",
      //   color: "#3f703f",
      //   companylogo: "../../../assets/images/gla.png",
      //   date: "Aug 2016 – Jul 2020",
      //   desc: "I have completed my 4 year graduation degree in computer science with overall CGPA 8.6",
      //   // descBullets: [
      //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //   // ]
      // },
      {
        role: "Software Engineer Intern",
        company: "CUST University",
        color: "#ff9102",
        companylogo: "../../../assets/images/ibs.png",
        date: "Jul 2020 – Sep 2020",
        desc: "The 8- Week summer training focused on mobile application development using (React Native) and helped learn to work in a team",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
