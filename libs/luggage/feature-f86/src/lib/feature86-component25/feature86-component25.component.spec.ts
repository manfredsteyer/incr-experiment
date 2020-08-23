import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component25Component } from './feature86-component25.component';

describe('Feature86Component25Component', () => {
  let component: Feature86Component25Component;
  let fixture: ComponentFixture<Feature86Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
