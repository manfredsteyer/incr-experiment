import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component19Component } from './feature16-component19.component';

describe('Feature16Component19Component', () => {
  let component: Feature16Component19Component;
  let fixture: ComponentFixture<Feature16Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
