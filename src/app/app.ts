import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected aboutVideoPlaying = false;

  protected readonly currentYear = new Date().getFullYear();

  protected readonly whatsappUrl =
    'https://wa.me/5516981880435?text=Ol%C3%A1%20Myrella!%20Gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20personalizado.';

  protected readonly credentials = [
    'Mais de 8 anos de experiência',
    'Formação e especialização pela UFSCar',
    'Planejamento 100% individualizado',
    'Atendimento para todas as idades',
  ];

  protected readonly audiences = [
    {
      title: 'Crianças',
      description:
        'Desenvolvimento motor, coordenação e criação de hábitos saudáveis desde cedo.',
      icon: 'child',
    },
    {
      title: 'Adolescentes',
      description:
        'Fortalecimento, melhora da postura, condicionamento físico e mais confiança.',
      icon: 'teen',
    },
    {
      title: 'Adultos',
      description:
        'Emagrecimento, ganho de massa muscular, condicionamento físico e melhora da saúde.',
      icon: 'adult',
    },
    {
      title: 'Terceira idade',
      description:
        'Mais autonomia, equilíbrio, mobilidade e qualidade de vida para o dia a dia.',
      icon: 'senior',
    },
  ];

  protected playAboutVideo(video: HTMLVideoElement): void {
    this.aboutVideoPlaying = true;
    void video.play();
  }

  protected readonly pillars = [
    {
      title: 'Avaliação individual',
      description:
        'Entendo seus objetivos, rotina, experiência e necessidades antes de montar qualquer planejamento.',
    },
    {
      title: 'Treino personalizado',
      description:
        'Seu programa é desenvolvido exclusivamente para você, respeitando seu momento e suas metas.',
    },
    {
      title: 'Acompanhamento próximo',
      description:
        'Orientação constante para garantir segurança, evolução e execução correta dos exercícios.',
    },
    {
      title: 'Base científica',
      description:
        'Toda a prescrição é fundamentada em evidências científicas e nos princípios do treinamento de força.',
    },
  ];
}
