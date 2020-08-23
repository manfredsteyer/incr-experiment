import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component25Component } from './feature6-component25.component';

describe('Feature6Component25Component', () => {
  let component: Feature6Component25Component;
  let fixture: ComponentFixture<Feature6Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
