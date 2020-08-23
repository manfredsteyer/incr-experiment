import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component0Component } from './feature30-component0.component';

describe('Feature30Component0Component', () => {
  let component: Feature30Component0Component;
  let fixture: ComponentFixture<Feature30Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
