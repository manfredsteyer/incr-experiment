import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component3Component } from './feature97-component3.component';

describe('Feature97Component3Component', () => {
  let component: Feature97Component3Component;
  let fixture: ComponentFixture<Feature97Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature97Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
