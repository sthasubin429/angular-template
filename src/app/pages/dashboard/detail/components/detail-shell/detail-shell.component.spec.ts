import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShellComponent } from './detail-shell.component';

describe('DetailShellComponent', () => {
  let component: DetailShellComponent;
  let fixture: ComponentFixture<DetailShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
