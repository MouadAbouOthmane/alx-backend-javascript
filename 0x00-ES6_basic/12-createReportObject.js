export default function createReportObject(employeesList) {
  const obj = {
    'allEmployees': employeesList,
    getNumberOfDepartments(objs) {
      return Object.keys(objs).length;
    },
  };

  return obj;
}
