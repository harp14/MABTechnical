import { Component } from '@angular/core';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HeaderParagraphComponent } from './components/header-paragraph/header-paragraph.component';
import { ThreeRowTextboxComponent } from './components/three-row-textbox/three-row-textbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeaderboardComponent, HeaderParagraphComponent, ThreeRowTextboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MAB Technical';
}
