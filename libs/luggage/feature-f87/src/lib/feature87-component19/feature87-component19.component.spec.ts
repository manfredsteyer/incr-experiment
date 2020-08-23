import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component19Component } from './feature87-component19.component';

describe('Feature87Component19Component', () => {
  let component: Feature87Component19Component;
  let fixture: ComponentFixture<Feature87Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
