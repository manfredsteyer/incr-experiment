import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component26Component } from './feature47-component26.component';

describe('Feature47Component26Component', () => {
  let component: Feature47Component26Component;
  let fixture: ComponentFixture<Feature47Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
