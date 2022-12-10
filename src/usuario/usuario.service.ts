import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioService {
	private usuarios = [];

	public salva(usuario) {
		this.usuarios.push(usuario);

		return usuario;
	}
}
