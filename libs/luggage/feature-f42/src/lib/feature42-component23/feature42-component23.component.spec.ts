import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component23Component } from './feature42-component23.component';

describe('Feature42Component23Component', () => {
  let component: Feature42Component23Component;
  let fixture: ComponentFixture<Feature42Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
