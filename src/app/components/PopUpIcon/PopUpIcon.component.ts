import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "pop-up-icon",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./PopUpIcon.component.html",
  styleUrls: ["./PopUpIcon.component.css"],
})
export class PopUpIcon {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
