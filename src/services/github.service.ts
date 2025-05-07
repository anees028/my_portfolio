import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { GithubStats } from '../models/github-stats.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly GITHUB_API = 'https://api.github.com/graphql';
  private readonly TOKEN = environment.githubToken; // Replace with your actual token    

  constructor(private http: HttpClient) {}

  getGithubStats(username: string): Observable<GithubStats> {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
          contributionsCollection {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
          }
          repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 100) {
                      edges {
                        node {
                          committedDate
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    return this.http.post<any>(this.GITHUB_API, {
      query,
      variables: { username }
    }, {
      headers: {
        'Authorization': `bearer ${this.TOKEN}`,
        'Content-Type': 'application/json',
      }
    }).pipe(
      map(response => {
        const { totalContributions } = response.data.user.contributionsCollection.contributionCalendar;
        const { longestStreak, currentStreak } = this.calculateStreaks(response.data.user.repositories);
        
        return {
          totalContributions,
          longestStreak,
          currentStreak
        };
      })
    );
  }

  private calculateStreaks(repositories: any): { longestStreak: number; currentStreak: number } {
    // Implement streak calculation logic here
    // This is a simplified version - you might want to implement more complex logic
    let longestStreak = 0;
    let currentStreak = 0;
    let currentCount = 0;
    
    const commits = repositories.nodes
      .flatMap((repo: any) => 
        repo.defaultBranchRef?.target?.history?.edges || []
      )
      .map((edge: any) => new Date(edge.node.committedDate))
      .sort((a: Date, b: Date) => b.getTime() - a.getTime());

    if (commits.length === 0) {
      return { longestStreak: 0, currentStreak: 0 };
    }

    const today = new Date();
    let lastDate = new Date(commits[0]);

    // Calculate current streak
    for (const date of commits) {
      if (this.isConsecutiveDay(lastDate, date)) {
        currentCount++;
        lastDate = date;
      } else {
        if (currentCount > longestStreak) {
          longestStreak = currentCount;
        }
        currentCount = 1;
        lastDate = date;
      }
    }

    // Update longest streak if current count is higher
    if (currentCount > longestStreak) {
      longestStreak = currentCount;
    }

    // Calculate current streak
    currentStreak = this.isConsecutiveDay(today, new Date(commits[0])) ? currentCount : 0;

    return { longestStreak, currentStreak };
  }

  private isConsecutiveDay(date1: Date, date2: Date): boolean {
    const diffTime = Math.abs(date1.getTime() - date2.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 1;
  }
} 