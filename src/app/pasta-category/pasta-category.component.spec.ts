import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaCategoryComponent } from './pasta-category.component';

describe('PastaCategoryComponent', () => {
  let component: PastaCategoryComponent;
  let fixture: ComponentFixture<PastaCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastaCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastaCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
