import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component26Component } from './feature68-component26.component';

describe('Feature68Component26Component', () => {
  let component: Feature68Component26Component;
  let fixture: ComponentFixture<Feature68Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
