import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component6Component } from './feature49-component6.component';

describe('Feature49Component6Component', () => {
  let component: Feature49Component6Component;
  let fixture: ComponentFixture<Feature49Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
