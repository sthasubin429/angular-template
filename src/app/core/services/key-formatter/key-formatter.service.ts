import { Injectable } from '@angular/core';
import { caseName } from '../../enums';

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

  public toTitle = (s: string): string => {
    if (s) {
      return s.charAt(0).toUpperCase() + s.slice(1).replace(/([-_][a-z])/gi, ($1: string) => $1.toUpperCase().replace('_', ' '));
    } else {
      return s;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public convertKeys(o: any, destinationFormat: caseName = caseName.snake): object {
    let fn: (str: string) => string = this.toSnake;
    if (destinationFormat === caseName.snake) {
      fn = this.toSnake;
    } else if (destinationFormat === caseName.camel) {
      fn = this.toCamel;
    }
    if (this.isObject(o)) {
      const formattedObject: {[key: string]: unknown } = {};

      for (const key in o) {
        if ({}.hasOwnProperty.call(o, key)) {
          formattedObject[fn(key)] = this.convertKeys(o[key], destinationFormat);
        }
      }
      return formattedObject;
    } else if (this.isArray(o)) {
      return o.map((i: string) => this.convertKeys(i, destinationFormat));
    }
    return o;
  }

  private isArray(a: unknown): boolean {
    return Array.isArray(a);
  }

  private isObject(o: unknown): boolean {
    return o === Object(o) && !this.isArray(o) && typeof o !== 'function';
  }
}
