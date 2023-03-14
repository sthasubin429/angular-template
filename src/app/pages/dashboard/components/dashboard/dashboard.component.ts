import { Component, OnInit } from '@angular/core';
import { MockDataService } from '@core/http/mock-data/mock-data.service';
import { mockData } from '@core/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public noData: string|null = null;
  public data: mockData[]|null = null;

  constructor(private mock: MockDataService) { }

  ngOnInit(): void {
    this.mock.getData().subscribe((data: mockData[]) => {
      console.dir(data);
      this.data = data;
    });
  }

}
