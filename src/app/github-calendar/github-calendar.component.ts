import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import GitHubCalendar from './github-calendar-wrapper';
import { GithubService } from '../../services/github.service';
import { GithubStats } from '../../models/github-stats.model';

@Component({
  selector: 'app-github-calendar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [GithubService],
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.scss']
})
export class GithubCalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('calendarContainer') calendarContainer!: ElementRef;
  
  readonly username = 'anees028';
  stats: GithubStats = {
    totalContributions: 0,
    longestStreak: 0,
    currentStreak: 0
  };

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.loadGithubStats();
  }

  ngAfterViewInit() {
    this.initializeCalendar();
  }

  private loadGithubStats() {
    this.githubService.getGithubStats(this.username)
      .subscribe({
        next: (stats) => {
          this.stats = stats;
        },
        error: (error) => {
          console.error('Error fetching GitHub stats:', error);
          // Implement error handling here
        }
      });
  }

  private initializeCalendar() {
    setTimeout(() => {
      GitHubCalendar(this.calendarContainer.nativeElement, this.username, {
        responsive: true,
        tooltips: true,
        global_stats: false,
        cache: 24 * 60 * 60 * 1000
      });
    }, 0);
  }
}
