export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details?: string[];
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NewsItem {
  title: string;
  url: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}