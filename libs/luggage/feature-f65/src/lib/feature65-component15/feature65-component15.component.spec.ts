import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component15Component } from './feature65-component15.component';

describe('Feature65Component15Component', () => {
  let component: Feature65Component15Component;
  let fixture: ComponentFixture<Feature65Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
