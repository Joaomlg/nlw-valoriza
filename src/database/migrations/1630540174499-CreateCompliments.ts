import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1630540174499 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compliments",
        columns: [
          {name: "id", type: "uuid", isPrimary: true},
          {name: "user_sender_id", type: "uuid"},
          {name: "user_receiver_id", type: "uuid"},
          {name: "tag_id", type: "uuid"},
          {name: "message", type: "varchar"},
          {name: "created_at", type: "timestamp", default: "now()"}
        ],
        foreignKeys: [
          {
            name: "FKUserSenderCompliments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_sender_id"],
            onDelete: "SET NULL"
          },
          {
            name: "FKUserReceiverCompliments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_receiver_id"],
            onDelete: "SET NULL"
          },
          {
            name: "FKTagCompliments",
            referencedTableName: "tags",
            referencedColumnNames: ["id"],
            columnNames: ["tag_id"],
            onDelete: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("compliments");
  }
}
