import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component25Component } from './feature54-component25.component';

describe('Feature54Component25Component', () => {
  let component: Feature54Component25Component;
  let fixture: ComponentFixture<Feature54Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
