export interface Channel {
  id: number;
  name: string;
  logo: string;
  url: string;
  color: string;
}

export interface Program {
  id: string;
  channelId: number;
  title: string;
  startTime: string;
  endTime: string;
  date: string; // YYYY-MM-DD
  category: string;
  description: string;
  image?: string;
}
