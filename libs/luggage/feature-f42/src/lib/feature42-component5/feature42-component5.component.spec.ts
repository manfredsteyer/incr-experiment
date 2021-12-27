import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component5Component } from './feature42-component5.component';

describe('Feature42Component5Component', () => {
  let component: Feature42Component5Component;
  let fixture: ComponentFixture<Feature42Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
