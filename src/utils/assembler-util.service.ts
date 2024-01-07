import { Injectable } from '@nestjs/common';

@Injectable()
export class AssemblerUtilService {
  public mapDtoToEntity<T>(entity: T, dto: Partial<T>): T {
    Object.keys(dto).forEach((key) => {
      if (dto[key] !== undefined) {
        entity[key] = dto[key];
      }
    });
    return entity;
  }
}
