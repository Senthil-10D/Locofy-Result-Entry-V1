import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./FrameComponent.component.html",
  styleUrls: ["./FrameComponent.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() patientID: string = "";
  @Input() patientIDSeparators: string = "";
  /** Variant props */
  @Input() property1: string = "Variant3";
  /** Style props */
  @Input() frameDivBorderRight: string | number = "";
  @Input() patientIDTextDecoration: string | number = "";
  @Input() patientIDFontWeight: string | number = "";

  get frameDivStyle() {
    return {
      "border-right": this.frameDivBorderRight,
    };
  }

  get patientIDStyle() {
    return {
      "text-decoration": this.patientIDTextDecoration,
      "font-weight": this.patientIDFontWeight,
    };
  }
}
