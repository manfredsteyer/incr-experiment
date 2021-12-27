import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component8Component } from './feature97-component8.component';

describe('Feature97Component8Component', () => {
  let component: Feature97Component8Component;
  let fixture: ComponentFixture<Feature97Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
