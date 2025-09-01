import { Course } from './../model/course';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({required:true})
  course:Course;

  @Input({required:true})
  cardIndex:number

  @Output()
  courseSelected = new EventEmitter<Course>();

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  constructor(){ }

  ngOnInit(){ }

  onCourseViewed(){
    console.log("card component - button clicked....")
    this.courseSelected.emit(this.course);
  }

}
