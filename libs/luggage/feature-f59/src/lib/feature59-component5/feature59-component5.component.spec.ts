import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component5Component } from './feature59-component5.component';

describe('Feature59Component5Component', () => {
  let component: Feature59Component5Component;
  let fixture: ComponentFixture<Feature59Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
