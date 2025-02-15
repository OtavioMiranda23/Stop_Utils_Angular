import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenLettersComponent } from './forbidden-letters.component';

describe('ForbiddenLettersComponent', () => {
  let component: ForbiddenLettersComponent;
  let fixture: ComponentFixture<ForbiddenLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbiddenLettersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
