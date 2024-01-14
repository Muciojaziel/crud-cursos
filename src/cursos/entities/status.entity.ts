import { Matricula } from '@/matricula/entities/matricula.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => Matricula, matricula => matricula.status)
  status: Matricula[];
}
