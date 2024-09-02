import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Barang {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    nama: string;
  
    @Column('text')
    jumlah: string;
}


