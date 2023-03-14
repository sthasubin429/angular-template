import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MockDataService } from '@core/http/mock-data/mock-data.service';
import { mockData } from '@core/interfaces';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit, OnDestroy {

  public id: number = 0;
  public data: mockData | undefined;
  private subscription: SubscriptionLike | undefined;

  constructor(
    private route: ActivatedRoute,
    private mock: MockDataService
  ) { }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = parseInt(params['id']);
      this.getMockData(params['id']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getMockData(id: string): void {
    this.mock.getDetail(id).subscribe((data: mockData) => {
      this.data = data;
    });
  }

}
