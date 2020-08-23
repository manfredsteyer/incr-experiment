import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component25Component } from './feature26-component25.component';

describe('Feature26Component25Component', () => {
  let component: Feature26Component25Component;
  let fixture: ComponentFixture<Feature26Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature26Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
