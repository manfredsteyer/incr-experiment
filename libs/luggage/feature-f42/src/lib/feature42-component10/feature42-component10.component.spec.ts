import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component10Component } from './feature42-component10.component';

describe('Feature42Component10Component', () => {
  let component: Feature42Component10Component;
  let fixture: ComponentFixture<Feature42Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
