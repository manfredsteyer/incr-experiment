import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component29Component } from './feature22-component29.component';

describe('Feature22Component29Component', () => {
  let component: Feature22Component29Component;
  let fixture: ComponentFixture<Feature22Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
