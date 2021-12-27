import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component19Component } from './feature2-component19.component';

describe('Feature2Component19Component', () => {
  let component: Feature2Component19Component;
  let fixture: ComponentFixture<Feature2Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
