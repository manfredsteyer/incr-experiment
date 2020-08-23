import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component22Component } from './feature35-component22.component';

describe('Feature35Component22Component', () => {
  let component: Feature35Component22Component;
  let fixture: ComponentFixture<Feature35Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
