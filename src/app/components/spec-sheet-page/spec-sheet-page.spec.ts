import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecSheetPage } from './spec-sheet-page';

describe('SpecSheetPage', () => {
  let component: SpecSheetPage;
  let fixture: ComponentFixture<SpecSheetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecSheetPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
