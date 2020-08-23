import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component15Component } from './feature68-component15.component';

describe('Feature68Component15Component', () => {
  let component: Feature68Component15Component;
  let fixture: ComponentFixture<Feature68Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
