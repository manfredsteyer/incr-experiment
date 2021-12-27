import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component4Component } from './feature47-component4.component';

describe('Feature47Component4Component', () => {
  let component: Feature47Component4Component;
  let fixture: ComponentFixture<Feature47Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
