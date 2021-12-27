import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component5Component } from './feature26-component5.component';

describe('Feature26Component5Component', () => {
  let component: Feature26Component5Component;
  let fixture: ComponentFixture<Feature26Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
