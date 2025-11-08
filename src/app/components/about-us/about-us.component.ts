import { Component, AfterViewInit,OnDestroy,OnInit,ElementRef,QueryList,ViewChildren} from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
 
 

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, SliderComponent  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('slide') slideElements!: QueryList<ElementRef>;
  @ViewChildren('dot') dotElements!: QueryList<ElementRef>;

  slides: string[] = [
    'https://ajyalquran.somee.com/media/slider1.jpg',
    'https://ajyalquran.somee.com/media/slider2.jpg',
    'https://ajyalquran.somee.com/media/slider3.jpg',
    
  ];

  currentSlide = 0;
  private slideSubscription?: Subscription;
  private readonly SLIDE_INTERVAL = 2500; 

  // Dynamic content for the About Us section
 sectionTitle = {
  ar: 'مدرسة أجيال القرآن 🌟',
  en: 'Ajyal Al-Quran School 🌟'
};

description = {
  ar: `نصنع أجيالًا بالقرآن... علمًا وخلقًا وقيادة

مدرسة أجيال القرآن هي مؤسسة تعليمية تربوية تُعنى بصناعة جيل قرآني واعٍ، يتربّى على هدي الكتاب والسنة، ويتسلّح بالعلم والمعرفة والمهارات الحياتية التي تؤهله لصناعة المستقبل.

نعمل على تقديم تعليم متميز يدمج بين العلوم الشرعية والمعارف المعاصرة، في إطار بيئة تعليمية محفّزة يقودها نخبة من المعلمين المتخصصين في تدريس القرآن الكريم والعلوم الإسلامية.

نحرص على بناء شخصية الطالب بناءً متكاملًا، يجمع بين الثبات الديني، والرقي الأخلاقي، والكفاءة العلمية، كما نولي اهتمامًا خاصًا بتنمية مهارات التفكير النقدي والإبداعي، وتعزيز روح المبادرة والقيادة.

نطمح في مدرسة أجيال القرآن إلى أن نكون روّادًا في تقديم نموذج تعليمي يُحتذى، يجمع بين الأصالة والمعاصرة، ويُخرّج طلابًا مؤمنين، مبدعين، وفاعلين في مجتمعاتهم.`,
  en: `Raising generations through the Quran... in knowledge, values, and leadership.

Ajyal Al-Quran School is an educational institution dedicated to nurturing a conscious Quranic generation. Our students are raised on the guidance of the Quran and Sunnah, empowered with knowledge, ethics, and life skills for shaping the future.

We offer distinguished education that integrates Islamic sciences with modern knowledge, all within a stimulating learning environment led by expert Quran and Islamic studies teachers.

Our goal is to develop students holistically – religiously steadfast, morally refined, and academically competent. We place great emphasis on critical and creative thinking, as well as initiative and leadership.

At Ajyal Al-Quran School, we aspire to set a pioneering model that blends authenticity with modernity, producing faithful, creative, and impactful students in their communities.`
};

   constructor(public contactService: ContactService) {
    }
    currentLang: string = 'ar';
  ngOnInit(): void {
    this.startSlideshow();
      const savedLang = localStorage.getItem('lang');
      this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }

  ngAfterViewInit(): void {
    this.updateSlideClasses();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  private startSlideshow(): void {
    this.stopSlideshow();
    this.slideSubscription = interval(this.SLIDE_INTERVAL).subscribe(() => {
      this.moveToNextSlide();
    });
  }

  private stopSlideshow(): void {
    this.slideSubscription?.unsubscribe();
  }

  private moveToNextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlideClasses();
  }

  setCurrentSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlideClasses();
    this.startSlideshow();  
  }

  private updateSlideClasses(): void {
    this.slideElements?.forEach((slide, i) =>
      slide.nativeElement.classList.toggle('active', i === this.currentSlide)
    );

    this.dotElements?.forEach((dot, i) =>
      dot.nativeElement.classList.toggle('active', i === this.currentSlide)
    );
  }
}