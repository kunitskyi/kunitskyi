import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import {
  FeatureView,
  FormattedLinePart,
  OutputLine,
  TerminalLine,
} from '@app/types';
import { UserLineComponent } from './user-line/user-line.component';
import { FormsModule } from '@angular/forms';
import { TranslocoService } from '@jsverse/transloco';
import { LanguageHelper } from '@app/helpers';

@Component({
  selector: 'kun-terminal',
  standalone: true,
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  imports: [UserLineComponent, FormsModule],
})
export class TerminalComponent {
  @HostBinding('class') private get getClasses() {
    return {
      Page: this.view === FeatureView.Page,
      Code: this.view === FeatureView.Code,
    };
  }
  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    if (e.target === this.elementRef.nativeElement) this.focusToInput();
  }

  @ViewChild('input') inputRef?: ElementRef;

  @Input({ required: true }) view!: FeatureView;

  protected outputLines: OutputLine[] = [];
  protected isUserInputLineShown = true;
  protected userInput = '';

  public constructor(
    private elementRef: ElementRef,
    private translocoService: TranslocoService,
    private languageHelper: LanguageHelper,
  ) {}

  protected async sendCommand() {
    const addLine = (
      value: FormattedLinePart[],
      type: TerminalLine = 'output',
    ) => {
      for (const index in value) {
        if (value[index].translate)
          value[index].text = this.translocoService.translate(
            value[index].text,
          );
      }

      this.outputLines = [
        ...this.outputLines,
        {
          id: this.outputLines.length,
          type,
          value,
        },
      ];
    };

    let bufferedUserInput = this.userInput.trim();

    addLine(
      [{ class: '', text: bufferedUserInput, translate: false }],
      'input',
    );

    bufferedUserInput = bufferedUserInput.toLocaleLowerCase();

    if (bufferedUserInput !== '') {
      switch (bufferedUserInput) {
        case 'clear': {
          this.outputLines = [];
          break;
        }
        case 'help': {
          const descriptionStyle = 'bold';
          const commandStyle = `bold blue`;
          addLine([
            {
              class: 'blue bold',
              text: 'terminal.output.help.header',
              translate: true,
            },
          ]);
          addLine([
            { class: commandStyle, text: 'help ', translate: false },
            {
              class: descriptionStyle,
              text: 'terminal.output.help.help',
              translate: true,
            },
          ]);
          addLine([
            { class: commandStyle, text: 'clear ', translate: false },
            {
              class: descriptionStyle,
              text: 'terminal.output.help.clear',
              translate: true,
            },
          ]);
          addLine([
            { class: commandStyle, text: 'toggle-language ', translate: false },
            {
              class: descriptionStyle,
              text: 'terminal.output.help.toggle-language',
              translate: true,
            },
          ]);
          addLine([
            { class: commandStyle, text: 'hack ', translate: false },
            {
              class: descriptionStyle,
              text: 'terminal.output.help.hack',
              translate: true,
            },
          ]);
          break;
        }
        case 'toggle-language': {
          addLine([
            {
              class: 'green bold',
              text: 'terminal.output.toggle-language',
              translate: true,
            },
          ]);
          this.languageHelper.setLanguage(
            this.translocoService.getActiveLang() === 'en' ? 'ua' : 'en',
          );
          break;
        }
        case 'hack': {
          addLine([
            {
              class: 'orange bold',
              text: 'terminal.output.hack',
              translate: true,
            },
          ]);
          break;
        }
        default: {
          addLine([
            {
              class: 'red bold',
              text: 'terminal.output.unknownCommand',
              translate: true,
            },
          ]);
          break;
        }
      }
    }

    this.isUserInputLineShown = false;
    this.userInput = '';

    this.isUserInputLineShown = true;

    this.scrollTerminalToBottom();
  }

  protected focusToInput() {
    this.inputRef?.nativeElement.focus();
  }

  private scrollTerminalToBottom() {
    setTimeout(() => {
      this.elementRef.nativeElement.scroll(
        0,
        this.elementRef.nativeElement.scrollHeight,
      );
    }, 0);
  }
}
