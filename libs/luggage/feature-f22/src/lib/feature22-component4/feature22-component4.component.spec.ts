import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component4Component } from './feature22-component4.component';

describe('Feature22Component4Component', () => {
  let component: Feature22Component4Component;
  let fixture: ComponentFixture<Feature22Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature22Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
