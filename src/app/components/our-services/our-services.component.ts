import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

interface Course {
  courseNameAr: string;
  courseNameEn: string;

}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
  constructor(public contactService: ContactService) {
  }
  currentLang: string = 'ar';

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
    
    // ابدأ بالدورة الأولى
    if (this.services.length > 0) {
      this.currentCourse = this.services[0];

      // كل 3 ثواني انتقل للدورة التالية
      this.intervalId = setInterval(() => {
        this.currentCourseIndex = (this.currentCourseIndex + 1) % this.services.length;
        this.currentCourse = this.services[this.currentCourseIndex];
      }, 3000);
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
currentCourseIndex: number = 0;
  currentCourse: Course | null = null;
  intervalId: any;
  services: Course[] = [
  {
    courseNameAr: 'دورة في التدبر',
    courseNameEn: 'Reflection Course',
   
  },
  {
    courseNameAr: 'دورة في المخارج والصفات',
    courseNameEn: 'Articulation & Characteristics Course',
   
  },
  {
    courseNameAr: 'دورة (مهارات) لتطوير المعلم والمشرف',
    courseNameEn: '(Skills) Development Course for Teachers and Supervisors',
    
  },
  {
    courseNameAr: 'دورة تيسير الحفظ',
    courseNameEn: 'Facilitated Memorization Course',
   
  }
];

}
