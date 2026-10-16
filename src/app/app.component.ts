import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  badge: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

interface JiraTicket {
  key: string;
  summary: string;
  module: string;
  severity: 'Critical' | 'Major' | 'Medium' | 'Low';
  priority: 'High' | 'Medium' | 'Low';
  status: 'Done' | 'In Progress' | 'Reported';
  environment: string;
  precondition: string;
  steps: string[];
  expected: string;
  actual: string;
  techDetails: string;
}

interface TestSuite {
  id: string;
  title: string;
  tool: string;
  casesCount: number;
  coverage: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // პერსონალური ინფორმაცია
  profile = {
    name: 'რეზი ლომიძე',
    role: 'QA Engineer (Manual / Automation) & Frontend Specialist',
    location: 'თბილისი / რუსთავი, საქართველო',
    phone: '+995 555 34 42 70',
    email: 'rezi.lomidze.04@gmail.com',
    github: 'https://github.com/rezii3',
    linkedin: 'https://linkedin.com/in/rezi-lomidze-920a022a6',
    license: 'B კატეგორია',
    languages: [
      { lang: 'ქართული', level: 'მშობლიური' },
      { lang: 'ინგლისური', level: 'B1 (Intermediate - Technical Docs & Bug Reporting)' }
    ],
    summary: `დეტალებზე ორიენტირებული QA სპეციალისტი ფრონტენდ დეველოპმენტისა (Angular, TypeScript) და IT ინფრასტრუქტურის (CompTIA A+) პრაქტიკული გამოცდილებით. სიღრმისეულად მესმის ვებ-აპლიკაციების კლიენტ-სერვერული არქიტექტურა (HTTP/REST API, JSON, SQL), რაც მეხმარება ხარვეზების არა მხოლოდ ვიზუალურ აღმოჩენაში, არამედ მათი ტექნიკური მიზეზის (Root Cause Analysis) ზუსტ იდენტიფიცირებაში DevTools-ისა და კოდის დონეზე.`
  };

  // სტატისტიკა Hero სექციისთვის
  metrics = [
    { value: '6 თვე', label: 'კომერციული გამოცდილება (Frontend & API)' },
    { value: '100+', label: 'დაწერილი Test Case & Checklist' },
    { value: 'REST API', label: 'Postman & Chrome DevTools დიაგნოსტიკა' },
    { value: 'CompTIA A+', label: 'სერტიფიცირებული IT & Network ბაზა' }
  ];

  // ტექნიკური უნარების მატრიცა
  skillCategories: SkillCategory[] = [
    {
      title: 'QA & Testing (მთავარი მიმართულება)',
      icon: '🔍',
      badge: 'ISTQB Standards',
      skills: [
        { name: 'Manual Testing (Functional, UI/UX)', level: 'Advanced', highlight: true },
        { name: 'Regression, Smoke & Sanity Testing', level: 'Advanced', highlight: true },
        { name: 'Test Cases & Checklists (Qase.io / Excel)', level: 'Advanced', highlight: true },
        { name: 'Jira (Bug Reporting & Bug Life Cycle)', level: 'Advanced', highlight: true },
        { name: 'Test Design (EP, BVA, Decision Tables)', level: 'Intermediate' },
        { name: 'SDLC / STLC & Agile (Scrum)', level: 'Intermediate' }
      ]
    },
    {
      title: 'API, Web Debugging & Automation',
      icon: '⚡',
      badge: 'Technical QA',
      skills: [
        { name: 'REST API & HTTP/HTTPS Testing', level: 'Advanced', highlight: true },
        { name: 'Postman (Collections, Env, Status Codes)', level: 'Intermediate', highlight: true },
        { name: 'Chrome DevTools (Network, Console, DOM)', level: 'Advanced', highlight: true },
        { name: 'Playwright (TypeScript E2E Basics)', level: 'Learning / Junior' },
        { name: 'JSON / XML Payload Validation', level: 'Advanced' },
        { name: 'Git & GitHub (Version Control)', level: 'Intermediate', highlight: true }
      ]
    },
    {
      title: 'Frontend & Backend Development',
      icon: '💻',
      badge: 'Code Literacy',
      skills: [
        { name: 'Angular, TypeScript & JavaScript', level: 'Intermediate', highlight: true },
        { name: 'HTML5, CSS3 / SCSS, Bootstrap', level: 'Advanced' },
        { name: 'SQL (SELECT, WHERE, JOIN, Filtering)', level: 'Basic / QA Level', highlight: true },
        { name: 'C#, .NET, ASP.NET Core, EF Core', level: 'Basic' },
        { name: 'Figma (UI/UX Pixel-Perfect შერჩევა)', level: 'Intermediate' },
        { name: 'Ng-Zorro & PrimeNG UI Libraries', level: 'Intermediate' }
      ]
    },
    {
      title: 'IT Support, OS & Networking',
      icon: '🛡️',
      badge: 'CompTIA A+',
      skills: [
        { name: 'Windows OS Administration & Logs', level: 'Advanced', highlight: true },
        { name: 'Network Basics (TCP/IP, DNS, DHCP)', level: 'Intermediate' },
        { name: 'Hardware & System Troubleshooting', level: 'Advanced' },
        { name: 'AI Tools for Test Optimization', level: 'Advanced', highlight: true }
      ]
    }
  ];

  // Jira-ს სიმულატორი (რეალური Bug Report-ების ნიმუშები)
  selectedSeverity: string = 'ALL';
  activeTicket: JiraTicket | null = null;

  jiraTickets: JiraTicket[] = [
    {
      key: 'QA-104',
      summary: 'ავტორიზაციისას სერვერი აბრუნებს 500 Internal Server Error-ს სპეციალური სიმბოლოების შეყვანისას',
      module: 'Authentication / REST API',
      severity: 'Critical',
      priority: 'High',
      status: 'Reported',
      environment: 'Windows 11 | Chrome 130.0 | Staging API',
      precondition: 'მომხმარებელი იმყოფება /login გვერდზე და გახსნილია Chrome DevTools (Network ტაბი).',
      steps: [
        'შეიყვანეთ ვალიდური ელ-ფოსტა: test.user@domain.ge',
        'პაროლის ველში შეიყვანეთ სტრიქონი ბრჭყალებით: Pass"123\'!',
        'დააჭირეთ ღილაკს "შესვლა" (Submit).'
      ],
      expected: 'სისტემამ უნდა დაამუშაოს სპეციალური სიმბოლოები უსაფრთხოდ (ან დააბრუნოს 401/400 ვალიდაციის მესიჯი).',
      actual: 'POST /api/v1/auth/login მოთხოვნა ეცემა 500 სტატუს კოდით, UI-ზე კი უსასრულოდ ტრიალებს Spinner-ი.',
      techDetails: 'DevTools Network -> Payload-ში არ ხდება სიმბოლოების ეკრანირება (JSON serialization error).'
    },
    {
      key: 'QA-112',
      summary: 'პაციენტის/მომხმარებლის რეგისტრაციის ფორმა იღებს მომავალ დაბადების თარიღს (BVA ხარვეზი)',
      module: 'User Registration Form',
      severity: 'Major',
      priority: 'High',
      status: 'In Progress',
      environment: 'Windows 11 | Chrome / Edge | Test Env',
      precondition: 'მომხმარებელი გადის რეგისტრაციის ფორმას.',
      steps: [
        'შეავსეთ სახელი, გვარი და პირადი ნომერი (11 ციფრი).',
        'დაბადების თარიღის (Datepicker) ველში აირჩიეთ მომავალი წლის თარიღი (მაგ: 15.10.2028).',
        'დააჭირეთ ღილაკს "შენახვა".'
      ],
      expected: 'Boundary Value Analysis-ის მიხედვით, დღევანდელ თარიღზე მეტი მნიშვნელობა უნდა დაიბლოკოს კლიენტის და სერვერის მხარეს.',
      actual: 'ფორმა წარმატებით იგზავნება (Status 201 Created) და ბაზაში იწერება არავალიდური თარიღი.',
      techDetails: 'Angular FormControl-ს აკლია maxDate ვალიდატორი, ხოლო Backend API არ ამოწმებს თარიღის დიაპაზონს.'
    },
    {
      key: 'QA-119',
      summary: 'მობილურ რეზოლუციაზე (375px) "კალათაში დამატების" ღილაკი გადაფარულია Footer-ით',
      module: 'UI / Responsive Layout',
      severity: 'Medium',
      priority: 'Medium',
      status: 'Done',
      environment: 'Chrome DevTools Device Toolbar (iPhone SE - 375x667)',
      precondition: 'გახსნილია პროდუქტის დეტალური გვერდი მობილურ ხედში.',
      steps: [
        'გახსენით გვერდი 375px სიგანის ეკრანზე.',
        'ჩამოსქროლეთ აღწერის ბოლოში და სცადეთ "დამატება" ღილაკზე დაჭერა.'
      ],
      expected: 'ღილაკი სრულად ხილვადი და კლიკაბელური უნდა იყოს Figma-ს მობილური მაკეტის შესაბამისად.',
      actual: 'ფიქსირებული სტატუს-ბარი (z-index: 999) ფარავს ღილაკის ქვედა ნახევარს და შეუძლებელს ხდის კლიკს.',
      techDetails: 'CSS ხარვეზი: კონტეინერს აკლია padding-bottom: 64px @media (max-width: 480px) წესში.'
    },
    {
      key: 'QA-125',
      summary: 'გვერდის განახლებისას (F5) იკარგება არჩეული ფილტრების მდგომარეობა',
      module: 'Search & Filtering',
      severity: 'Low',
      priority: 'Low',
      status: 'Done',
      environment: 'All Browsers | Web App',
      precondition: 'კატალოგის გვერდზე მონიშნულია 2 ფილტრი და სორტირება ფასის მიხედვით.',
      steps: [
        'აირჩიეთ კატეგორია და ფასის ზღვარი.',
        'დააჭირეთ ბრაუზერის Refresh (F5) ღილაკს.'
      ],
      expected: 'ფილტრების პარამეტრები უნდა ინახებოდეს URL Query Params-ში ან SessionStorage-ში.',
      actual: 'ყველა ფილტრი სუფთავდება და სია უბრუნდება საწყის მდგომარეობას.',
      techDetails: 'Angular Router-ში არ ხდება queryParams-ის სინქრონიზაცია ფილტრის კომპონენტთან.'
    }
  ];

  // ტესტირების პროექტები & GitHub რეპოზიტორიები
  testSuites: TestSuite[] = [
    {
      id: 'TS-01',
      title: 'Web E-Commerce — სრული Manual QA პაკეტი',
      tool: 'Jira + Qase.io / Excel',
      casesCount: 45,
      coverage: 'Functional, Smoke, Negative',
      description: 'ავტორიზაციის, რეგისტრაციის, პროდუქტების ძებნისა და Checkout მოდულების სრული ტესტ-კეისები Equivalence Partitioning და Boundary Value Analysis ტექნიკებით.',
      tags: ['Test Cases', 'Smoke Checklist', 'Bug Reports', 'UI/UX']
    },
    {
      id: 'TS-02',
      title: 'REST API ტესტირების კოლექცია',
      tool: 'Postman + Chrome DevTools',
      casesCount: 28,
      coverage: 'GET, POST, PUT, DELETE, Auth',
      description: 'API ენდფოინთების ვალიდაცია: HTTP სტატუს კოდები (200, 201, 400, 401, 403, 404, 500), JSON სქემის შემოწმება, Bearer Token ავტორიზაცია და Response Time-ის კონტროლი.',
      tags: ['REST API', 'Postman', 'JSON Payload', 'Status Codes']
    },
    {
      id: 'TS-03',
      title: 'Frontend Debugging & E2E Automation',
      tool: 'Angular / TypeScript / Playwright',
      casesCount: 15,
      coverage: 'E2E UI & Network Validation',
      description: '500ml-ში მიღებული ფრონტენდ გამოცდილების ბაზაზე აწყობილი ვებ-კომპონენტების დიაგნოსტიკა და საბაზისო ავტომატური ტესტები TypeScript-ზე.',
      tags: ['TypeScript', 'Angular', 'Playwright', 'Git']
    }
  ];

  // სამუშაო გამოცდილება და განათლება
  experiences = [
    {
      role: 'Frontend Developer (სტაჟიორი)',
      company: '500ml',
      period: '03.2024 – 09.2024 (6 თვე)',
      type: 'Tech Experience',
      highlights: [
        'ვმუშაობდი რეალურ ვებ-პროექტებზე Agile გუნდში: Angular, TypeScript, JavaScript, HTML5, CSS/SCSS.',
        'ვაინტეგრირებდი და ვტესტავდი REST API-ებს: ვამოწმებდი HTTP მოთხოვნებსა და პასუხებს (Status Codes, Headers, JSON Payload).',
        'ვაანალიზებდი და ვასწორებდი ტექნიკურ და ვიზუალურ (UI/UX) ხარვეზებს Chrome DevTools-ის გამოყენებით გუნდთან თანამშრომლობით.',
        'ვიყენებდი Git-ს ვერსიების კონტროლისთვის; გამომიმუშავდა სისტემური მიდგომა პროგრამული ბაგების მიზეზების (Root Cause) დასადგენად.'
      ]
    },
    {
      role: 'სავალდებულო სამხედრო სამსახური',
      company: 'საქართველოს თავდაცვის ძალები',
      period: '2025 – 2026',
      type: 'Discipline & Teamwork',
      highlights: [
        'წარმატებით გავიარე სამსახური მაღალი პასუხისმგებლობისა და დისციპლინის მქონე გუნდურ გარემოში.',
        'სტრესულ სიტუაციებში სიმშვიდის შენარჩუნება და დავალებების მკაცრ ვადებში უშეცდომოდ შესრულება.'
      ]
    },
    {
      role: 'SMM მენეჯერი (ციფრული კომუნიკაცია)',
      company: 'დამოუკიდებელი პროექტები',
      period: '2023 – 2025',
      type: 'Communication',
      highlights: [
        'ვმართავდი ციფრულ არხებს, ვაანალიზებდი მომხმარებელთა უკუკავშირს/პრობლემებს და ვუზრუნველყოფდი დროულ რეაგირებას.',
        'დამოუკიდებლად ვგეგმავდი სამუშაო პროცესს ვადებისა და პრიორიტეტების დაცვით.'
      ]
    }
  ];

  education = [
    {
      title: 'QA (Quality Assurance) ტესტირების ინტენსიური კურსი',
      institution: 'Udemy & YouTube (დამოუკიდებელი სწავლა)',
      period: '2026 – მიმდინარე',
      details: 'ISTQB Foundation სტანდარტები, Manual ტესტირება, Test Cases & Checklists, Jira Bug Reporting, Postman API ტესტირება და SQL.'
    },
    {
      title: 'Full-Stack Web Development & CompTIA A+',
      institution: 'IT STEP Academy Georgia',
      period: '03.2023 – 05.2025',
      details: 'სერტიფიცირებული კურსი (05.2023): ვებ-ტექნოლოგიები (Angular, TS/JS, C#, .NET, SQL) და CompTIA A+ (კომპიუტერული არქიტექტურა, Windows OS, ქსელების საფუძვლები, ტროუბლშუთინგი).'
    }
  ];

  get filteredTickets(): JiraTicket[] {
    if (this.selectedSeverity === 'ALL') {
      return this.jiraTickets;
    }
    return this.jiraTickets.filter(t => t.severity === this.selectedSeverity);
  }

  openTicketModal(ticket: JiraTicket): void {
    this.activeTicket = ticket;
  }

  closeTicketModal(): void {
    this.activeTicket = null;
  }
}