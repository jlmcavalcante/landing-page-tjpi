import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { diasData } from './data/dia-data';
import { speakersData } from './data/speakers-data';
import { Dia } from './models/dia';
import { Speakers } from './models/speakers';


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, AfterViewInit {
  showAll: boolean = false;
  warningText: string = '';
  speakersToShow: number = 4;
  gridCols: number = 4;

  speakers: Speakers[] = speakersData;

  dias: Dia[] = diasData;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.warningText = "A programação do evento está sujeita a alterações. Novidades em breve!";
  }
  ngAfterViewInit(): void {
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 70; // Ajustar conforme a altura do cabeçalho
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          this.smoothScrollTo(offsetPosition, 500);
        }
      });
    });
  }

  ngOnInit(): void {
    this.setGridCols(window.innerWidth);
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }

  smoothScrollTo(targetY: number, duration: number) {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextStep = easeInOutQuad(timeElapsed, startY, difference, duration);
      window.scrollTo(0, nextStep);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setGridCols(event.target.innerWidth);
  }

  setGridCols(width: number) {
    if (width <= 768) {
      this.gridCols = 1;
    } else {
      this.gridCols = 4;
    }
  }
}
