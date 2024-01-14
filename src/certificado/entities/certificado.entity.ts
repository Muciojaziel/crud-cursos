import { Matricula } from '@/matricula/entities/matricula.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Certificado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hash: string;

  @Column()
  data_emissao: Date;

  @OneToOne(() => Matricula, matricula => matricula.certificado)
  @JoinColumn({name: 'id_estudante_curso'})
  matricula: Matricula;
}
