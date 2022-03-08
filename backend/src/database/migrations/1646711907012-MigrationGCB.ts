import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationGCB1646711907012 implements MigrationInterface {
    name = 'MigrationGCB1646711907012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "InfoDoctors" ("id" character varying NOT NULL, "nome" character varying(120) NOT NULL, "crm" bigint NOT NULL, "telFixo" bigint NOT NULL, "telCelular" bigint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "Updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_999cb21fdad42db8c9ea95eaff4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying NOT NULL, "logradouro" character varying NOT NULL, "complemento" character varying NOT NULL, "bairro" character varying NOT NULL, "id_doctor" character varying NOT NULL, "localidade" character varying NOT NULL, "uf" character varying NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "REL_120f2a1809db0d31122ea20d3b" UNIQUE ("id_doctor"), CONSTRAINT "PK_f108093ea9cd9f59d72c2f1a057" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specialties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_ba01cec5aa8ac48778a1d097e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "InfoDoctors-Specialties" ("id_doctor" character varying NOT NULL, "id_specialties" uuid NOT NULL, CONSTRAINT "PK_593384a56cb2287d8ae965e73ea" PRIMARY KEY ("id_doctor", "id_specialties"))`);
        await queryRunner.query(`ALTER TABLE "adress" ADD CONSTRAINT "FK_120f2a1809db0d31122ea20d3b3" FOREIGN KEY ("id_doctor") REFERENCES "InfoDoctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "InfoDoctors-Specialties" ADD CONSTRAINT "FK_1f93f1bd55f1df9045d38778629" FOREIGN KEY ("id_doctor") REFERENCES "InfoDoctors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "InfoDoctors-Specialties" ADD CONSTRAINT "FK_9cc0e6496b4802eae30ab4643f2" FOREIGN KEY ("id_specialties") REFERENCES "specialties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "InfoDoctors-Specialties" DROP CONSTRAINT "FK_9cc0e6496b4802eae30ab4643f2"`);
        await queryRunner.query(`ALTER TABLE "InfoDoctors-Specialties" DROP CONSTRAINT "FK_1f93f1bd55f1df9045d38778629"`);
        await queryRunner.query(`ALTER TABLE "adress" DROP CONSTRAINT "FK_120f2a1809db0d31122ea20d3b3"`);
        await queryRunner.query(`DROP TABLE "InfoDoctors-Specialties"`);
        await queryRunner.query(`DROP TABLE "specialties"`);
        await queryRunner.query(`DROP TABLE "adress"`);
        await queryRunner.query(`DROP TABLE "InfoDoctors"`);
    }

}
