import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularCut } from './circular-cut';

describe('CircularCut', () => {
  let component: CircularCut;
  let fixture: ComponentFixture<CircularCut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularCut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularCut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
