import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Modulo } from './modulo.entity';
import { Matricula } from '@/matricula/entities/matricula.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column({nullable: false})
  carga_horaria: number;

  @Column({nullable: false})
  preco: number;

  @Column({nullable: false})
  isAtivo: boolean;

  @OneToMany(() => Matricula, matricula => matricula.curso)
  matriculas: Matricula[];

  @ManyToMany(() => Modulo, (modulo) => modulo.cursos)
  modulos: Modulo[];
}
