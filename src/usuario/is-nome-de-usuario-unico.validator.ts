import { Injectable } from "@nestjs/common";
import {
	registerDecorator,
	ValidationOptions,
	ValidationArguments,
	ValidatorConstraintInterface,
	ValidatorConstraint,
} from "class-validator";
import { UsuarioService } from "./usuario.service";


@Injectable()
@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {
	constructor(private usuarioService: UsuarioService) {}
	validate(value: string, _validationArguments?: ValidationArguments): boolean {
		return !this.usuarioService.buscaPorNomeDeUsuario(value);
	}
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
	return function (object: Object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsNomeDeUsuarioUnicoConstraint,
		});
	};
}
