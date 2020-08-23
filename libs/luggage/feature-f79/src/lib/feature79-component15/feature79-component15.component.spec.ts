import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component15Component } from './feature79-component15.component';

describe('Feature79Component15Component', () => {
  let component: Feature79Component15Component;
  let fixture: ComponentFixture<Feature79Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
