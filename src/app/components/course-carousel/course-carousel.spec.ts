import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCarousel } from './course-carousel';

describe('CourseCarousel', () => {
  let component: CourseCarousel;
  let fixture: ComponentFixture<CourseCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
