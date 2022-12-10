import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
	private usuarios: Usuario[] = [
		{
			id: 1,
			nomeDeUsuario: "user1",
			email: "user1",
			senha: "user1",
			nomeCompleto: "user1",
			dataDeEntrada: new Date(),
		},
	];

	public buscaPorNomeDeUsuario(nomeDeUsuario: string) {
		return this.usuarios.find((usuario) => usuario.nomeDeUsuario === nomeDeUsuario);
	}

	public cria(usuario: Usuario): Usuario {
		this.usuarios.push(usuario);

		return usuario;
	}
}
