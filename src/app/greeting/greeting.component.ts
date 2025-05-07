import { Component, OnInit } from '@angular/core';
import { SocialMediaComponent } from "../social-media/social-media.component";


@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent implements OnInit{
  greeting= {
    username: "Anees ur Rehman",
    title: "Hi, I'm Anees",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angularjs / Nodejs and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1FgqosW80Is-irVDSrM6Kbl8y531U7TRK/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }
}
