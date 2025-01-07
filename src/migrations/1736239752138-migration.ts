import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1736239752138 implements MigrationInterface {
    name = 'Migration1736239752138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`devs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`experience_level\` int NOT NULL, \`status\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`projects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`deadline\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`clientId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`projects\` ADD CONSTRAINT \`FK_091f9433895a53408cb8ae3864f\` FOREIGN KEY (\`clientId\`) REFERENCES \`clients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects\` DROP FOREIGN KEY \`FK_091f9433895a53408cb8ae3864f\``);
        await queryRunner.query(`DROP TABLE \`projects\``);
        await queryRunner.query(`DROP TABLE \`clients\``);
        await queryRunner.query(`DROP TABLE \`devs\``);
    }

}
