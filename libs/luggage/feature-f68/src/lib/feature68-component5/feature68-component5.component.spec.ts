import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component5Component } from './feature68-component5.component';

describe('Feature68Component5Component', () => {
  let component: Feature68Component5Component;
  let fixture: ComponentFixture<Feature68Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
