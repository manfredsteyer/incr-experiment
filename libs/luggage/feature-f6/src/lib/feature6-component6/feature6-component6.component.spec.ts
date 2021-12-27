import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component6Component } from './feature6-component6.component';

describe('Feature6Component6Component', () => {
  let component: Feature6Component6Component;
  let fixture: ComponentFixture<Feature6Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
