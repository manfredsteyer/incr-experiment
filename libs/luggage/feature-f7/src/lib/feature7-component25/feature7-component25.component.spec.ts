import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component25Component } from './feature7-component25.component';

describe('Feature7Component25Component', () => {
  let component: Feature7Component25Component;
  let fixture: ComponentFixture<Feature7Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
