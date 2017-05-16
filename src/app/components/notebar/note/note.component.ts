import { Component, Input } from '@angular/core';


@Component({
  selector: 'note-block',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  inputs: ['title', 'content']
})

export class NoteComponent {
  title: string;
  content: string;
}
