export type TerminalLine = 'input' | 'output';

export interface FormattedLinePart {
  class: string;
  text: string;
  translate: boolean;
}

export interface OutputLine {
  id: number;
  type: TerminalLine;
  value: FormattedLinePart[];
}
