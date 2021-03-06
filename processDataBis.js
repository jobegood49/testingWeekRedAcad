let mockData = [
  {
    name: "Miss Jermain Waters",
    age: 31,
    yearsExperience: 3,
    satisfaction: 2,
    project1: "pass",
    project2: "fail",
    project3: "fail",
    project4: "pass"
  },
  {
    name: "Juliana Runte",
    age: 42,
    yearsExperience: 3,
    satisfaction: 1,
    project1: "fail",
    project2: "fail",
    project3: "fail",
    project4: "pass"
  },
  {
    name: "Emmalee Daugherty",
    age: 25,
    yearsExperience: 2,
    satisfaction: 4,
    project1: "fail",
    project2: "pass",
    project3: "pass",
    project4: "fail"
  },
  {
    name: "Emmalee DaughertyBis",
    age: 25,
    yearsExperience: 2,
    satisfaction: 4,
    project1: "fail",
    project2: "pass",
    project3: "pass",
    project4: "fail"
  },
  {
    name: "Emmalee DaughertyBis",
    age: 25,
    yearsExperience: 4,
    satisfaction: 4,
    project1: "fail",
    project2: "pass",
    project3: "pass",
    project4: "fail"
  }
];

let project = (array, projectName) => {
  let passed = 0;
  let failed = 0;
  let satisfactionPassed = 0;
  let satisfactionFailed = 0;
  array.forEach(el => {
    if (el[projectName] === "pass") passed++;
    if (el[projectName] === "fail") failed++;
    if (el[projectName] === "pass")
      satisfactionPassed = satisfactionPassed + el["satisfaction"];
    if (el[projectName] === "fail")
      satisfactionFailed = satisfactionFailed + el["satisfaction"];
  });
  let satisfactionPassedAverage = satisfactionPassed / array.length;
  let satisfactionFailedAverage = satisfactionFailed / array.length;
  return {
    passed: { number: passed, satifaction: satisfactionPassedAverage },
    failed: { number: failed, satisfaction: satisfactionFailedAverage }
  };
};

let projects = () => {
  return {
    project1: project(mockData, "project1"),
    project2: project(mockData, "project2"),
    project3: project(mockData, "project3"),
    project4: project(mockData, "project4")
  };
};

let experience = () => {
  let experience = {};
  let experienceCount = {};
  mockData.forEach(element => {
    if (!experience[element.yearsExperience])
      experience[element.yearsExperience] = element.satisfaction;
    else
      experience[element.yearsExperience] =
        experience[element.yearsExperience] + element.satisfaction;
  });

  mockData.forEach(element => {
    if (!experienceCount[element.yearsExperience])
      experienceCount[element.yearsExperience] = 1;
    else
      experienceCount[element.yearsExperience] =
        experienceCount[element.yearsExperience] + 1;
  });

  for (var prop in experience) {
    experience[prop] = experience[prop] / experienceCount[prop];
  }

  return experience;
};

let demographics = () => {
  let counter = 0;
  let ageCount = 0;
  let satifactionCount = 0;
  mockData.forEach(element => {
    ageCount += element.age;
    satifactionCount += element.satisfaction;
    counter += 1;
  });
  return {
    averageAge: ageCount / counter,
    satisfaction: satifactionCount / counter
  };
};

let processedData = {
  projects: projects(),
  experience: experience(),
  demographics: demographics()
};

console.log(processedData);

// console.log(processedData.projects.project1);
// console.log(processedData.projects.project2);
// console.log(processedData.projects.project3);
// console.log(processedData.projects.project4);
// console.log(processedData.experience);
// console.log(processedData.demographics);
