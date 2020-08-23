import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component5Component } from './feature61-component5.component';

describe('Feature61Component5Component', () => {
  let component: Feature61Component5Component;
  let fixture: ComponentFixture<Feature61Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
