import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cursos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;
}
