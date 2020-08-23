import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component25Component } from './feature71-component25.component';

describe('Feature71Component25Component', () => {
  let component: Feature71Component25Component;
  let fixture: ComponentFixture<Feature71Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
