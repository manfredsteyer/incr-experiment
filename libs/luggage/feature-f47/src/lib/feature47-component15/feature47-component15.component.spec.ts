import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component15Component } from './feature47-component15.component';

describe('Feature47Component15Component', () => {
  let component: Feature47Component15Component;
  let fixture: ComponentFixture<Feature47Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
