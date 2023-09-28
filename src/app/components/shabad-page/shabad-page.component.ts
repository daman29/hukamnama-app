import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shabad } from 'src/app/interfaces/shabad.interface';
import { HukamnamaService } from 'src/app/services/hukamnama.service';

@Component({
  standalone: true,
  selector: 'shabad-page',
  templateUrl: './shabad-page.component.html',
  styleUrls: ['./shabad-page.component.scss'],
  imports: [RouterModule],
})
export class ShabadPageComponent implements OnInit {
  private hukamnamaService = inject(HukamnamaService);

  shabad: Shabad | null = null;

  ngOnInit(): void {
    this.shabad = this.hukamnamaService.shabad;
    console.log(this.shabad);
  }
}
