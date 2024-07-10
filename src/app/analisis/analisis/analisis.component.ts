import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent {
  @ViewChild('iframeRef', { static: true }) iframeRef: ElementRef | undefined;
}
