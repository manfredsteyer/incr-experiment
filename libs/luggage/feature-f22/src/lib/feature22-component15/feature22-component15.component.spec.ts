import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component15Component } from './feature22-component15.component';

describe('Feature22Component15Component', () => {
  let component: Feature22Component15Component;
  let fixture: ComponentFixture<Feature22Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
