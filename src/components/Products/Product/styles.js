import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "16px !important",
  },
  cardContent: {
    textAlign: "center",
    height: "130px",
  },
  price: {
    fontWeight: '700 !important'
  }
}));
