import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component5Component } from './feature65-component5.component';

describe('Feature65Component5Component', () => {
  let component: Feature65Component5Component;
  let fixture: ComponentFixture<Feature65Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
