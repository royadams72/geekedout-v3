import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesMainComponent } from './movies-main.component';

describe('MoviesMainComponent', () => {
  let component: MoviesMainComponent;
  let fixture: ComponentFixture<MoviesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
