import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component25Component } from './feature50-component25.component';

describe('Feature50Component25Component', () => {
  let component: Feature50Component25Component;
  let fixture: ComponentFixture<Feature50Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
