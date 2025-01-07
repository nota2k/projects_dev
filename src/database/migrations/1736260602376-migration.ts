import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736260602376 implements MigrationInterface {
    name = 'Migration1736260602376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`projects_devs_devs\` (\`projectsId\` int NOT NULL, \`devsId\` int NOT NULL, INDEX \`IDX_17f2d1ab96703cda7f5fe8e3e3\` (\`projectsId\`), INDEX \`IDX_49f97fec9dcb10a285f281bc1e\` (\`devsId\`), PRIMARY KEY (\`projectsId\`, \`devsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`projects_devs_devs\` ADD CONSTRAINT \`FK_17f2d1ab96703cda7f5fe8e3e36\` FOREIGN KEY (\`projectsId\`) REFERENCES \`projects\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`projects_devs_devs\` ADD CONSTRAINT \`FK_49f97fec9dcb10a285f281bc1e3\` FOREIGN KEY (\`devsId\`) REFERENCES \`devs\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects_devs_devs\` DROP FOREIGN KEY \`FK_49f97fec9dcb10a285f281bc1e3\``);
        await queryRunner.query(`ALTER TABLE \`projects_devs_devs\` DROP FOREIGN KEY \`FK_17f2d1ab96703cda7f5fe8e3e36\``);
        await queryRunner.query(`ALTER TABLE \`projects\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD \`price\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_49f97fec9dcb10a285f281bc1e\` ON \`projects_devs_devs\``);
        await queryRunner.query(`DROP INDEX \`IDX_17f2d1ab96703cda7f5fe8e3e3\` ON \`projects_devs_devs\``);
        await queryRunner.query(`DROP TABLE \`projects_devs_devs\``);
    }

}
