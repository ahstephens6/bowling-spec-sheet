import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBowler } from './remove-bowler';

describe('RemoveBowler', () => {
  let component: RemoveBowler;
  let fixture: ComponentFixture<RemoveBowler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveBowler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveBowler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
