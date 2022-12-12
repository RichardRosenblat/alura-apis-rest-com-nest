import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller("/users")
export class UsuarioController {
    constructor(private readonly service: UsuarioService) {}

    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        const novoUsuario = this.service.cria(usuario);
        return new NestResponseBuilder()
            .comStatus(201)
            .comHeaders({ Location: `/users/${novoUsuario.nomeDeUsuario}` })
            .comBody(novoUsuario)
            .build();
    }

    @Get("/:nomeDeUsuario")
    public buscaPorNomeDeUsuario(@Param("nomeDeUsuario") nomeDeUsuario: string) {
        const usuarioEncontrado = this.service.buscaPorNomeDeUsuario(nomeDeUsuario);
        if (!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode:HttpStatus.NOT_FOUND,
                message:"Usuario não encontrado"
            });
        }
        return usuarioEncontrado;
    }
}
