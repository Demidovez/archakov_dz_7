import * as Redux from "react-redux";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Actions } from "../redux";

function ContactInfo() {
  const dispatch = Redux.useDispatch();
  const { firstName, lastName, country, city, phone } = Redux.useSelector(
    (state) => state.orderInfo
  );

  const handleChange = ({ target }) =>
    dispatch(Actions.setContactInfo(target.id, target.value));

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
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="lastName"
            label="Фамилия"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="country"
            label="Страна"
            variant="outlined"
            fullWidth
            value={country}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="city"
            label="Город"
            variant="outlined"
            fullWidth
            value={city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="phone"
            label="Номер телефона"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactInfo;
