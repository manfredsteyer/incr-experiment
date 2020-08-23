import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component24Component } from './feature99-component24.component';

describe('Feature99Component24Component', () => {
  let component: Feature99Component24Component;
  let fixture: ComponentFixture<Feature99Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature99Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
