import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component25Component } from './feature83-component25.component';

describe('Feature83Component25Component', () => {
  let component: Feature83Component25Component;
  let fixture: ComponentFixture<Feature83Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
