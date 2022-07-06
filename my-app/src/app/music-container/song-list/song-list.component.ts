import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongListComponent implements OnInit {
  @Input() songList: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.songList);
  }
}
