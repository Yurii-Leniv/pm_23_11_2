import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechForm } from './tech-form';

describe('TechForm', () => {
  let component: TechForm;
  let fixture: ComponentFixture<TechForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TechForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
