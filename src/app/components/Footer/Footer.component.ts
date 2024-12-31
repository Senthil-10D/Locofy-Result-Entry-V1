import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Button } from "../Button/Button.component";
@Component({
  selector: "footer-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Button],
  templateUrl: "./Footer.component.html",
  styleUrls: ["./Footer.component.css"],
})
export class Footer {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
