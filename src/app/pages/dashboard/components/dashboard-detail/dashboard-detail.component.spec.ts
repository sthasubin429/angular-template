import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailComponent } from './dashboard-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockDataService } from '@core/http/mock-data/mock-data.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from '@shared/pipes/pipes.module';

describe('DashboardDetailComponent', () => {
  let component: DashboardDetailComponent;
  let fixture: ComponentFixture<DashboardDetailComponent>;
  let mock: MockDataService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, PipesModule],
      declarations: [DashboardDetailComponent],
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
