import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '100', nullable: false })
  descricao: string;
}
