import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceBox } from './distance-box';

describe('DistanceBox', () => {
  let component: DistanceBox;
  let fixture: ComponentFixture<DistanceBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistanceBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistanceBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
