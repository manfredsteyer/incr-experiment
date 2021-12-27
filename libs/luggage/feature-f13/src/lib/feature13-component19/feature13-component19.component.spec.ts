import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component19Component } from './feature13-component19.component';

describe('Feature13Component19Component', () => {
  let component: Feature13Component19Component;
  let fixture: ComponentFixture<Feature13Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
