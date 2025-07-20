import { Component, output } from '@angular/core';

@Component({
  selector: 'app-pod',
  imports: [],
  templateUrl: './pod.html',
  styleUrl: './pod.scss',
})
export class Pod {
  protected select = output<void>();
}
