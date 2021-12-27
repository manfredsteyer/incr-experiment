import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component28Component } from './feature19-component28.component';

describe('Feature19Component28Component', () => {
  let component: Feature19Component28Component;
  let fixture: ComponentFixture<Feature19Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
