import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "taps-butten",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./TapsButten.component.html",
  styleUrls: ["./TapsButten.component.css"],
})
export class TapsButten {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() specimenDetails: string = "";
  /** Variant props */
  @Input() property1: "Active" | "Normal" = "Active";
}
