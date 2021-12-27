import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component19Component } from './feature60-component19.component';

describe('Feature60Component19Component', () => {
  let component: Feature60Component19Component;
  let fixture: ComponentFixture<Feature60Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
