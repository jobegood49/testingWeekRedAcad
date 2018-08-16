const StudentStats = require("../lib/student-stats");

describe("Student Stats", () => {
  let statsMachine;
  beforeEach(() => {
    statsMachine = new StudentStats("../lib/data.json");
    processedData = {
      projects: {
        project1: {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        3: { satisfaction: 10 }
      },
      demographics: {
        averageAge: 10,
        satisfaction: 10
      }
    };
  });

  it("should load the JSON", () => {
    expect(statsMachine.data).toBeDefined();
    expect(statsMachine.data[0].name).toEqual("Miss Jermain Waterss");
  });

  describe("Query Object query by name", () => {
    describe("when project name does not exists", () => {
      it("should throw error", () => {
        expect(statsMachine.getProjectByName("project1")).toThrow(
          "Invalid project provided"
        );
      });
    });

    describe("when project name exists", () => {
      it("should return correct stats", () => {
        expect(statsMachine.getProjectByName("project1")).toEqual(
          processedData.projects["project1"]
        );
      });
    });
  });
});
