import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal <IKnowledge[]>([
    {
      src: 'assets/knowledge/icons/html5Icon.svg',
      alt: 'Icone HTML5',
    },
    {
      src: 'assets/knowledge/icons/cssIcon.svg',
      alt: 'Icone CSS',
    },
    {
      src: 'assets/knowledge/icons/angularIcon.svg',
      alt: 'Icone Angular',
    },
    {
      src: 'assets/knowledge/icons/reactIcon.svg',
      alt: 'Icone React',
    },
    {
      src: 'assets/knowledge/icons/javascriptIcon.svg',
      alt: 'Icone Javascript',
    },
  ]);
}
