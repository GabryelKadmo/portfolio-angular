import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject( MatDialog );
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/projects/versaLogo.png',
      alt: ' Versa logo',
      title: 'Versa',
      width: '100px',
      height: '51px',
      description:
        ' Este projeto foi desenvolvido durante a disciplina de Gestão de Projetos, cujo objetivo era criar um sistema utilizando a metodologia ágil Scrum. Nossa equipe optou por desenvolver um E-Commerce usando React e TypeScript, MongoDB como banco de dados, e Python para o desenvolvimento das APIs. ',
      links: [
        {
          name: 'Conheça a aplicação',
          href: 'https://onlineversa.vercel.app',
        },
      ],
    },
    {
      src: 'assets/projects/whisky_and_blues.png',
      alt: 'Whisky and Blues logo',
      title: 'Whisky and Blues',
      width: '100px',
      height: '51px',
      description:
        'Whisky and Blues é a aplicação definitiva para os amantes de whisky. Descubra, gerencie e explore uma vasta coleção de whiskies, cada um com sua descrição detalhada e história única. Aprecie a arte do whisky com informações sobre sabores, aromas, e harmonizações perfeitas.',
      links: [
        {
          name: 'Conheça a aplicação',
          href: 'https://landing-page-whisky.vercel.app',
        },
      ],
    },
    {
      src: 'assets/projects/ColorHarmonyLogo.png',
      alt: 'Color Harmony logo',
      title: 'Color Harmony',
      width: '100px',
      height: '51px',
      description:
        'Color Harmony é uma aplicação inovadora para tornar a navegação na web mais acessível para pessoas com problemas de visão. Com base nas respostas de um formulário de 4 perguntas, a aplicação ajusta automaticamente as páginas web para atender às necessidades individuais de cada usuário, aplicando modos como dark mode, aumento de fonte, e modo daltônico. Experimente uma web mais inclusiva e personalizada com o Color Harmony.',
      links: [
        {
          name: 'Conheça a ferramenta',
          href: 'https://color-harmony.vercel.app/login',
        },
      ],
    },
  ]);

  public openDialog( data: IProjects ) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
}
}
