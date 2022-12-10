import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller("/users")
export class UsuarioController {
	constructor(private readonly service: UsuarioService) {}

	@Post()
	public cria(@Body() usuario: Usuario): Usuario {
		return this.service.cria(usuario);
	}
	@Get('/:nomeDeUsuario')
	public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario:string){
		return this.service.buscaPorNomeDeUsuario(nomeDeUsuario)
	}
}
