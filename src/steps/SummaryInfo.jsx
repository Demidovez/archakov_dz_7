import * as Redux from "react-redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PaymentIcon from "@material-ui/icons/Payment";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

function SummaryInfo() {
  const state = Redux.useSelector((state) => state);

  return (
    <div className="summary-info">
      <Typography variant="h2">Подтверждение и оплата</Typography>
      <Divider />
      <Typography variant="h3">Контактная информация:</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary={state.orderInfo.firstName} secondary="Имя" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText
            primary={state.orderInfo.lastName}
            secondary="Фамилия"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary={state.orderInfo.country} secondary="Страна" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationCityIcon />
          </ListItemIcon>
          <ListItemText primary={state.orderInfo.city} secondary="Город" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText
            primary={state.orderInfo.phone}
            secondary="Номер телефона"
          />
        </ListItem>
      </List>
      <Typography variant="h3">Способ доставки:</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              state.orderInfo.deliveryMethod + " / " + state.deliveryForwarding
            }
            secondary="Курьерская служба"
          />
        </ListItem>
      </List>
      <Typography variant="h3">Оплата с помощью:</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText
            primary={state.orderInfo.paymentMethod}
            secondary="Банковская карта"
          />
        </ListItem>
      </List>
    </div>
  );
}

export default SummaryInfo;
