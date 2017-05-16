import { Component, Input } from '@angular/core';


@Component({
  selector: 'note-block',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent {
  @Input() title: string;
  @Input() content: string;
}
