import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  loading = false;
  error = '';
  deleteId: number | null = null;
  successMsg = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.error = '';
    this.studentService.getAll().subscribe({
      next: (data) => { this.students = data; this.loading = false; },
      error: () => { this.error = 'Failed to load students. Make sure the API is running.'; this.loading = false; }
    });
  }

  editStudent(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  confirmDelete(id: number): void {
    this.deleteId = id;
  }

  cancelDelete(): void {
    this.deleteId = null;
  }

  deleteStudent(): void {
    if (this.deleteId === null) return;
    this.studentService.delete(this.deleteId).subscribe({
      next: () => {
        this.successMsg = 'Student deleted successfully!';
        this.deleteId = null;
        this.loadStudents();
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: () => { this.error = 'Failed to delete student.'; this.deleteId = null; }
    });
  }

  addStudent(): void {
    this.router.navigate(['/add']);
  }

  formatDob(dob: string): string {
    return new Date(dob).toLocaleDateString('en-IN');
  }
}
