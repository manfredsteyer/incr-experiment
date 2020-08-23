import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component25Component } from './feature48-component25.component';

describe('Feature48Component25Component', () => {
  let component: Feature48Component25Component;
  let fixture: ComponentFixture<Feature48Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
