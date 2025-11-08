import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   constructor(public contactService: ContactService,private router:Router) {
    }
    currentLang: string = 'ar';
  
    ngOnInit(): void {
      const savedLang = localStorage.getItem('lang');
      this.currentLang = savedLang === 'en' ? 'en' : 'ar';
    }
     currentYear = new Date().getFullYear();
companyName: Record<'ar' | 'en', string> = {
  ar: 'أجيال القرآن',
  en: 'Ajyal Al-Quran'
};

quickLinks = [
  { path: '/about', textAr: 'من نحن', textEn: 'About Us' },
  { path: '/features', textAr: 'الميزات', textEn: 'Features' },
  { path: '/our-services', textAr: 'خدماتنا', textEn: 'Our Services' },
  { path: '/contact', textAr: 'اتصل بنا', textEn: 'Contact Us' }
];

contactInfo = {
  email: 'allhghayte8@gmail.com',
  phone: '+201099381081'
};
   socialLinks = [
  {
    icon: 'youtube',
    url: 'https://youtube.com/@ajyal_elpraan?si=DtyVJ8hdBoWbC_1V',
    ariaLabel: 'شاهد قناتنا الأولى على يوتيوب'
  },
  {
    icon: 'youtube',
    url: 'https://youtube.com/@agyal-alqoran?si=CLZECCURk8jHZvm_',
    ariaLabel: 'شاهد قناتنا الثانية على يوتيوب'
  },
  {
    icon: 'telegram',
    url: 'https://youtube.com/@agyal-alqoran?si=CLZECCURk8jHZvm_',
    ariaLabel: 'انضم إلى قناتنا على تيليجرام'
  }
];
  /**
   * Scroll to a section when clicking a navigation link.
   * @param event - The click event from the navigation link.
   */
scrollTo(event: Event): void {
  event.preventDefault();
  const element = event.target as HTMLElement;
  const targetId = element.getAttribute('data-target')?.replace('/', '');

  if (targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: navigate to the route if the element isn't in view
      this.router.navigate([`/${targetId}`]);
    }
  }
}
}
