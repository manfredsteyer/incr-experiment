import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component19Component } from './feature78-component19.component';

describe('Feature78Component19Component', () => {
  let component: Feature78Component19Component;
  let fixture: ComponentFixture<Feature78Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
