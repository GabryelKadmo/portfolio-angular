import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Curso completo de APIs com Nodejs, Express + MongoDB, SQL',
        p: 'jan. de 2024',
      },
      text: 'Neste curso, aprendi a criar APIs utilizando Node.js e Express, integrando bancos de dados MongoDB e SQL. Adquiri habilidades para desenvolver aplicações backend robustas, com autenticação, validação de dados e manipulação de banco de dados.',
    },
    {
      summary: {
        strong: 'React Js com TypeScript do zero ao avançado na prática',
        p: 'jan. de 2024',
      },
      text: 'Neste curso, aprendi a utilizar React.js com TypeScript, criando aplicações web desde o básico até técnicas avançadas. Desenvolvi habilidades em componentes funcionais, hooks, gerenciamento de estado e integração com APIs, aplicando boas práticas de desenvolvimento e tipagem estática.',
    },
    {
      summary: {
        strong: 'Desenvolvendo um Protótipo de uma Lista de Tarefas',
        p: '18 de Maio de 2024',
      },
      text: 'Nesta atividade de extensão, participei do desenvolvimento de um protótipo de uma lista de tarefas. Aprendi a aplicar conceitos de design e implementação prática de funcionalidades essenciais, aprimorando minhas habilidades em desenvolvimento de software e trabalho colaborativo.',
    },
    {
      summary: {
        strong: 'Criando uma API de lista de tarefas com Nest.js e MongoDB',
        p: '01 de Junho de 2024',
      },
      text: 'Nesta atividade de extensão, aprendi a criar uma API de lista de tarefas utilizando Nest.js e MongoDB. Desenvolvi habilidades em arquitetura de aplicações backend, integração com banco de dados NoSQL e implementação de funcionalidades RESTful.',
    },
    {
      summary: {
        strong: 'Consumindo API de Lista de Tarefas',
        p: '08 de Junho de 2024',
      },
      text: 'Nesta atividade de extensão, aprendi a consumir APIs de lista de tarefas, integrando frontend com backend. Adquiri conhecimentos em requisições HTTP, manipulação de dados no frontend e boas práticas de consumo de APIs.',
    },
    {
      summary: {
        strong: 'Programação para internet com JavaScript',
        p: 'out. de 2022',
      },
      text: 'Neste curso, aprendi os fundamentos de JavaScript para desenvolvimento web, incluindo manipulação do DOM, eventos, funções assíncronas e integração com APIs. Desenvolvi habilidades para criar páginas interativas e dinâmicas, aplicando boas práticas de programação.',
    },
    {
      summary: {
        strong: 'Introdução ao Git e ao GitHub',
        p: 'ago. de 2022',
      },
      text: 'Neste curso, aprendi os conceitos básicos de controle de versão utilizando Git e GitHub. Adquiri habilidades para criar repositórios, realizar commits, branches, merges, e colaborar em projetos através de pull requests, facilitando o trabalho em equipe e o gerenciamento de código.',
    },
    // {
    //   summary: {
    //     strong: '',
    //     p: '',
    //   },
    //   text: '',
    // },
    {
      summary: {
        strong: 'Projeto Versa - E-Commerce utilizando React e TypeScript',
        p: 'Setembro de 2023',
      },
      text: 'Desenvolvido durante a disciplina de Gestão de Projetos, o projeto Versa teve como objetivo criar um sistema utilizando a metodologia ágil Scrum. Utilizamos React e TypeScript para o frontend, MongoDB como banco de dados, e Python para o desenvolvimento das APIs. Foi uma oportunidade de aplicar práticas modernas de desenvolvimento e colaboração em equipe.',
    },
    {
      summary: {
        strong:
          'Bacharelado, Desenvolvimento de Software/Sistemas de informação',
        p: 'jan. de 2021 - nov. de 2024',
      },
      text: 'Quatro anos que se passaram rapidamente e aprendizados que levarei para a vida toda.',
    },
  ]);
}
