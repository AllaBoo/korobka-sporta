export interface IEvent {
  name: string;
  description: string;
  image: string;
  imagePosition: 'top' | 'bottom' | 'center';
  link: string;
  CTA: string;
  date: string;
  id: number;
}
export interface ICTA {
  text: string;
  link: string;
  label: string;
}
export interface ISport {
  title: string;
  description: string;
  image: string;
  level: string;
}
