import { Injectable } from '@angular/core';
import { caseName } from '@core/enums';

@Injectable({
  providedIn: 'root'
})
export class KeyFormatterService {

  // to convert the snake case object key to camel case
  public toCamel = (str: string): string => str.replace(/([-_][a-z])/gi, ($1: string): string => $1.toUpperCase().replace('_', ''));

  // to convert the camel case object key to snake case
  public toSnake = (str: string): string => str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word: string) => word.toLowerCase())
    .join('_');

  public toTitle = (str: string): string => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).replace(/([-_][a-z])/gi, ($1: string) => $1.toUpperCase().replace('_', ' '));
    } else {
      return str;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public convertKeys(obj: any, destinationFormat: caseName = caseName.snake): object {
    let fn: (str: string) => string = this.toSnake;
    if (destinationFormat === caseName.snake) {
      fn = this.toSnake;
    } else if (destinationFormat === caseName.camel) {
      fn = this.toCamel;
    }
    if (this.isObject(obj)) {
      const formattedObject: {[key: string]: unknown } = {};

      for (const key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) {
          formattedObject[fn(key)] = this.convertKeys(obj[key], destinationFormat);
        }
      }
      return formattedObject;
    } else if (this.isArray(obj)) {
      return obj.map((i: string) => this.convertKeys(i, destinationFormat));
    }
    return obj;
  }

  private isArray(arr: unknown): boolean {
    return Array.isArray(arr);
  }

  private isObject(obj: unknown): boolean {
    return obj === Object(obj) && !this.isArray(obj) && typeof obj !== 'function';
  }
}
