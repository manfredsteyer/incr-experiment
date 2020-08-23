import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component25Component } from './feature12-component25.component';

describe('Feature12Component25Component', () => {
  let component: Feature12Component25Component;
  let fixture: ComponentFixture<Feature12Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
