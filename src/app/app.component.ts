import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  template: `  
  <nav>
    <a routerLink="/">Home</a>
    |
    <a routerLink="/skills">Skills</a>
    |
    <a routerLink="/experience">Experience</a>
    |
    <a routerLink="/education">Education</a>
    |
    <a routerLink="/projects">Projects</a>
  </nav>
  <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Resume2024';
}
