import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateCursoDto {
  @IsNotEmpty({ message: 'Descrição não pode ser vazio' })
  @MaxLength(50, { message: 'Descrição precisa ter maximo 50 caracteres.' })
  @IsString({ message: 'A descricao deve ser uma string.' })
  descricao: string;
}
