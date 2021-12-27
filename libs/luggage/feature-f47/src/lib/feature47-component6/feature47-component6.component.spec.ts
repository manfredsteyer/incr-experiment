import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component6Component } from './feature47-component6.component';

describe('Feature47Component6Component', () => {
  let component: Feature47Component6Component;
  let fixture: ComponentFixture<Feature47Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
