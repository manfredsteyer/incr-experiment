import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component19Component } from './feature70-component19.component';

describe('Feature70Component19Component', () => {
  let component: Feature70Component19Component;
  let fixture: ComponentFixture<Feature70Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
