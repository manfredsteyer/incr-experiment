import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component6Component } from './feature30-component6.component';

describe('Feature30Component6Component', () => {
  let component: Feature30Component6Component;
  let fixture: ComponentFixture<Feature30Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
