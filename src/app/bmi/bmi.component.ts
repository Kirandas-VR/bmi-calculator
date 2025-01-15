import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight: number | null = null;
  height: number | null = null;
  bmi: number | null = null;
  category: string = '';

  calculateBMI() {
    if (this.weight && this.height) {
      const heightInMeters = this.height / 100; // Convert height to meters
      this.bmi = this.weight / (heightInMeters * heightInMeters); // BMI Calculation
      this.setCategory(); // Determine BMI category
    } else {
      alert('Please enter both weight and height.');
    }
  }

  setCategory() {
    if (this.bmi) {
      if (this.bmi < 18.5) {
        this.category = 'Underweight';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.category = 'Normal weight';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.category = 'Overweight';
      } else {
        this.category = 'Obese';
      }
    }
  }
}
