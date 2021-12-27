import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component6Component } from './feature65-component6.component';

describe('Feature65Component6Component', () => {
  let component: Feature65Component6Component;
  let fixture: ComponentFixture<Feature65Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
