import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "../counter/counter.component";
import { ContactService } from '../../services/contact.service';
 
interface FeatureIcon {
  type: 'svg' | 'img';
  content: string;
  style?: { [key: string]: string };
}

interface Feature {
  id: number;
  // title: string;/
  titleAr?: string;
  titleEn?: string;
  subtitleAr?: string;
  subtitleEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  // description: string;
  icon: FeatureIcon;
  // subtitle?: string;  
}

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CounterComponent, CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
   constructor(public contactService: ContactService) {
    }
    currentLang: string = 'ar';
  
    ngOnInit(): void {
      const savedLang = localStorage.getItem('lang');
      this.currentLang = savedLang === 'en' ? 'en' : 'ar';
    }
features: Feature[] = [
  {
    id: 1,
    titleAr: 'تقارير الطلاب ومتابعتهم 📄',
    titleEn: '📄 Student Reports & Follow-Up',
    subtitleAr: 'تقارير الطلاب ومتابعتهم 📄',
    subtitleEn: '📄 Student Reports & Follow-Up',
    descriptionAr: 'يوفر نظام أجيال القرآن تقارير دقيقة وشاملة عن أداء الطلاب، تشمل التحصيل العلمي، الحضور، والمشاركة في الأنشطة، مما يساعد المعلمين والإدارة على تقديم الدعم المناسب لكل طالب وفق احتياجاته.',
    descriptionEn: 'Ajyal Al-Quran provides detailed student performance reports including academic progress, attendance, and activity participation—helping teachers and administrators support each student according to their needs.',
    icon: {
      type: 'img',
      content: `https://ajyalquran.somee.com/media/1.jpg`
    }
  },
  {
    id: 2,
    titleAr: 'المشرفون على التحفيظ والتدريس 👨‍🏫',
    titleEn: '👨‍🏫 Supervisors of Teaching & Memorization',
    subtitleAr: 'المشرفون على التحفيظ والتدريس 👨‍🏫',
    subtitleEn: '👨‍🏫 Teaching Supervisors',
    descriptionAr: `يشرف على تدريس القرآن الكريم نخبة من المشرفين المتخصصين، يتابعون الطلاب بدقة ويقيّمون الأداء، ويهتمون بغرس القيم القرآنية، وحل المشكلات التربوية.`,
    descriptionEn: `A team of qualified supervisors monitors student progress, ensures teaching quality, reinforces Quranic values, and addresses educational challenges to maintain a productive learning environment.`,
    icon: {
      type: 'img',
      content: 'https://ajyalquran.somee.com/media/c31ec00f14f34b803f6d0fc15fcc6fd9.jpg	',
    }
  },
  {
    id: 3,
    titleAr: '🔹 الحلقات في مدرسة أجيال القرآن',
    titleEn: '🔹 Classes at Ajyal Al-Quran',
    subtitleAr: '🔹 الحلقات في مدرسة أجيال القرآن',
    subtitleEn: '🔹 Structured Quran Learning Classes',
    descriptionAr: `نظام الحلقات الفردية يتيح لكل طالب متابعة خاصة وفق مستواه. الحلقات مقسمة لأقسام: الرجال، النساء، الأطفال، لتناسب الخصوصية والفئات العمرية المختلفة.`,
    descriptionEn: `Individualized class system ensures personalized follow-up. Classes are divided by group: Men, Women, and Children—with age-appropriate teaching environments.`,
    icon: {
      type: 'img',
      content: `https://ajyalquran.somee.com/media/2.jpg`
    }
  },
  {
    id: 4,
    titleAr: 'المعلمون في أجيال القرآن 👩‍🏫',
    titleEn: '👩‍🏫 Teachers at Ajyal Al-Quran',
    subtitleAr: 'المعلمون في أجيال القرآن 👩‍🏫',
    subtitleEn: '👩‍🏫 Our Teachers',
    descriptionAr: `نخبة من المعلمين والمعلمات المتخصصين، يجمعون بين الكفاءة العلمية والخبرة التربوية، ويركزون على غرس القيم القرآنية وتشجيع الطالب على الاستمرار.`,
    descriptionEn: `A team of highly qualified male and female teachers combines academic skill with educational experience, instilling Quranic values and supporting students' continued growth.`,
    icon: {
      type: 'img',
      content: 'https://ajyalquran.somee.com/media/3.jpg',
      style: {
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
      }
    }
  }
];

section = {
  titleAr: 'مميزات مدرسة أجيال القرآن',
  titleEn: 'Features of Ajyal Al-Quran School'
};


  isValidSvg(content: string): boolean {
    return content.includes('<svg') && content.includes('</svg>');
  }

  getAnimationClass(index: number): string {
    const classes = ['slide-bottom', 'slide-left', 'slide-right', 'fade-in'];
    return classes[index % classes.length];
  }
}
