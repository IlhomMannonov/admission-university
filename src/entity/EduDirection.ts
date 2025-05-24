import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {BaseEntityFull} from "./template/BaseEntityFull";
import {EduForm} from "./EduForm";
import {EduLang} from "./EduLang";

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

}