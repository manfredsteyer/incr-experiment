import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component16Component } from './feature56-component16.component';

describe('Feature56Component16Component', () => {
  let component: Feature56Component16Component;
  let fixture: ComponentFixture<Feature56Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
