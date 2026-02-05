import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../model/course';

interface CoursesResponse {
    payload: Course[];
}

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor(private http: HttpClient) { }

    loadCourses(): Observable<Course[]> {
        const params = new HttpParams()
            .set('page', '1')
            .set('pageSize', '10');

        return this.http
            .get<CoursesResponse>('/api/courses', { params })
            .pipe(map(response => response.payload));
    }

    saveCourse(course: Course): Observable<Course> {
        return this.http.put<Course>(`/api/courses/${course.id}`, course);
    }
}
