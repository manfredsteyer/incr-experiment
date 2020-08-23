import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component5Component } from './feature37-component5.component';

describe('Feature37Component5Component', () => {
  let component: Feature37Component5Component;
  let fixture: ComponentFixture<Feature37Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
