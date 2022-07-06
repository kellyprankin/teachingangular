import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-music-container',
  templateUrl: './music-container.component.html',
  styleUrls: ['./music-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicContainerComponent implements OnInit {
  songs$!: Observable<string[]>;
  // consider adding lag time to the observable
  constructor() {}

  ngOnInit(): void {
    this.songs$ = of(['Poker Face', 'You Belong With Me']);
  }
}
