import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component16Component } from './feature61-component16.component';

describe('Feature61Component16Component', () => {
  let component: Feature61Component16Component;
  let fixture: ComponentFixture<Feature61Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
