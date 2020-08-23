import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component25Component } from './feature34-component25.component';

describe('Feature34Component25Component', () => {
  let component: Feature34Component25Component;
  let fixture: ComponentFixture<Feature34Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
