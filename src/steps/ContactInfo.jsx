import React from "react";
import Grid from "@material-ui/core/Grid";
import * as Formik from "formik";
import * as Yup from "yup";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import * as Redux from "react-redux";
import { Actions } from "../redux";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Слишком коротко!")
    .max(50, "Слишком длинное!")
    .matches(/^[А-Яа-я-]+$/, "Некорректное имя!")
    .required("Обязательное поле"),
  lastName: Yup.string()
    .min(2, "Слишком коротко!")
    .max(50, "Слишком длинная!")
    .matches(/^[А-Яа-я-]+$/, "Некорректная фамилия!")
    .required("Обязательное поле"),
  country: Yup.string()
    .min(2, "Слишком коротко!")
    .max(50, "Слишком длинная!")
    .matches(/^[А-Яа-я-]+$/, "Некорректное название!")
    .required("Обязательное поле"),
  city: Yup.string()
    .trim()
    .min(2, "Слишком коротко!")
    .max(50, "Слишком длинный!")
    .matches(/^[А-Яа-я-]+$/, "Некорректное название!")
    .required("Обязательное поле"),
  phone: Yup.string()
    .matches(/^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}/, "Некорректный номер!")
    .required("Обязательное поле"),
});

const ContactInfo = ({ title }) => {
  const dispatch = Redux.useDispatch();

  const { firstName, lastName, country, city, phone } = Redux.useSelector(
    (state) => state.orderInfo,
  );

  const formik = Formik.useFormik({
    initialValues: {
      firstName,
      lastName,
      country,
      city,
      phone,
    },
    validationSchema: validationSchema,
  });

  const handleChange = ({ target }) => {
    formik.setFieldValue(target.id, target.value);

    dispatch(Actions.setContactInfo(target.id, target.value));
  };

  React.useEffect(() => dispatch(Actions.setValidStep(title, formik.isValid)));

  return (
    <div>
      <Typography variant="h3">Контактная информация</Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="firstName"
            label="Имя"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="lastName"
            label="Фамилия"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="country"
            label="Страна"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={country}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="city"
            label="Город"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={city}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="phone"
            label="Номер телефона"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactInfo;
