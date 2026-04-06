import { Channel, Program } from './types';

export const CHANNELS: Channel[] = [
  { id: 1, name: "TF1", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/43/TF1_logo_2013.svg", url: "https://www.tf1.fr/tf1/direct", color: "#0055a4" },
  { id: 2, name: "France 2", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/02/France_2_logo_2018.svg", url: "https://www.france.tv/france-2/direct.html", color: "#e2001a" },
  { id: 3, name: "France 3", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/45/France_3_logo_2018.svg", url: "https://www.france.tv/france-3/direct.html", color: "#009640" },
  { id: 4, name: "Canal+", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/bc/Canal%2B_logo.svg", url: "https://www.canalplus.com/direct", color: "#000000" },
  { id: 5, name: "France 5", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b0/France_5_logo_2018.svg", url: "https://www.france.tv/france-5/direct.html", color: "#00a9e0" },
  { id: 6, name: "M6", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/af/M6_logo_2009.svg", url: "https://www.6play.fr/m6/direct", color: "#e2001a" },
  { id: 7, name: "Arte", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/61/Arte_logo_2017.svg", url: "https://www.arte.tv/fr/direct/", color: "#ff5000" },
  { id: 8, name: "C8", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b0/C8_logo_2016.svg", url: "https://www.canalplus.com/chaines/c8", color: "#000000" },
  { id: 9, name: "W9", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e0/W9_logo_2018.svg", url: "https://www.6play.fr/w9/direct", color: "#6e2585" },
  { id: 10, name: "TMC", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b2/TMC_logo_2016.svg", url: "https://www.tf1.fr/tmc/direct", color: "#e2001a" },
  { id: 11, name: "TFX", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b1/TFX_logo_2018.svg", url: "https://www.tf1.fr/tfx/direct", color: "#e2001a" },
  { id: 12, name: "NRJ 12", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/NRJ_12_logo_2015.svg", url: "https://www.nrj-play.fr/nrj12/direct", color: "#e2001a" },
  { id: 13, name: "LCP", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a6/LCP_logo_2019.svg", url: "https://lcp.fr/direct", color: "#003366" },
  { id: 14, name: "France 4", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b3/France_4_logo_2018.svg", url: "https://www.france.tv/france-4/direct.html", color: "#9b2242" },
  { id: 15, name: "BFM TV", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/d4/BFM_TV_logo_2019.svg", url: "https://www.bfmtv.com/en-direct/", color: "#004a99" },
  { id: 16, name: "CNews", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b5/CNews_logo_2017.svg", url: "https://www.canalplus.com/chaines/cnews", color: "#000000" },
  { id: 17, name: "CStar", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/d9/CStar_logo_2016.svg", url: "https://www.canalplus.com/chaines/cstar", color: "#000000" },
  { id: 18, name: "Gulli", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4e/Gulli_logo_2019.svg", url: "https://www.gulli.fr/Direct", color: "#8dc63f" },
  { id: 20, name: "TF1 Séries Films", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b3/TF1_S%C3%A9ries_Films_logo_2018.svg", url: "https://www.tf1.fr/tf1-series-films/direct", color: "#e2001a" },
  { id: 21, name: "L'Équipe", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/33/L%27%C3%89quipe_logo_2012.svg", url: "https://www.lequipe.fr/tv/direct", color: "#e2001a" },
  { id: 22, name: "6ter", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1a/6ter_logo_2012.svg", url: "https://www.6play.fr/6ter/direct", color: "#e2001a" },
  { id: 23, name: "RMC Story", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b3/RMC_Story_logo_2018.svg", url: "https://www.rmcstory.fr/direct", color: "#e2001a" },
  { id: 24, name: "RMC Découverte", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b3/RMC_D%C3%A9couverte_logo_2018.svg", url: "https://www.rmcdecouverte.fr/direct", color: "#e2001a" },
  { id: 25, name: "Chérie 25", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/Ch%C3%A9rie_25_logo_2015.svg", url: "https://www.nrj-play.fr/cherie25/direct", color: "#e2001a" },
  { id: 26, name: "LCI", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/02/LCI_logo_2016.svg", url: "https://www.tf1.fr/lci/direct", color: "#e2001a" },
  { id: 27, name: "France Info", logo: "https://wsrv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2c/France_Info_logo_2016.svg", url: "https://www.francetvinfo.fr/en-direct/tv.html", color: "#ffcc00" },
];

const generateMockPrograms = (): Program[] => {
  const programs: Program[] = [];
  const today = new Date();
  const categories = ["Information", "Cinéma", "Série", "Sport", "Documentaire", "Divertissement"];
  const titles = [
    "Le Journal de 20h", "Film Cyberpunk 2077", "Série: Night City Stories", 
    "Sport: Cyber-Rugby", "Doc: L'IA du futur", "Jeu: Qui veut gagner des crédits ?",
    "Météo de la Zone", "Talk: Le Talk du Futur", "Concert: Neon Beats"
  ];

  for (let d = 0; d < 7; d++) {
    const date = new Date(today);
    date.setDate(today.getDate() + d);
    const dateStr = date.toISOString().split('T')[0];

    CHANNELS.forEach(channel => {
      // Morning
      programs.push({
        id: `p-morning-${channel.id}-${dateStr}`,
        channelId: channel.id,
        title: "Matinée Cyber",
        startTime: "08:00",
        endTime: "10:00",
        date: dateStr,
        category: "Divertissement",
        description: "Commencez votre journée avec les dernières news du réseau."
      });

      // Afternoon
      programs.push({
        id: `p-afternoon-${channel.id}-${dateStr}`,
        channelId: channel.id,
        title: titles[Math.floor(Math.random() * titles.length)],
        startTime: "14:00",
        endTime: "16:00",
        date: dateStr,
        category: categories[Math.floor(Math.random() * categories.length)],
        description: "Un programme captivant pour votre après-midi."
      });

      // Evening (Prime Time)
      programs.push({
        id: `p-prime-${channel.id}-${dateStr}`,
        channelId: channel.id,
        title: titles[Math.floor(Math.random() * titles.length)],
        startTime: "21:00",
        endTime: "23:00",
        date: dateStr,
        category: categories[Math.floor(Math.random() * categories.length)],
        description: "Le grand rendez-vous de la soirée sur votre canal préféré."
      });

      // Late night
      programs.push({
        id: `p-late-${channel.id}-${dateStr}`,
        channelId: channel.id,
        title: "Rediffusion Nocturne",
        startTime: "23:30",
        endTime: "01:30",
        date: dateStr,
        category: "Cinéma",
        description: "Pour les insomniaques du futur."
      });
    });
  }
  return programs;
};

export const MOCK_PROGRAMS: Program[] = generateMockPrograms();
