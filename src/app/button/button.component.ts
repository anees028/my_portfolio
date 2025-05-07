import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../button.service';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  public className:string|undefined;
  public href:string|undefined;
  public text:string|undefined;
  constructor(private buttonService:ButtonService) { }

  ngOnInit(): void {
    this.className = this.buttonService.getClassName();
    this.text = this.buttonService.getText();
    this.href = this.buttonService.getHref();

    }
}
