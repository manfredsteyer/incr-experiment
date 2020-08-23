import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component25Component } from './feature29-component25.component';

describe('Feature29Component25Component', () => {
  let component: Feature29Component25Component;
  let fixture: ComponentFixture<Feature29Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
