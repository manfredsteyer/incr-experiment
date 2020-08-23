import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component22Component } from './feature30-component22.component';

describe('Feature30Component22Component', () => {
  let component: Feature30Component22Component;
  let fixture: ComponentFixture<Feature30Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
