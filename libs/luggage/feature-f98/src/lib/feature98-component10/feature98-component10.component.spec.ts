import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component10Component } from './feature98-component10.component';

describe('Feature98Component10Component', () => {
  let component: Feature98Component10Component;
  let fixture: ComponentFixture<Feature98Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
