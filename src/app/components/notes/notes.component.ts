import { Component, Input } from '@angular/core';
import { NoteComponent } from '../note/note.component';
declare let jguery: any;
declare let $: any;

@Component({
  selector: 'notes-section',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent {
  @Input() title: string;
  @Input() content: string;
  public show: boolean = false;
  public notes: Array<Object> = [
    {title: 'Write a Task!', content: 'Your first task is to create a task, irionic, huh?'}
  ]

  showControls() {
    this.show = true;
  }

  addNote() {
    this.show = false;
    this.notes.push({
      title: this.title || '',
      content: this.content || ''
    });
  }

}
