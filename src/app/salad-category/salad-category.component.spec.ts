import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladCategoryComponent } from './salad-category.component';

describe('SaladCategoryComponent', () => {
  let component: SaladCategoryComponent;
  let fixture: ComponentFixture<SaladCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
