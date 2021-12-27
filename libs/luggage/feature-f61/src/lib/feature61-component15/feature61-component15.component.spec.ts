import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component15Component } from './feature61-component15.component';

describe('Feature61Component15Component', () => {
  let component: Feature61Component15Component;
  let fixture: ComponentFixture<Feature61Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
