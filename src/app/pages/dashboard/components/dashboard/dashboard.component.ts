import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';
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
  public stateKey: StateKey<mockData[]> = makeStateKey<mockData[]>('mock-data-state');

  constructor(private mock: MockDataService, @Inject(PLATFORM_ID) private platformId: object, private transferState: TransferState) { }

  ngOnInit(): void {
    if (this.transferState.hasKey(this.stateKey)) {
      const mData: mockData[]|null = this.transferState.get<mockData[] | null>(this.stateKey, null);
      this.transferState.remove(this.stateKey);
      this.data = mData;
    }
    else {
      this.mock.getData().subscribe((data: mockData[]) => {
        console.dir(data);
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(this.stateKey, data);
        }
      });
    }
  }
}
