const UserValidation = (values) => {
    const errors = {};

    if (!values.title || values.title === "") {
        errors.title = "Title harus diisi";
      }

      if (!values.description || values.description === "") {
        errors.description = "Description harus diisi";
      }

      if (!values.status || values.status === "") {
        errors.status = "Status harus diisi 0/1";
      }
      return errors;
}

export default UserValidation