import { Matricula } from '@/matricula/entities/matricula.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  nome_abreviado: string;

  @Column()
  nome_mae: string;

  @Column()
  data_nascimento: string;

  @Column()
  cpf: string;

  @Column()
  isAtivo: boolean;

  @OneToMany(() => Matricula, matricula => matricula.estudante)
  matriculas: Matricula[];
}
