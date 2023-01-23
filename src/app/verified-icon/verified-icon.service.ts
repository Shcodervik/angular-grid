import { Injectable } from '@angular/core';
import { ALIGN, ANCOR_MIDDLE, BASELINE_CENTRAL, VERIFIED_COLOR, VERIFIED_NS, VERIFIED_OPACITY, VERIFIED_PATH, VERIFIED_TEXT_COLOR } from '@app/constants/verified';

@Injectable({
  providedIn: 'root'
})
export class VerifiedIconService {

  constructor() { }

  createDefaultVerifiedIcon(): SVGElement {
    const iconSvg = document.createElementNS(VERIFIED_NS, 'svg');
    const iconPath = document.createElementNS(VERIFIED_NS, 'path');
    iconSvg.setAttribute('width', '24');
    iconSvg.setAttribute('fill', 'none');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconSvg.classList.add('verified-icon');
    iconPath.setAttribute(
      'd',
      VERIFIED_PATH
    );
    iconPath.setAttribute("fill", VERIFIED_COLOR);
	  iconPath.setAttribute("fill-opacity", VERIFIED_OPACITY);
    iconSvg.appendChild(iconPath);
    return iconSvg as SVGElement;
  }

  addTextToVerifiedIcon(text: string): SVGElement|undefined {
    const iconSvg = this.createDefaultVerifiedIcon();
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    iconPath.textContent = text;
    iconPath.setAttribute("x", ALIGN);
    iconPath.setAttribute("y", ALIGN);
    iconPath.setAttribute("dominant-baseline", BASELINE_CENTRAL);
    iconPath.setAttribute("text-anchor", ANCOR_MIDDLE);
    iconPath.setAttribute("fill", VERIFIED_TEXT_COLOR);
    iconSvg?.appendChild(iconPath);
    return iconSvg;
  }

}
