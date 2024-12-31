import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { FrameComponent } from "../FrameComponent/FrameComponent.component";
@Component({
  selector: "patient-details",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FrameComponent],
  templateUrl: "./PatientDetails.component.html",
  styleUrls: ["./PatientDetails.component.css"],
})
export class PatientDetails {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() property1: string = "Variant3";
}
