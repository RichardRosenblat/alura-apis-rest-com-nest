import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller("/users")
export class UsuarioController {
	constructor(private readonly service: UsuarioService) {}

	@Post()
	public cria(@Body() usuario) {
		return this.service.salva(usuario);
	}
}
