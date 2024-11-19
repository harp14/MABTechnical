import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-three-row-textbox',
  standalone: true,
  imports: [],
  templateUrl: './three-row-textbox.component.html',
  styleUrl: './three-row-textbox.component.css'
})
export class ThreeRowTextboxComponent {
  @Input() titleRow: string = '';
  @Input() secondRow: string = '';
  @Input() thirdRow: string = '';
  @Input() link: string = '';
}
