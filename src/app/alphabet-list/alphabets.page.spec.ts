import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetsPage } from './alphabets.page';

describe('TabsPage', () => {
  let component: AlphabetsPage;
  let fixture: ComponentFixture<AlphabetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
