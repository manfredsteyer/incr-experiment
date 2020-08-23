import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component15Component } from './feature30-component15.component';

describe('Feature30Component15Component', () => {
  let component: Feature30Component15Component;
  let fixture: ComponentFixture<Feature30Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
