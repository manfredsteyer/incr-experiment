import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component10Component } from './feature79-component10.component';

describe('Feature79Component10Component', () => {
  let component: Feature79Component10Component;
  let fixture: ComponentFixture<Feature79Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
