import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component14Component } from './feature42-component14.component';

describe('Feature42Component14Component', () => {
  let component: Feature42Component14Component;
  let fixture: ComponentFixture<Feature42Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
