import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {BaseEntityFull} from "./template/BaseEntityFull";
import {EduForm} from "./EduForm";
import {EduLang} from "./EduLang";
import {AdmissionType} from "./AdmissionType";

@Entity('edu_direction')
export class EduDirection extends BaseEntityFull {
    @Column({type: 'text', nullable: false})
    name_uz!: string;

    @Column({type: 'text', nullable: false})
    name_en!: string;

    @Column({type: 'text', nullable: false})
    name_ru!: string;

    @Column({type: 'text', nullable: true})
    exam_name!: string;

    @Column("int", {array: true, default: () => "'{}'"})
    edu_lang_ids!: number[];

    @Column({type: 'int', nullable: true})
    year!: number;

    @Column({type: 'decimal', precision: 10, scale: 2, default: 0})
    contract_price!: number
    @Column({type: 'text', nullable: true})
    direction_code!: string;


    @ManyToOne(() => EduForm, edu_form => edu_form.id)
    @JoinColumn({name: 'edu_form_id'})
    edu_form!: EduForm;

    @Column({name: 'edu_form_id', nullable: true})
    edu_form_id!: number; // Foreign key sifatida saqlanad

}