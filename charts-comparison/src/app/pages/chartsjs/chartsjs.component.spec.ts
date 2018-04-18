import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsjsComponent } from './chartsjs.component';

describe('ChartsjsComponent', () => {
  let component: ChartsjsComponent;
  let fixture: ComponentFixture<ChartsjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
