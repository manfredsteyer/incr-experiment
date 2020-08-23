import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component25Component } from './feature20-component25.component';

describe('Feature20Component25Component', () => {
  let component: Feature20Component25Component;
  let fixture: ComponentFixture<Feature20Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
