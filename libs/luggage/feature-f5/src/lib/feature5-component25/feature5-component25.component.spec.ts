import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component25Component } from './feature5-component25.component';

describe('Feature5Component25Component', () => {
  let component: Feature5Component25Component;
  let fixture: ComponentFixture<Feature5Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
