import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { PopUpIcon } from "../PopUpIcon/PopUpIcon.component";
@Component({
  selector: "trial",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [PopUpIcon],
  templateUrl: "./Trial.component.html",
  styleUrls: ["./Trial.component.css"],
})
export class Trial {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
