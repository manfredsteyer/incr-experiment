import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component25Component } from './feature75-component25.component';

describe('Feature75Component25Component', () => {
  let component: Feature75Component25Component;
  let fixture: ComponentFixture<Feature75Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
