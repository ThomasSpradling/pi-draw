export const DEFAULT_COLORS: { twValue: string; hexValue: string }[] = [
  {
    twValue: 'bg-red-400',
    hexValue: '#ef5350',
  },
  {
    twValue: 'bg-violet-400',
    hexValue: '#ab47bc',
  },
  {
    twValue: 'bg-orange-400',
    hexValue: '#ffa726',
  },
  {
    twValue: 'bg-green-400',
    hexValue: '#66bb6a',
  },
  {
    twValue: 'bg-blue-400',
    hexValue: '#42a5f5',
  },
];

export enum Tool {
  Pen = 1,
  Eraser,
}

export interface Drawing {
  fps?: number;
  frames: number[][][];
}
