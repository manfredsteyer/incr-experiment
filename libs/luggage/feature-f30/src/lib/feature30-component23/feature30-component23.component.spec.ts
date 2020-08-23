import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component23Component } from './feature30-component23.component';

describe('Feature30Component23Component', () => {
  let component: Feature30Component23Component;
  let fixture: ComponentFixture<Feature30Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
