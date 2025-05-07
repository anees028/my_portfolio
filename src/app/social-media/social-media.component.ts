import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMediaLinks = {

    github: "https://github.com/anees028",
    linkedin: "https://www.linkedin.com/in/anees-rehman-21011998/",
    gmail: "rehmananees028@gmail.com",
    instagram : "https://www.instagram.com/ozil7866/?hl=en",
    //facebook: "https://www.facebook.com/sharthak.agrawal"
  };
  constructor() { }

  ngOnInit(): void {
  }
}
