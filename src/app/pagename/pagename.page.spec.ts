import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenamePage } from './pagename.page';

describe('PagenamePage', () => {
  let component: PagenamePage;
  let fixture: ComponentFixture<PagenamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
