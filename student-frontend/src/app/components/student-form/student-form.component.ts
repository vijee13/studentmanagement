import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

// Custom validator: no future dates
function noFutureDate(control: AbstractControl) {
  const val = control.value;
  if (!val) return null;
  const selected = new Date(val);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected > today ? { futureDate: true } : null;
}

// Custom validator: past/current years only
function pastOrCurrentYear(control: AbstractControl) {
  const val = control.value;
  if (!val) return null;
  const currentYear = new Date().getFullYear();
  return parseInt(val, 10) > currentYear ? { futureYear: true } : null;
}

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  studentId: number | null = null;
  loading = false;
  submitting = false;
  error = '';
  successMsg = '';
  maxDate: string = '';

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];

    this.form = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      dob: ['', [Validators.required, noFutureDate]],
      totalMarks: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      cgpa: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      course: ['', [Validators.required, Validators.pattern(/^[A-Za-z.]+$/)]],
      graduationYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/), pastOrCurrentYear]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.studentId = +id;
      this.loading = true;
      this.studentService.getById(this.studentId).subscribe({
        next: (student) => {
          this.form.patchValue({
            id: student.id,
            name: student.name,
            dob: student.dob?.split('T')[0],
            totalMarks: student.totalMarks,
            cgpa: student.cgpa,
            mobile: student.mobile,
            address: student.address,
            email: student.email,
            course: student.course,
            graduationYear: student.graduationYear
          });
          this.loading = false;
        },
        error: () => { this.error = 'Failed to load student data.'; this.loading = false; }
      });
    }
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.error = '';
    const raw = this.form.getRawValue();
    const payload: any = {
      name: raw.name,
      dob: raw.dob,
      totalMarks: +raw.totalMarks,
      cgpa: +raw.cgpa,
      mobile: raw.mobile,
      address: raw.address || null,
      email: raw.email,
      course: raw.course,
      graduationYear: raw.graduationYear
    };

    if (this.isEdit && this.studentId !== null) {
      payload.id = this.studentId;
      this.studentService.update(this.studentId, payload).subscribe({
        next: () => { this.submitting = false; this.router.navigate(['/']); },
        error: () => { this.error = 'Update failed. Please try again.'; this.submitting = false; }
      });
    } else {
      this.studentService.create(payload).subscribe({
        next: () => { this.submitting = false; this.router.navigate(['/']); },
        error: () => { this.error = 'Create failed. Please try again.'; this.submitting = false; }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
