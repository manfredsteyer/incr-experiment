import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component13Component } from './feature42-component13.component';

describe('Feature42Component13Component', () => {
  let component: Feature42Component13Component;
  let fixture: ComponentFixture<Feature42Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
