import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component23Component } from './feature22-component23.component';

describe('Feature22Component23Component', () => {
  let component: Feature22Component23Component;
  let fixture: ComponentFixture<Feature22Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
