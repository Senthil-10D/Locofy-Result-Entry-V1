import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "icon",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Icon.component.html",
  styleUrls: ["./Icon.component.css"],
})
export class Icon {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() vector: string = "";
  /** Variant props */
  @Input() property1:
    | "patient chart"
    | "Whodunit"
    | "viewprint draft"
    | "computevalidate"
    | "Modify"
    | "notify"
    | "Attach Img-Blue" = "Comment";
}
