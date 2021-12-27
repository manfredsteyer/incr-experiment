import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component4Component } from './feature82-component4.component';

describe('Feature82Component4Component', () => {
  let component: Feature82Component4Component;
  let fixture: ComponentFixture<Feature82Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
