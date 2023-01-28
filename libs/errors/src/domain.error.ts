import { ValidationError } from '@nestjs/common';

export class DomainError extends Error {
  constructor(errors: ValidationError[], message?: string) {
    const _errors: string[] = [];
    errors.length &&
      errors.forEach((err) => {
        err?.constraints &&
          Object.entries(err.constraints).forEach((v) => {
            _errors.push(v[1]);
          });
      });
    super(
      `Errors: ${_errors.join('; ')}${message ? `. Message: ${message}` : ''}`,
    );
    this.name = DomainError.name;
  }
}
