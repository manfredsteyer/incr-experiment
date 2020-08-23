import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component25Component } from './feature92-component25.component';

describe('Feature92Component25Component', () => {
  let component: Feature92Component25Component;
  let fixture: ComponentFixture<Feature92Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
