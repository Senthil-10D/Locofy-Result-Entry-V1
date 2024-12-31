import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "button-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Button.component.html",
  styleUrls: ["./Button.component.css"],
})
export class Button {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() cancel: string = "";
}
