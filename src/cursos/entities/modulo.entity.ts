import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Curso } from './curso.entity';
import { Matricula } from '@/matricula/entities/matricula.entity';

@Entity()
export class Modulo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  isAtivo: boolean;

  @ManyToMany(() => Curso)
  @JoinTable({
    name: 'modulos_cursos', 
    joinColumn: { name: 'id_modulo', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_curso', referencedColumnName: 'id' },
  })
  cursos: Curso[];

  @OneToMany(() => Matricula, matricula => matricula.modulo)
  matricula: Matricula[];
}
