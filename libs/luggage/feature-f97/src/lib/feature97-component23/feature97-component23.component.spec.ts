import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component23Component } from './feature97-component23.component';

describe('Feature97Component23Component', () => {
  let component: Feature97Component23Component;
  let fixture: ComponentFixture<Feature97Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
