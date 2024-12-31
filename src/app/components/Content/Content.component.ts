import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { BackButten } from "../BackButten/BackButten.component";
import { Icon } from "../Icon/Icon.component";
@Component({
  selector: "content",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BackButten, Icon],
  templateUrl: "./Content.component.html",
  styleUrls: ["./Content.component.css"],
})
export class Content {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
