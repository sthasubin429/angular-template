import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailComponent } from './dashboard-detail.component';
import { MockDataService } from '@core/http/mock-data/mock-data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PipesModule } from '@shared/pipes/pipes.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardDetailComponent', () => {
  let component: DashboardDetailComponent;
  let fixture: ComponentFixture<DashboardDetailComponent>;
  let mock: MockDataService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDetailComponent, HttpClientTestingModule, RouterTestingModule, PipesModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDetailComponent);
    component = fixture.componentInstance;
    mock = TestBed.inject(MockDataService);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
