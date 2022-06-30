import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreComponent } from './bookstore.component';

describe('BookstoreComponent', () => {
  let component: BookstoreComponent;
  let fixture: ComponentFixture<BookstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
