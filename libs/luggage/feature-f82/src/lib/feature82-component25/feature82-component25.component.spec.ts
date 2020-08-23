import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component25Component } from './feature82-component25.component';

describe('Feature82Component25Component', () => {
  let component: Feature82Component25Component;
  let fixture: ComponentFixture<Feature82Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
