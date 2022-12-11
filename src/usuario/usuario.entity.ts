import { Exclude } from "class-transformer";
import { Expose } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";
export class Usuario {
	id: number;

	@Expose({
		name: "username",
	})
	@IsNomeDeUsuarioUnico({
		message: "nomeDeUsuario deve ser unico",
	})
	@IsNotEmpty({
		message: "nomeDeUsuario é obrigatório.",
	})
	@IsString({
		message: "nomeDeUsuario precisa ser uma string.",
	})
	nomeDeUsuario: string;
	@Expose({
		name: "email",
	})
	@IsEmail(
		{},
		{
			message: "email precisa ser um endereço de email válido.",
		}
	)
	email: string;

	@IsNotEmpty({
		message: "senha é obrigatório.",
	})
	@Exclude({
		toPlainOnly: true,
	})
	@Expose({
		name: "password",
	})
	senha: string;

	@IsNotEmpty({
		message: "nomeCompleto é obrigatório.",
	})
	@Expose({
		name: "fullName",
	})
	nomeCompleto: string;
	@Expose({
		name: "joinDate",
	})
	dataDeEntrada: Date;
}
