import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component5Component } from './feature29-component5.component';

describe('Feature29Component5Component', () => {
  let component: Feature29Component5Component;
  let fixture: ComponentFixture<Feature29Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
