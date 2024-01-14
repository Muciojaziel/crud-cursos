import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Estudante } from '../../estudante/entities/estudante.entity';
import { Curso } from '@cursos/entities/curso.entity';
import { Status } from '@cursos/entities/status.entity';
import { Certificado } from '@/certificado/entities/certificado.entity';
import { Modulo } from '@cursos/entities/modulo.entity';

@Entity()
export class Matricula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data_inicio: Date;

  @Column()
  data_conclusao: Date;

  @Column()
  nota: number;

  @ManyToOne(() => Estudante, estudante => estudante.matriculas)
  @JoinColumn({name: 'id_matricula'})
  estudante: Estudante;
  
  @ManyToOne(() => Curso, curso => curso.matriculas)
  @JoinColumn({name: 'id_curso'})
  curso: Curso;

  @ManyToOne(() => Modulo, modulo => modulo.matricula)
  @JoinColumn({name: 'id_modulo'})
  modulo: Modulo;

  @OneToOne(() => Certificado, certificado => certificado.matricula)
  certificado: Certificado;

  @ManyToOne(() => Status)
  @JoinColumn({name: 'id_status'})
  status: Status;
}
