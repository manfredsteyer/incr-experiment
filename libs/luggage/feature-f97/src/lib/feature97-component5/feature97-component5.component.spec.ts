import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component5Component } from './feature97-component5.component';

describe('Feature97Component5Component', () => {
  let component: Feature97Component5Component;
  let fixture: ComponentFixture<Feature97Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
