import {HttpParams} from '@angular/common/http';


export function buildHttpParams(params: any): HttpParams {
  const model: any = JSON.parse(JSON.stringify(params));
  let httpParams = new HttpParams();
  let prop: any;
  for (prop in model) {
    if (model[prop] !== '-1' &&
      model[prop] !== undefined &&
      model[prop] !== null &&
      model[prop] !== '') {
      httpParams = httpParams.set(prop, model[prop]);
    }
  }
  return httpParams;
}



