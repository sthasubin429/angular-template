import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/core/http/mock-data/mock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private mockData: MockDataService) { }

  ngOnInit(): void {
    this.mockData.getData().subscribe((data: unknown) => {
      console.log(data);
    });
  }

}
