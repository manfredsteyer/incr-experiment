import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component25Component } from './feature40-component25.component';

describe('Feature40Component25Component', () => {
  let component: Feature40Component25Component;
  let fixture: ComponentFixture<Feature40Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
