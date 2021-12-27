import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component4Component } from './feature50-component4.component';

describe('Feature50Component4Component', () => {
  let component: Feature50Component4Component;
  let fixture: ComponentFixture<Feature50Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
