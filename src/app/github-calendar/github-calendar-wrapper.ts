// This file creates an ESM-compatible wrapper for the github-calendar package
import * as GitHubCalendarOriginal from 'github-calendar';

// Create a default export that can be imported as an ES module
const GitHubCalendar = (GitHubCalendarOriginal as any).default || GitHubCalendarOriginal;

export default GitHubCalendar; 