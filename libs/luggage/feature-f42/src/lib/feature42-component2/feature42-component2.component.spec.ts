import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component2Component } from './feature42-component2.component';

describe('Feature42Component2Component', () => {
  let component: Feature42Component2Component;
  let fixture: ComponentFixture<Feature42Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
