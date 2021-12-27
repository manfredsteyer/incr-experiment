import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component19Component } from './feature22-component19.component';

describe('Feature22Component19Component', () => {
  let component: Feature22Component19Component;
  let fixture: ComponentFixture<Feature22Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
