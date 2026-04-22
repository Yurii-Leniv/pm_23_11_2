import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechList } from './tech-list';

describe('TechList', () => {
  let component: TechList;
  let fixture: ComponentFixture<TechList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechList],
    }).compileComponents();

    fixture = TestBed.createComponent(TechList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
