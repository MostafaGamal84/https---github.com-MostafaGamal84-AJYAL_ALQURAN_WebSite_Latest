import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router,public contactService :ContactService) { 
  }
 currentLang:any
 toggleLanguage() {
    this.contactService.toggleLanguage();
 this.currentLang = this.contactService.currentLang
  }
  isScrolled = false;
  ngOnInit(): void {
    // Set default language to Arabic
    // this.contactService.SetLanguage();
    this.currentLang = localStorage.getItem('lang') as 'ar' | 'en' || 'ar';
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    const triggerHeight = 100;
    this.isScrolled = scrollY > triggerHeight;
  }



  /**
   * Scroll to a section when clicking a navigation link.
   * @param event - The click event from the navigation link.
   */


  scrollTo(event: Event) {
    event.preventDefault();
    const targetPath = (event.target as HTMLAnchorElement).getAttribute('routerLink');
    if (targetPath) {
      const targetElementId = targetPath.replace('/', '');
      const targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.router.navigate([], { fragment: targetElementId });
      }
    }
  }
}
