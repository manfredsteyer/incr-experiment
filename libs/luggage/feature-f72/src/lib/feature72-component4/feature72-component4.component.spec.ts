import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component4Component } from './feature72-component4.component';

describe('Feature72Component4Component', () => {
  let component: Feature72Component4Component;
  let fixture: ComponentFixture<Feature72Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
