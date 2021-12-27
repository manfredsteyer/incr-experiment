import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component26Component } from './feature65-component26.component';

describe('Feature65Component26Component', () => {
  let component: Feature65Component26Component;
  let fixture: ComponentFixture<Feature65Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
