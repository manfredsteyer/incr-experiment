import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component2Component } from './feature22-component2.component';

describe('Feature22Component2Component', () => {
  let component: Feature22Component2Component;
  let fixture: ComponentFixture<Feature22Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
