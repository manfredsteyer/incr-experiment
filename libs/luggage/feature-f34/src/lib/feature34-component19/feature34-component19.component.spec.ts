import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component19Component } from './feature34-component19.component';

describe('Feature34Component19Component', () => {
  let component: Feature34Component19Component;
  let fixture: ComponentFixture<Feature34Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
