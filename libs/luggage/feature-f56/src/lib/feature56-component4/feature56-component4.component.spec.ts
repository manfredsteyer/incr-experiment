import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component4Component } from './feature56-component4.component';

describe('Feature56Component4Component', () => {
  let component: Feature56Component4Component;
  let fixture: ComponentFixture<Feature56Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
