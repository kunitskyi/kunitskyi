export type TerminalLine = 'input' | 'output';

export interface FormattedLinePart<T> {
  class: T;
  text: string;
  translate: boolean;
}

export type FormattedLine<T> = FormattedLinePart<T>[];

export type TerminalLineClass =
  | 'bold'
  | 'red'
  | 'green'
  | 'blue'
  | 'orange'
  | 'bg-red'
  | 'bg-green'
  | 'bg-blue'
  | 'bg-orange';

export type TerminalLineClasses = TerminalLineClass[];

export type FormattedOutputLine = FormattedLine<TerminalLineClasses>;
export interface OutputLine {
  id: number;
  type: TerminalLine;
  value: FormattedOutputLine;
}
