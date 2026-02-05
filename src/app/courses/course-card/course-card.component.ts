import { CommonModule } from '@angular/common';
import { Course } from '../../model/course';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true
})
export class CourseCardComponent {

  @Input({ required: true })
  course: Course;

  @Input({ required: true })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() { }

  onCourseViewed() {
    console.log("card component - button clicked....");
    this.courseSelected.emit(this.course);
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    } else if (this.course.category == 'INTERMEDIATE') {
      return 'intermediate';
    } else {
      return 'advanced';
    }
  }

  cardTitleStyle() {
    return {
      'text-decoration': 'underline'
    };
  }

  cardTextStyle() {
    return {
      'text-decoration': 'underline',
      'text-decoration-style': 'dotted'
    };
  }

}
