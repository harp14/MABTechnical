import { Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

interface UserData {
  id: number;
  name: string;
  gamesPlayed: number;
  totalScore: number;
  position?: number;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['position', 'name', 'gamesPlayed', 'totalScore'];
  dataSource = new MatTableDataSource<UserData>([
    { id: 1, name: 'John Doe', gamesPlayed: 43, totalScore: 200 },
    { id: 2, name: 'Jane Smith', gamesPlayed: 32, totalScore: 190 },
    { id: 3, name: 'Bob Johnson', gamesPlayed: 23, totalScore: 125 },
    { id: 4, name: 'Alice Brown', gamesPlayed: 18, totalScore: 90 },
  ]);

  ngAfterViewInit() {
    this.sort.active = 'position';
    this.sort.direction = 'asc';
    this.dataSource.sort = this.sort;
    this.calculatePosition();
  }

  calculatePosition() {
    const sortedData = this.dataSource.data.sort((a, b) => b.totalScore - a.totalScore);
    sortedData.forEach((item, index) => {
      item.position = index + 1;
    });
    this.dataSource.data = sortedData;
  }

  getPositionIcon(position: number) {
    switch (position) {
      case 1:
        return '🏆';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return '';
    }
  }
}
