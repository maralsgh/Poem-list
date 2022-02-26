import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemDetailsComponent } from './poem-details.component';

describe('PoemDetailsComponent', () => {
  let component: PoemDetailsComponent;
  let fixture: ComponentFixture<PoemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
