import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Kayu {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('int')
    length: number;
  
    @Column('int')
    diameter: number;

    @Column('text')
    nama_kayu: string;

    @Column('text')
    kode_kayu: string;

    @Column('date')
    arrived_date: Date;
}
