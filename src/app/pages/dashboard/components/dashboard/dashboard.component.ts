import { Component, OnInit } from '@angular/core';
import { MockDataService } from '@core/http/mock-data/mock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  noData: string|null = null;

  constructor(private mockData: MockDataService) { }

  ngOnInit(): void {
    this.mockData.getData().subscribe((data: unknown) => {
      console.dir(data);
    });
  }

}
