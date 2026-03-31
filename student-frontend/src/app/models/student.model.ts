export interface Student {
  id: number;
  name: string;
  dob: string;         // ISO date string
  totalMarks: number;
  cgpa: number;
  mobile: string;
  address?: string;
  email: string;
  course: string;
  graduationYear: string;
}
