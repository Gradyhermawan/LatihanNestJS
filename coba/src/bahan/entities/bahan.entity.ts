import { Kayu } from "src/kayu/entities/kayu.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Bahan {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    nama: string;
  
    @Column('text')
    jumlah: string;

    @ManyToOne(() => Kayu, (kayu) => kayu.bahan)
    kayu: Kayu
}

