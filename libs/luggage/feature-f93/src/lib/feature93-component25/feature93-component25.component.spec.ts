import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component25Component } from './feature93-component25.component';

describe('Feature93Component25Component', () => {
  let component: Feature93Component25Component;
  let fixture: ComponentFixture<Feature93Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
