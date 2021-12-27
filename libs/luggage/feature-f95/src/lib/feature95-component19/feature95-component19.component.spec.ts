import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component19Component } from './feature95-component19.component';

describe('Feature95Component19Component', () => {
  let component: Feature95Component19Component;
  let fixture: ComponentFixture<Feature95Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
