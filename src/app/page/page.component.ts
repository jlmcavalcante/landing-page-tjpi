import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Palestra {
  horario: string;
  titulo: string;
  participantes: string[];
  palestrante?: string;
}

interface Dia {
  label: string;
  palestras: Palestra[];
}

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

  speakers = [
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
    {
      name: 'Lorem ipsum',
      title: 'Lorem ipsum dolor sit amet',
      photo: '../assets/images/generic-person.png',
    },
  ];

  dias: Dia[] = [
    {
      label: 'SEGUNDA-FEIRA - 01 DE SETEMBRO',
      palestras: [
        {
          horario: '09:00 - 09:30',
          titulo: 'Registro e recepção dos participantes',
          participantes: [],
        },
        {
          horario: '09:30 - 10:00',
          titulo: 'Abertura Oficial do Fórum',
          participantes: [],
        },
        {
          horario: '10:30 - 11:30',
          titulo:
            'Palestra de Abertura: "Inovação: Desafios e Oportunidades para o Judiciário Piauiense"',
          palestrante: 'Gláucia Guarcello',
          participantes: [],
        },
        {
          horario: '14:00 - 14:50',
          titulo:
            'Painel: "Ética e Privacidade no Uso de Tecnologias no Âmbito Jurídico"',
          participantes: [
            'Dr. Nazareno Reis - Juiz Federal',
            'Advogado indicado pela OAB especializado em Direito Digital',
            'Raimundo Neto - Gestor de Segurança da ETIPI',
          ],
        },
        {
          horario: '15:00 - 15:50',
          titulo:
            'Palestra: Blockchain e a imutabilidade de dados: Garantindo a autenticidade e a confiabilidade de atos jurídicos',
          palestrante: 'Dr. Thiago Aleluia',
          participantes: [],
        },
        {
          horario: '16:20 - 17:20',
          titulo:
            'Palestra: Como liderar com propósito e Impacto na Era da IA: os desafios e as oportunidades para os líderes do futuro',
          palestrante: 'Leandro Matos',
          participantes: [],
        },
        {
          horario: '17:30 - 18:30',
          titulo: 'Happy Hour (música e coquetel)',
          participantes: [],
        },
      ],
    },
    {
      label: 'TERÇA-FEIRA - 02 DE SETEMBRO',
      palestras: [
        {
          horario: '08:30',
          titulo: 'Abertura',
          participantes: [],
        },
        {
          horario: '08:50 - 09:30',
          titulo: 'Painel: Tecnologias Emergentes e Disrupção no Judiciário',
          participantes: [
            'Dr. Clayton Athaide - Secretário da STIC-TJPI',
            'Dr. Marcelo Mesquita - Juiz do TJ',
            'Dr. Maurício Machado - Presidente da AMAPI',
          ],
        },
        {
          horario: '09:30 - 10:00',
          titulo:
            'Palestra: "Humanizando a Justiça: Aplicando Design Thinking para Melhorar a Experiência do Usuário no Sistema Judiciário"',
          palestrante: 'Alguém TRT',
          participantes: [],
        },
        {
          horario: '10:20 - 11:00',
          titulo:
            'Painel: Inovação Aberta e Colaboração: O papel da colaboração entre empresas, startups, universidades e governos no estímulo à inovação',
          participantes: [
            'Washington Bandeira - Secretário de Educação',
            'Victor Hugo - Invest Piauí',
            'Ellen Gera - Presidente da ETIPI',
            'André Macedo - Gestor da Secretaria de Inteligência Artificial',
          ],
        },
        {
          horario: '11:00 - 12:00',
          titulo:
            'Palestra: Impacto da IA nas habilidades humanas e no emprego',
          palestrante: 'Diogo Cortiz',
          participantes: [],
        },
        {
          horario: '14:30 - 15:00',
          titulo:
            'Palestra: A Justiça na Era digital e seus principais desafios',
          palestrante: 'Ministro Kássio Nunes',
          participantes: [],
        },
        {
          horario: '15:00 - 15:50',
          titulo: 'Painel: Tecnologias Emergentes e o Futuro da Advocacia',
          participantes: [
            'Dr. Celso Barros - Presidente da OAB',
            'Representante de Empresa de software',
            'Dra. Isabela Paranaguá',
          ],
        },
        {
          horario: '16:10 - 17:00',
          titulo: 'Painel: Inovação e Educação Jurídica',
          participantes: [
            'Horácio Neiva - Professor do ICEV',
            'Dimmy Magalhães - Doutor em Inteligência Artificial',
            'Dra. Melissa - Juíza',
          ],
        },
        {
          horario: '17:00 - 18:00',
          titulo: 'Tema a Definir',
          palestrante: 'João Kepler',
          participantes: [],
        },
      ],
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.warningText = "A programação do evento ainda está sendo definida. Fique atento para mais novidades em breve!";
  }
  ngAfterViewInit(): void {
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 70; // Ajustar conforme a altura do seu cabeçalho
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          this.smoothScrollTo(offsetPosition, 1000); // 1000ms para duração da rolagem
        }
      });
    });
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      if (result.matches) {
        this.speakersToShow = 4;
        this.gridCols = 2;
      } else {
        this.speakersToShow = 4;
        this.gridCols = 4;
      }
    });
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
}
