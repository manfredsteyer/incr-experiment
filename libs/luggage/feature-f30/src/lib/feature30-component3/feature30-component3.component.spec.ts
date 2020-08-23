import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component3Component } from './feature30-component3.component';

describe('Feature30Component3Component', () => {
  let component: Feature30Component3Component;
  let fixture: ComponentFixture<Feature30Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
