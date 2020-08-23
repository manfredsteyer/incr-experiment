import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component25Component } from './feature32-component25.component';

describe('Feature32Component25Component', () => {
  let component: Feature32Component25Component;
  let fixture: ComponentFixture<Feature32Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
