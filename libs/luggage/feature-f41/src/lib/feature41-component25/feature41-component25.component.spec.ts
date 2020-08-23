import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component25Component } from './feature41-component25.component';

describe('Feature41Component25Component', () => {
  let component: Feature41Component25Component;
  let fixture: ComponentFixture<Feature41Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
