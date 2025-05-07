import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  state = 'normal';
  currentDate: Date = new Date();
  name: string = 'Anees ur Rehman';
  constructor() { }

  ngOnInit(): void {

  }

  onAnimate(){
    this.state = 'highlited';
  }
}
