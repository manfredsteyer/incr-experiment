import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component11Component } from './feature30-component11.component';

describe('Feature30Component11Component', () => {
  let component: Feature30Component11Component;
  let fixture: ComponentFixture<Feature30Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
