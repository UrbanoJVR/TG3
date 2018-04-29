import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsLiveComponent } from './echarts-live.component';

describe('EchartsLiveComponent', () => {
  let component: EchartsLiveComponent;
  let fixture: ComponentFixture<EchartsLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
