import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { StateKey, TransferState, makeStateKey } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { defaultMetaTag } from '@core/constants';
import { MockDataService } from '@core/http/mock-data/mock-data.service';
import { mockData } from '@core/interfaces';
import { SeoService } from '@core/services/seo/seo.service';
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
    @Inject(PLATFORM_ID) private platformId: object,
    private route: ActivatedRoute,
    private mock: MockDataService,
    private transferState: TransferState,
    private seoService: SeoService
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
      this.updateMetaTags(data);
      if (isPlatformServer(this.platformId)) {
        this.transferState.set(this.stateKey, data);
      }
    });
  }

  private updateMetaTags(data: mockData): void {
    this.seoService.setTags({
      ...defaultMetaTag,
      title: data.name,
      description: data.cityName
    });
  }

}
