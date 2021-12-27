import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component19Component } from './feature90-component19.component';

describe('Feature90Component19Component', () => {
  let component: Feature90Component19Component;
  let fixture: ComponentFixture<Feature90Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
