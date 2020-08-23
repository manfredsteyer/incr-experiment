import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component25Component } from './feature69-component25.component';

describe('Feature69Component25Component', () => {
  let component: Feature69Component25Component;
  let fixture: ComponentFixture<Feature69Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
