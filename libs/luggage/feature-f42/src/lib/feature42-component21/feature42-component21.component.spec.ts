import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component21Component } from './feature42-component21.component';

describe('Feature42Component21Component', () => {
  let component: Feature42Component21Component;
  let fixture: ComponentFixture<Feature42Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
