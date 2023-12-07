import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MockDataService } from '@core/http/mock-data/mock-data.service';
import { mockData } from '@core/interfaces';
import { DirectivesModule } from '@shared/directives/directives.module';
import { PipesModule } from '@shared/pipes/pipes.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PipesModule, RouterModule, DirectivesModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  public noData: string | null = null;
  public data: mockData[] | null = null;

  constructor(private mock: MockDataService) {}

  ngOnInit(): void {
    this.mock.getData().subscribe((data: mockData[]) => {
      console.dir(data);
      this.data = data;
    });
  }
}
