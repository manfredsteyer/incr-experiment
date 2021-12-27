import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component4Component } from './feature12-component4.component';

describe('Feature12Component4Component', () => {
  let component: Feature12Component4Component;
  let fixture: ComponentFixture<Feature12Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
