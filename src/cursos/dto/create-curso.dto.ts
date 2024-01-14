import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  IsBoolean,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';


export class CursoDto {
  @ApiProperty({ description: 'Nome do curso', required: true, type: String })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @Transform(({ value }) => value.trim())
  @MaxLength(50, { message: 'Nome precisa ter no máximo 50 caracteres.' })
  @IsString({ message: 'O nome deve ser uma string.' })
  nome: string | null;

  @ApiProperty({ description: 'Descrição do curso', required: true, type: String })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: 'Descrição não pode ser vazia' })
  @MaxLength(500, {
    message: 'Descrição precisa ter no máximo 500 caracteres.',
  })
  @IsString({ message: 'A descrição deve ser uma string.' })
  descricao: string | null;

  @ApiProperty({ description: 'Carga horária do curso', required: true, type: Number })
  @IsInt({ message: 'A carga horária deve ser um número.' })
  @IsNotEmpty()
  @Min(1, { message: 'A carga horária não pode ser negativa e deve ser no mínimo 1.' })
  carga_horaria: number | null;

  @ApiProperty({ description: 'Preço do curso', required: true })
  @IsNotEmpty()
  @IsNumber({}, { message: 'O preço deve ser um número.' })
  @Min(0, { message: 'O preço não pode ser negativo e e deve ser no mínimo 0.' })
  preco: number | null;

  @ApiProperty({ description: 'Status Curso', required: true })
  @IsNotEmpty()
  @IsBoolean()
  isAtivo: boolean | null;
}