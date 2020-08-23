import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component21Component } from './feature30-component21.component';

describe('Feature30Component21Component', () => {
  let component: Feature30Component21Component;
  let fixture: ComponentFixture<Feature30Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
