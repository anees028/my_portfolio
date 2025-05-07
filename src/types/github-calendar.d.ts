declare module 'github-calendar' {
  function GitHubCalendar(
    container: HTMLElement,
    username: string,
    options?: {
      responsive?: boolean;
      tooltips?: boolean;
      global_stats?: boolean;
      cache?: number;
    }
  ): void;
  export default GitHubCalendar;
} 