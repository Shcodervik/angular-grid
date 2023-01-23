export interface Measurement {
  id: number;
  date: string;
  time: string;
  source: string;
  phase: string;
  voltage?: number;        //напряжение
  amperage?: number;       //сила тока
  truePower?: number;      //истинная мощность
  reactivePower?: number;  //реактивная мощность
  cos?: number;
  checked?: string;
  svg?: string;
}
