import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component15Component } from './feature71-component15.component';

describe('Feature71Component15Component', () => {
  let component: Feature71Component15Component;
  let fixture: ComponentFixture<Feature71Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
