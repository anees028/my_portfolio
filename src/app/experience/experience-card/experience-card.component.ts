import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience:any;
  constructor() { }

  // angular.module('yourApp', ['ngColorThief'])
  ngOnInit(): void {
  }

  
}
