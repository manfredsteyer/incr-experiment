import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component25Component } from './feature35-component25.component';

describe('Feature35Component25Component', () => {
  let component: Feature35Component25Component;
  let fixture: ComponentFixture<Feature35Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
