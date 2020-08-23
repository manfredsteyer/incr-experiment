import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component25Component } from './feature49-component25.component';

describe('Feature49Component25Component', () => {
  let component: Feature49Component25Component;
  let fixture: ComponentFixture<Feature49Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
