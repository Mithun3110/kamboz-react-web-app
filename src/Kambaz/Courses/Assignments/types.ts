export interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  group: string;
  displayGrade: string;
  submissionType: string;
  assignTo: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
}