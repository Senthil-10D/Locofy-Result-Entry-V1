import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Icon } from "../Icon/Icon.component";
@Component({
  selector: "investigation-item",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Icon],
  templateUrl: "./InvestigationItem.component.html",
  styleUrls: ["./InvestigationItem.component.css"],
})
export class InvestigationItem {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
