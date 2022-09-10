using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEnd.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "jobs",
                columns: table => new
                {
                    idjob = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    jobdescription = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_jobs", x => x.idjob);
                });

            migrationBuilder.CreateTable(
                name: "employees",
                columns: table => new
                {
                    idemployee = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    empnumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    firstname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lastname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gender = table.Column<int>(type: "int", nullable: true),
                    salary = table.Column<int>(type: "int", nullable: true),
                    birthdate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    dateTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    passwordsalt = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    idjob = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employees", x => x.idemployee);
                    table.ForeignKey(
                        name: "FK_employees_jobs_idjob",
                        column: x => x.idjob,
                        principalTable: "jobs",
                        principalColumn: "idjob",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_employees_idjob",
                table: "employees",
                column: "idjob");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employees");

            migrationBuilder.DropTable(
                name: "jobs");
        }
    }
}
