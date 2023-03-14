import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { StateKey, TransferState, makeStateKey } from '@angular/platform-browser';
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
  public data: mockData | null = null;
  private subscription: SubscriptionLike | undefined;
  private stateKey: StateKey<mockData> = makeStateKey<mockData>('mock-data-' + this.id);


  constructor(
    private route: ActivatedRoute,
    private mock: MockDataService,
    @Inject(PLATFORM_ID) private platformId: object,
    private transferState: TransferState
  ) { }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = parseInt(params['id']);
      this.stateKey = makeStateKey<mockData>('mock-data-' + this.id);
      if (this.transferState.hasKey(this.stateKey)) {
        const mData: mockData|null = this.transferState.get<mockData | null>(this.stateKey, null);
        this.transferState.remove(this.stateKey);
        this.data = mData;
      }
      else {
        this.getMockData(params['id']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getMockData(id: string): void {
    this.mock.getDetail(id).subscribe((data: mockData) => {
      console.dir(data);
      this.data = data;
      if (isPlatformServer(this.platformId)) {
        this.transferState.set(this.stateKey, data);
      }
    });
  }

}
