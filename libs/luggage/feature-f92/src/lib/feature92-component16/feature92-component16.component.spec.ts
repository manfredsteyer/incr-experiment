import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component16Component } from './feature92-component16.component';

describe('Feature92Component16Component', () => {
  let component: Feature92Component16Component;
  let fixture: ComponentFixture<Feature92Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
