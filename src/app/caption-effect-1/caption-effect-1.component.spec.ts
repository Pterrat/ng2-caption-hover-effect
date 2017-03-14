import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionEffect1Component } from './caption-effect-1.component';

describe('CaptionEffect1Component', () => {
  let component: CaptionEffect1Component;
  let fixture: ComponentFixture<CaptionEffect1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptionEffect1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptionEffect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
