import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component6Component } from './feature42-component6.component';

describe('Feature42Component6Component', () => {
  let component: Feature42Component6Component;
  let fixture: ComponentFixture<Feature42Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
