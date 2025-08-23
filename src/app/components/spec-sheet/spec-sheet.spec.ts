import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecSheet } from './spec-sheet';

describe('SpecSheet', () => {
  let component: SpecSheet;
  let fixture: ComponentFixture<SpecSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
