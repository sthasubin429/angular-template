import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShellComponent } from './detail-shell.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailShellComponent', () => {
  let component: DetailShellComponent;
  let fixture: ComponentFixture<DetailShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DetailShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
