import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Shabad } from 'src/app/interfaces/shabad.interface';
import { HukamnamaService } from 'src/app/services/hukamnama.service';

@Component({
  standalone: true,
  selector: 'hukamnama-page',
  templateUrl: './hukamnama-page.component.html',
  styleUrls: ['./hukamnama-page.component.scss'],
  imports: [ReactiveFormsModule],
})
export class HukamnamaPageComponent {
  private hukamnamaService = inject(HukamnamaService);
  private router = inject(Router);

  pageForm = new FormControl<number | null>(null, {
    validators: [Validators.required],
  });

  async getPage() {
    const ang = this.pageForm.value;

    if (ang) {
      const shabadId = await this.hukamnamaService.getFirstShabad(ang);
      const shabad: Shabad = await this.hukamnamaService.getShabad(shabadId);

      this.hukamnamaService.shabad = shabad;

      this.router.navigateByUrl('/hukamnama');
    }
  }
}
