import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736260794060 implements MigrationInterface {
    name = 'Migration1736260794060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`projects_devs\` (\`projectsId\` int NOT NULL, \`devsId\` int NOT NULL, INDEX \`IDX_f895a8da72e9ace40721e55277\` (\`projectsId\`), INDEX \`IDX_4daf49801e5d87ba503a07c5e6\` (\`devsId\`), PRIMARY KEY (\`projectsId\`, \`devsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`projects_devs\` ADD CONSTRAINT \`FK_f895a8da72e9ace40721e55277b\` FOREIGN KEY (\`projectsId\`) REFERENCES \`projects\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`projects_devs\` ADD CONSTRAINT \`FK_4daf49801e5d87ba503a07c5e65\` FOREIGN KEY (\`devsId\`) REFERENCES \`devs\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects_devs\` DROP FOREIGN KEY \`FK_4daf49801e5d87ba503a07c5e65\``);
        await queryRunner.query(`ALTER TABLE \`projects_devs\` DROP FOREIGN KEY \`FK_f895a8da72e9ace40721e55277b\``);
        await queryRunner.query(`DROP INDEX \`IDX_4daf49801e5d87ba503a07c5e6\` ON \`projects_devs\``);
        await queryRunner.query(`DROP INDEX \`IDX_f895a8da72e9ace40721e55277\` ON \`projects_devs\``);
        await queryRunner.query(`DROP TABLE \`projects_devs\``);
    }

}
