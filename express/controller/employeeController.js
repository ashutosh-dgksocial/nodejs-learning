// MVC REST API
const data = {
    employees: require('../model/employees.json'),
    setEmployees: function (data) { this.employees = data; }
};

const getAllEmployees = (req, res) => {
    res.json(data.employees);
};

const createNewEmployee = (req, res) => {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
        return res.status(400).json({ message: "First and last names are required." });
    }

    const newEmployee = {
        id: (data.employees.length > 0 ? data.employees[data.employees.length - 1].id : 0) + 1,
        firstName,
        lastName
    };

    data.setEmployees([...data.employees, newEmployee]);
    res.status(201).json({ message: "Employee created successfully", employee: newEmployee });
};

const updateEmployee = (req, res) => {
    const employeeId = parseInt(req.params.id); // Use URL parameter
    const employeeIndex = data.employees.findIndex(emp => emp.id === employeeId);

    if (employeeIndex === -1) {
        return res.status(404).json({ message: `Employee ID ${employeeId} not found` });
    }

    const updatedEmployee = {
        ...data.employees[employeeIndex],
        ...req.body // Update only provided fields
    };

    data.setEmployees([
        ...data.employees.slice(0, employeeIndex),
        updatedEmployee,
        ...data.employees.slice(employeeIndex + 1)
    ]);

    res.json({ message: "Employee updated successfully", employee: updatedEmployee });
};

const deleteEmployee = (req, res) => {
    const employeeId = parseInt(req.params.id); // Use URL parameter
    const employeeIndex = data.employees.findIndex(emp => emp.id === employeeId);

    if (employeeIndex === -1) {
        return res.status(404).json({ message: `Employee ID ${employeeId} not found` });
    }

    data.setEmployees(data.employees.filter(emp => emp.id !== employeeId));
    res.json({ message: "Employee deleted successfully", employees: data.employees });
};

const getEmployee = (req, res) => {
    const employeeId = parseInt(req.params.id);
    const employee = data.employees.find(emp => emp.id === employeeId);

    if (!employee) {
        return res.status(404).json({ message: `Employee ID ${employeeId} not found` });
    }

    res.json(employee);
};

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
};
