module.exports = data => {
  let project = (data, projectName) => {
    let passed = 0;
    let failed = 0;
    let satisfactionPassed = 0;
    let satisfactionFailed = 0;
    data.forEach(el => {
      if (el[projectName] === "pass") passed++;
      if (el[projectName] === "fail") failed++;
      if (el[projectName] === "pass")
        satisfactionPassed = satisfactionPassed + el["satisfaction"];
      if (el[projectName] === "fail")
        satisfactionFailed = satisfactionFailed + el["satisfaction"];
    });
    let satisfactionPassedAverage = satisfactionPassed / data.length;
    let satisfactionFailedAverage = satisfactionFailed / data.length;
    return {
      passed: { number: passed, satifaction: satisfactionPassedAverage },
      failed: { number: failed, satisfaction: satisfactionFailedAverage }
    };
  };

  let projects = () => {
    return {
      project1: project(data, "project1"),
      project2: project(data, "project2"),
      project3: project(data, "project3"),
      project4: project(data, "project4")
    };
  };

  let experience = () => {
    let experience = {};
    let experienceCount = {};
    data.forEach(element => {
      if (!experience[element.yearsExperience])
        experience[element.yearsExperience] = element.satisfaction;
      else
        experience[element.yearsExperience] =
          experience[element.yearsExperience] + element.satisfaction;
    });

    data.forEach(element => {
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
    data.forEach(element => {
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
  return processedData
};
