import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";
import { HeaderComponent } from "../header/header.component";


@Component({
    selector: 'app-skillchat',
    standalone: true,
    templateUrl: './skillchat.component.html',
    styleUrl: './skillchat.component.css',
    imports: [AsideComponent, HeaderComponent]
})
export class SkillchatComponent {
}

