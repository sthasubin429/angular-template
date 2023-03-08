import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit, OnDestroy {

  public id!: number;
  private subscription!: SubscriptionLike;

  constructor(
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = parseInt(params['id']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
