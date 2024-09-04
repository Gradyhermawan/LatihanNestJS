import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sepatu {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    nama: string;
  
    @Column('int')
    ukuran: number;

    @Column('text')
    warna: string;
}
