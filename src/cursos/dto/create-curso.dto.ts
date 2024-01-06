import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CursoDto {
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @MaxLength(50, { message: 'Descrição precisa ter maximo 10 caracteres.' })
  @IsString({ message: 'A descricao deve ser uma string.' })
  descricao: string;
}
