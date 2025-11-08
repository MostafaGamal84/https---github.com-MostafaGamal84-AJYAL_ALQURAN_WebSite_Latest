// packages.component.ts
import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ContactService } from '../../services/contact.service';

Swiper.use([Navigation, Pagination, Autoplay]);

type PackageItem = {
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
};

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    public contactService: ContactService
  ) {}

  currentLang: 'ar' | 'en' = 'ar';
  swiper: Swiper | null = null;

  packages: PackageItem[] = [
    {
      titleAr: '✨ قسم الحفظ المُيسَّر في أجيال القرآن ✨',
      titleEn: '✨ Easy Memorization Section at Ajyal Al-Quran ✨',
      contentAr: `🔸 التعريف:
قسم الحفظ المُيسَّر هو أحد أكثر الأقسام انتشارًا في أجيال القرآن، لكونه الأنسب لأغلب الطلاب، ويُعنى بحفظ القرآن الكريم بطريقة مريحة ومتدرجة.

🔹 الفئة المستهدفة:
- الطالب متوسط المستوى المجيد للقراءة  
- الطالب المنشغل الذي لا يستطيع الالتحاق ببرامج الحفظ المكثفة.

🎯 أهداف قسم الحفظ المُيسَّر:
- حفظ القرآن الكريم دون مشقة مع بناء علاقة حب لكلام الله تعالى.
- تأسيس قاعدة متينة في الحفظ المستمر وتثبيت المحفوظ عبر مراجعات منتظمة ومدروسة.
- تحسين النطق والتجويد ومخارج الحروف.
- فهم غريب القرآن والمعاني العامة للآيات.

🧩 تقسيم الحلقة في قسم الحفظ المُيسَّر:

⏱ مدة الحلقة:
من 20 إلى 60 دقيقة، بحسب الباقة التعليمية التي يختارها الطالب:
- الماسية  
- الذهبية  
- الفضية  
- البرونزية

📌 الأوراد القرآنية داخل الحلقة:
- تنقسم الحصة إلى أربعة أوراد رئيسية:
1. الجديد  
2. الماضي القريب  
3. الماضي البعيد  
4. الماضي الأبعد

🧪 كما تُجرى اختبارات تقويمية دورية للاطمئنان على جودة الحفظ.`,
      contentEn: `🔸 Definition:
The Easy Memorization Section is one of the most popular sections at Ajyal Al-Quran. It suits most students and focuses on relaxed, gradual Quran memorization.

🔹 Target Audience:
- Intermediate-level students who are proficient in reading.
- Busy students who cannot commit to intensive memorization programs.

🎯 Objectives:
- Help students memorize the Quran with ease, fostering love for the words of Allah.
- Build a solid foundation for consistent memorization and strengthen retention through regular and structured reviews.
- Improve pronunciation, Tajweed, and articulation.
- Understand uncommon Quranic vocabulary and general meanings of the verses.

🧩 Class Structure in the Easy Memorization Section:

⏱ Duration:
20–60 minutes depending on the educational package selected by the student:
- Diamond  
- Gold  
- Silver  
- Bronze

📌 Quranic Components within the Session:
The session is divided into four main components:
1. New memorization  
2. Recent review  
3. Older review  
4. Long-term review

🧪 Regular assessment tests are conducted to ensure memorization quality.`
    },

    {
      titleAr: '🎙 قسم الترديد 🎙',
      titleEn: '🎙 Repetition Section 🎙',
      contentAr: `🔸 التعريف:
قسم الترديد يعتمد على أسلوب التلقين والتكرار، حيث يُردّد الطالب الآيات خلف المعلم عدة مرات، لترسيخ الحفظ عبر الذاكرة السمعية، مع تصحيح مخارج الحروف.

🔹 الفئة المستهدفة:
- الأطفال.  
- كبار السن.  
- المبتدئون.  
- من يعانون من صعوبة في القراءة.

🎯 أهداف قسم الترديد:
- تسهيل الحفظ من خلال السماع والتكرار.  
- تصحيح النطق وتحسين الأداء الصوتي.  
- غرس الثقة في تلاوة القرآن الكريم.

🧩 تقسيم الحلقة في قسم الترديد:

⏱ مدة الحلقة:  
من 20 إلى 60 دقيقة.

📌 الأنشطة داخل الحلقة:
1. تكرار الآيات خلف المعلم.  
2. ربط الجديد بالقديم.  
3. أداء واجب صوتي منزلي.

🎧 الوسائل المساعدة:
- تسجيلات صوتية  
- بطاقات تلوين  
- سبورة ذكية`,
      contentEn: `🔸 Definition:
The Repetition Section relies on the method of vocal prompting and repetition. The student repeats the verses after the teacher several times to reinforce memorization through auditory memory, along with articulation correction.

🔹 Target Audience:
- Children  
- Seniors  
- Beginners  
- Individuals with reading difficulties

🎯 Objectives of the Repetition Section:
- Facilitate memorization through listening and repetition  
- Correct pronunciation and improve vocal performance  
- Instill confidence in reciting the Quran

🧩 Class Structure in the Repetition Section:

⏱ Duration:  
20–60 minutes

📌 Activities within the session:
1. Repeating verses after the teacher  
2. Linking new verses with previous ones  
3. Performing a home audio assignment

🎧 Support Tools:
- Audio recordings  
- Coloring cards  
- Smart board`
    },

    {
      titleAr: '🧱 قسم التأسيس في أجيال القرآن 🧱',
      titleEn: '🧱 Foundation Section at Ajyal Al-Quran 🧱',
      contentAr: `🔸 التعريف:
قسم تأسيسي يهدف إلى تعليم الحروف ، ومخارجها ، وقواعد التهجي، ليتمكن الطالب من القراءة الصحيحة من المصحف.

🔹 الفئة المستهدفة:
- الأطفال من عمر 4 سنوات فأكثر.  
- المبتدئون.  
- من لديهم ضعف في القراءة أو صعوبات في النطق.

🎯 أهداف قسم التأسيس:
- تمكين الطالب من قراءة القرآن قراءة صحيحة.  
- تعليم مخارج الحروف وصفاتها.  
- تهيئة الطالب للالتحاق ببرامج الحفظ أو التلاوة.

🧩 تقسيم الحلقة في قسم التأسيس:

⏱ مدة الحلقة:  
من 30 إلى 60 دقيقة.

📌 المحتوى التعليمي:
1. تعليم الحروف.  
2. التدريب على التهجي.  
3. التدرج في القراءة.  
4. تصحيح التلاوة بشكل فردي وتفاعلي.

🎒 الوسائل المساعدة:
- بطاقات تعليمية.  
- كتب تأسيسية متخصصة.  
- تطبيقات تفاعلية.  
- فيديوهات مبسطة.`,
      contentEn: `🔸 Definition:
A foundational section that focuses on teaching Arabic letters, articulation points, and decoding rules to enable students to read the Quran correctly from the Mushaf.

🔹 Target Audience:
- Children aged 4 and above  
- Beginners  
- Individuals with reading weaknesses or speech difficulties

🎯 Objectives of the Foundation Section:
- Enable students to read the Quran accurately  
- Teach articulation points and characteristics of letters  
- Prepare students to join memorization or recitation programs

🧩 Class Structure in the Foundation Section:

⏱ Duration:  
30–60 minutes

📌 Educational Content:
1. Learning Arabic letters  
2. Practicing decoding (Tajweed spelling)  
3. Gradual reading practice  
4. Individual and interactive recitation correction

🎒 Support Tools:
- Educational flashcards  
- Specialized foundational books  
- Interactive applications  
- Simplified educational videos`
    },

    {
      titleAr: '🛡 قسم الحُصون في أجيال القرآن 🛡',
      titleEn: '🛡 Fortresses Section at Ajyal Al-Quran 🛡',
      contentAr: `🔸 التعريف:
قسم مخصص لبناء الحفظ المنظّم والمتقن من خلال منهجية "الحصون الخمسة".

🔹 الفئة المستهدفة:
- الطلاب الجادّون.  
- المقبلون على اختبار أو ختمة.  
- المعلّمون.

🎯 أهداف قسم الحُصون:
- ترسيخ الحفظ.  
- منع النسيان.  
- خطة شاملة للمراجعة.

🧱 منهجية الحصون الخمسة:
1. حصن الجديد.  
2. حصن الماضي القريب.  
3. حصن الماضي البعيد.  
4. حصن التحضير.  
5. حصن القراءة والسماع.

⏱ مدة الحلقة:  
من 30 إلى 100 دقيقة، بحسب مستوى الطالب واحتياجه.

📌 المحتوى داخل الحلقة:
- تسميع.  
- مراجعة منتظمة.  
- تحضير.  
- تلاوة.

🎖 الوسائل والأدوات المساعدة:
- جدول متابعة دقيق.  
- اختبار شهري لتقويم الأداء.`,
      contentEn: `🔸 Definition:
A dedicated section for structured and refined memorization using the "Five Fortresses" methodology.

🔹 Target Audience:
- Committed students  
- Those preparing for exams or khatma  
- Teachers

🎯 Objectives of the Fortresses Section:
- Strengthen and anchor memorization  
- Prevent forgetfulness  
- Implement a comprehensive review plan

🧱 The Five Fortresses Method:
1. New memorization fortress  
2. Recent review fortress  
3. Distant review fortress  
4. Preparation fortress  
5. Reading & listening fortress

⏱ Session Duration:  
30–100 minutes based on student level and need

📌 In-Session Content:
- Recitation  
- Regular review  
- Preparation  
- Reading

🎖 Tools & Aids:
- Detailed follow-up schedule  
- Monthly performance assessment test`
    },

    {
      titleAr: '🌿 نظام الحفظ والتدبر في أجيال القرآن 🌿',
      titleEn: '🌿 Memorization & Reflection System at Ajyal Al-Quran 🌿',
      contentAr: `🔸 التعريف:
نظام يجمع بين الحفظ والتدبر، من خلال فهم المعاني ومفردات القرآن قبل حفظه مما يعزز الوعي القرآني.

🔹 الفئة المستهدفة:
- من أتم التأسيس ويرغب بالجمع بين الحفظ والعمل بالقرآن.

🎯 أهداف قسم الحفظ والتدبر:
- دمج الحفظ بالفهم العميق للمعاني.  
- غرس القيم القرآنية في السلوك العملي.

🧩 تقسيم الحلقة:

⏱ مدة الحلقة:  
من 45 إلى 60 دقيقة

📌 محتوى الحلقة:
1. تهيئة ذهنية.  
2. قراءة وتدبر الآيات.  
3. حفظ الآيات.  
4. تسميع.  
5. واجب تطبيقي.

🧰 الوسائل المساعدة:
- دفتر تدبر لتسجيل الفوائد.  
- خرائط ذهنية.  
- أنشطة تفاعلية لتعزيز الفهم.`,
      contentEn: `🔸 Definition:
A system that integrates memorization with reflection by understanding Quranic meanings and vocabulary before memorizing, enhancing Quranic awareness.

🔹 Target Audience:
- Those who have completed the foundational level and wish to combine memorization with living the Quran.

🎯 Objectives of the Memorization & Reflection Section:
- Combine memorization with deep understanding of meanings.  
- Instill Quranic values into practical behavior.

🧩 Session Structure:

⏱ Duration:  
45–60 minutes

📌 Session Content:
1. Mental preparation  
2. Reading and reflecting on verses  
3. Memorizing verses  
4. Recitation  
5. Applied homework

🧰 Support Tools:
- Reflection journal for key takeaways  
- Mind maps  
- Interactive activities to reinforce understanding`
    },

    {
      titleAr: '📜 قسم الإجازات والقراءات في أجيال القرآن 📜',
      titleEn: '📜 Ijazah & Qira’at Section at Ajyal Al-Quran 📜',
      contentAr: `🔸 التعريف:
قسم متخصص يُعنى بتأهيل الطلاب لنيل الإجازة بالسند المتصل إلى النبي ﷺ في حفظ أو تلاوة القرآن الكريم، بإشراف نخبة من المجيزين والمقرئين.

🔹 الفئة المستهدفة:
- الحفاظ.  
- طلاب العلم.  
- المعلّمون.

🎯 أهداف قسم الإجازات والقراءات:
- تخريج مجازين متقنين.  
- نشر علم الإقراء.  
- رفع كفاءة المعلّمين.

🧩 مراحل الإجازة:
1. 📝 التقديم  
2. 📚 التحضير  
3. 🎙 العرض الكامل  
4. 📜 الإجازة

📌 ملاحظات:
- الإجازات تُمنح وفق ضوابط دقيقة ومعايير أداء محددة.  
- تُوثق الإجازات إلكترونيًا.`,
      contentEn: `🔸 Definition:
A specialized section focused on qualifying students to earn a certified Quranic Ijazah (license) with a connected chain to the Prophet Muhammad ﷺ, supervised by expert certified scholars.

🔹 Target Audience:
- Hafiz (memorizers)  
- Knowledge seekers  
- Quran teachers

🎯 Objectives of the Ijazah & Qira’at Section:
- Graduate well-qualified, certified reciters  
- Spread the science of Quranic recitation (Iqra’a)  
- Elevate the skill level of teachers

🧩 Ijazah Stages:
1. 📝 Application  
2. 📚 Preparation  
3. 🎙 Full Recital  
4. 📜 Certification

📌 Notes:
- Ijazahs are granted according to strict criteria and performance standards  
- All certifications are digitally archived`
    }
  ];

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    this.currentLang = savedLang === 'en' ? 'en' : 'ar';
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  ngOnDestroy(): void {
    this.swiper?.destroy(true, true);
    this.swiper = null;
  }

  initializeSwiper(): void {
    setTimeout(() => {
      this.swiper?.destroy(true, true);
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        loop: false,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    }, 100);
  }

  /** يحوِّل النص الخام إلى HTML منسّق بعناوين فرعية وقوائم */
formatContent(raw: string, lang: 'ar' | 'en'): string {
  const headingMap: Record<string, { ar: string; en: string }> = {
    '🔸': { ar: 'التعريف', en: 'Definition' },
    '🔹': { ar: 'الفئة المستهدفة', en: 'Target Audience' },
    '🎯': { ar: 'الأهداف', en: 'Objectives' },
    '🧩': { ar: 'تقسيم الحلقة', en: 'Class Structure' },
    '📌': { ar: 'المحتوى', en: 'Content' },
    '⏱': { ar: 'المدة', en: 'Duration' },
    '🎧': { ar: 'الوسائل المساعدة', en: 'Support Tools' },
    '🎒': { ar: 'الوسائل التعليمية', en: 'Educational Tools' },
    '🧰': { ar: 'أدوات مساعدة', en: 'Aids' },
    '📓': { ar: 'واجب تطبيقي', en: 'Applied Homework' },
    '🗣': { ar: 'التسميع والمراجعة', en: 'Recitation & Review' },
    '🔊': { ar: 'الحفظ', en: 'Memorization' },
    '🧠': { ar: 'التدبر', en: 'Reflection' },
    '📖': { ar: 'التهيئة', en: 'Preparation' },
    '🎖': { ar: 'أدوات التقييم', en: 'Evaluation Tools' },
    '🧱': { ar: 'الحصون', en: 'Fortresses' },
  };

  const lines = raw.split('\n').map(l => l.trim());
  let html: string[] = [];
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) { html.push('</ul>'); inUl = false; }
    if (inOl) { html.push('</ol>'); inOl = false; }
  };

  for (const line of lines) {
    if (!line) { closeLists(); continue; }

    const key = line.slice(0, 2);
    if (headingMap[key]) {
      closeLists();
      if (key === '⏱') {
        const text = line.replace('⏱', '').trim();
        html.push(`<div class="section-sub"><strong>⏱ ${headingMap[key][lang]}:</strong> ${text}</div>`);
      } else {
        html.push(`<h4 class="section-heading">${headingMap[key][lang]}:</h4>`);
      }
      continue;
    }

    if (/^[-•]\s+/.test(line)) {
      if (!inUl) { closeLists(); html.push('<ul>'); inUl = true; }
      html.push(`<li>${line.replace(/^[-•]\s+/, '')}</li>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      if (!inOl) { closeLists(); html.push('<ol>'); inOl = true; }
      html.push(`<li>${line.replace(/^\d+\.\s+/, '')}</li>`);
      continue;
    }

    html.push(`<p>${line}</p>`);
  }

  closeLists();
  return html.join('');
}}
