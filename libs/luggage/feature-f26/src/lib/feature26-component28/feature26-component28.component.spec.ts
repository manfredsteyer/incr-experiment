import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component28Component } from './feature26-component28.component';

describe('Feature26Component28Component', () => {
  let component: Feature26Component28Component;
  let fixture: ComponentFixture<Feature26Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
