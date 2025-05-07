import { Component } from '@angular/core';
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+49 157 3013 5878",
    email_address: "rehmananees028@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }
}
