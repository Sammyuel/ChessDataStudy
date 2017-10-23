import { Pipe} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({name: 'safeResourceUrl'})
export class SafeResourceUrl {
  constructor(private sanitizer: DomSanitizer){}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}