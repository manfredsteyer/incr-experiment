import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component19Component } from './feature82-component19.component';

describe('Feature82Component19Component', () => {
  let component: Feature82Component19Component;
  let fixture: ComponentFixture<Feature82Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
