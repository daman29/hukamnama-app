import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { PageResult } from '../interfaces/page.interface';
import { Shabad } from '../interfaces/shabad.interface';

@Injectable({ providedIn: 'root' })
export class HukamnamaService {
  private http = inject(HttpClient);

  private readonly apiUrl = 'https://api.banidb.com/v2/';

  shabad: Shabad | null = null;

  async getPage(pageNumber: number) {
    const getUrl = this.apiUrl + `angs/${pageNumber}/`;
    return await lastValueFrom(this.http.get<PageResult>(getUrl));
  }

  async getFirstShabad(pageNumber: number) {
    const page: PageResult = await this.getPage(pageNumber);

    return page.page[0].shabadId;
  }

  async getShabad(shabadId: number) {
    const getUrl = this.apiUrl + `shabads/${shabadId}`;
    return await lastValueFrom(this.http.get<Shabad>(getUrl));
  }
}
