import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component19Component } from './feature72-component19.component';

describe('Feature72Component19Component', () => {
  let component: Feature72Component19Component;
  let fixture: ComponentFixture<Feature72Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
