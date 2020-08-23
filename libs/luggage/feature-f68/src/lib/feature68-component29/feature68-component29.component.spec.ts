import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component29Component } from './feature68-component29.component';

describe('Feature68Component29Component', () => {
  let component: Feature68Component29Component;
  let fixture: ComponentFixture<Feature68Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
