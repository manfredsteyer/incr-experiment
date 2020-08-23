import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component25Component } from './feature8-component25.component';

describe('Feature8Component25Component', () => {
  let component: Feature8Component25Component;
  let fixture: ComponentFixture<Feature8Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
