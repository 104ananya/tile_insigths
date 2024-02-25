import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {
  @Input() videoName!: string;
  @Input() channelName!: string;
  @Input() views!: string;
  @Input() likes!: number;
  @Input() engagement!: number;
  @Input() comments!: number;
  @Input() videoUrl!: string;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
