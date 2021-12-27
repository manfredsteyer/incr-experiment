import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component16Component } from './feature47-component16.component';

describe('Feature47Component16Component', () => {
  let component: Feature47Component16Component;
  let fixture: ComponentFixture<Feature47Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
